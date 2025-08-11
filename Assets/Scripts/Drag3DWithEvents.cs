using DG.Tweening;
using System.Text.RegularExpressions;
using UnityEngine.EventSystems;
using UnityEngine;

public class Drag3DWithEvents : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IDragHandler
{
    private Camera cam;
    private bool isDragging = false;
    private float fixedZOffset;
    private Vector3 originalPosition;
    private Collider objectCollider;
    Tween lastTween = null;

    [Header("Settings")]
    public float returnDuration = 1f; // duration of move to target
    public float staggerDelay = .3f;   // delay between each child animation

    private void Start()
    {
        cam = Camera.main;
        objectCollider = GetComponent<Collider>();
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        isDragging = true;
        originalPosition = transform.position;
        fixedZOffset = transform.position.z - cam.transform.position.z;
        if (objectCollider) objectCollider.enabled = false;
        transform.DOKill(); // stop any ongoing tweens
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!isDragging) return;

        Vector3 screenPos = Input.mousePosition;
        screenPos.z = fixedZOffset;
        Vector3 worldPos = cam.ScreenToWorldPoint(screenPos);
        transform.position = worldPos + Vector3.back; // small backward offset
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        isDragging = false;

        bool droppedInTray = false;
        Ray ray = cam.ScreenPointToRay(Input.mousePosition);

        if (Physics.Raycast(ray, out RaycastHit hit))
        {
            droppedInTray = TryPlaceInTray(hit.point, hit.collider.gameObject);
            Debug.Log("DetectDropZone");
            GameManager.Instance.zone = null;
        }

        if (!droppedInTray)
        {
            // Return to original position if no valid drop
            transform.DOMove(originalPosition, returnDuration)
                .SetEase(Ease.OutElastic, 0.2f, 0.7f)
                .OnComplete(() => { if (objectCollider) objectCollider.enabled = true; });
        }
        else
        {
            if (objectCollider) objectCollider.enabled = true;
        }
    }
    private bool TryPlaceInTray(Vector3 dropPoint, GameObject hitObject)
    {
        string colorName = Regex.Replace(transform.gameObject.name, @"Group\d*", "");
        if (hitObject.GetComponent<DropZone>().dropColor != colorName)
        {
            return false;
        }
        bool placed = false;
        // Determine which tray to use
        GameObject trayToUse = hitObject;
        ChildWatcher watcher = trayToUse.GetComponent<ChildWatcher>();
        if (watcher != null && watcher.IsFull())
        {
            GameManager.Instance.level++;
            Debug.Log("Watcher full");
            Debug.Log(watcher.IsFull());
            trayToUse = GameManager.Instance.secondParent;
            watcher = trayToUse.GetComponent<ChildWatcher>();
            if (watcher != null && watcher.IsFull())
            {
                Debug.Log("Both trays are full!");
                return false;
            }
        }
        else
        {
            Debug.Log("Watcher notfull");
            Debug.Log(trayToUse.name);
            Debug.Log(trayToUse.transform.childCount);
        }
        if (transform.childCount > 10 - GameManager.Instance.bookInTray)
        {
            int addIndex = 0;
            int booksInTray1 = GameManager.Instance.bookInTray;
            bool secondTray = false;
            for (var i = 0; i < transform.childCount; i++)
            {
                int targetIndex = GameManager.Instance.bookInTray;
                if (booksInTray1 >= 10 && !secondTray)
                {
                    trayToUse = GameManager.Instance.secondParent;
                    Debug.Log("sd------------------------------sd");
                    targetIndex = 0 + GameManager.Instance.bookInTray2;
                    addIndex = 0;
                    secondTray = true;
                    GameManager.Instance.bookInTray = 0;
                }
                GameObject targetGO = trayToUse.transform.GetChild(targetIndex + addIndex).gameObject;
                if (targetGO != null)
                {
                    Transform child = transform.GetChild(i);
                    float delay = i * staggerDelay;

                    child.DOMove(targetGO.transform.position, returnDuration)
                         .SetEase(Ease.OutExpo)
                         .SetDelay(delay);

                    // Keep track of the *last* rotation tween
                    lastTween = child.DORotateQuaternion(targetGO.transform.rotation, 1f)
                                     .SetEase(Ease.OutExpo)
                                     .SetDelay(delay)
                                     .OnComplete(() =>
                                     {
                                         child.SetParent(targetGO.transform, true);
                                         this.transform.GetComponent<BoxCollider>().enabled = false;
                                     });

                    targetGO.GetComponent<ChildSlot>().isOccupied = true;
                }
                addIndex++;
                booksInTray1++;
                if (secondTray)
                {
                    GameManager.Instance.bookInTray2++;
                }
            }

            // When the last tween finishes
            if (lastTween != null)
            {
                lastTween.OnComplete(() =>
                {
                    Debug.Log(" All tweens finished!");
                    GameManager.Instance.level++;
                    GameManager.Instance.bookInTray = 0;
                    trayToUse = GameManager.Instance.Tray.transform.GetChild(GameManager.Instance.level).gameObject;
                    // Place your final logic here
                });
            }

            GameManager.Instance.bookInTray += transform.childCount;
            return true;
        }
        // Loop through tray slots
        for (int slotIndex = 0; slotIndex <= trayToUse.transform.childCount - transform.childCount; slotIndex++)
        {
            bool allFree = true;
            // Check if all consecutive slots needed are free
            for (int check = 0; check < transform.childCount; check++)
            {
                Debug.Log(check + "inside check");
                ChildSlot checkSlot = trayToUse.transform.GetChild(slotIndex + check).GetComponent<ChildSlot>();
                if (checkSlot.isOccupied)
                {
                    Debug.Log("Inside Occupied");
                    allFree = false;
                    break;
                }
            }

            if (!allFree)
            {
                continue;
            }
            // Skip if any slot is occupied
            // Place books into slots with staggered animation
            for (int childIndex = 0; childIndex < transform.childCount; childIndex++)
            {
                int targetIndex = slotIndex + childIndex;
                GameObject targetGO = trayToUse.transform.GetChild(targetIndex).gameObject;

                if (targetGO != null)
                {
                    Transform child = transform.GetChild(childIndex);
                    float delay = childIndex * staggerDelay;

                    child.DOMove(targetGO.transform.position, returnDuration)
                         .SetEase(Ease.OutExpo)
                         .SetDelay(delay);

                    child.DORotateQuaternion(targetGO.transform.rotation, 1f)
                         .SetEase(Ease.OutExpo)
                         .SetDelay(delay)
                         .OnComplete(() =>
                         {
                             child.SetParent(targetGO.transform, true);
                             this.transform.GetComponent<BoxCollider>().enabled = false;
                         });
                    targetGO.GetComponent<ChildSlot>().isOccupied = true;
                }
                GameManager.Instance.bookInTray++;
            }
            placed = true;
            Debug.Log("inside loop");
            break; // Done placing
        }
        Debug.Log("end reach");
        return placed;
    }
}

