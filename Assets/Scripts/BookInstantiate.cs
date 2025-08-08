using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class BookInstantiate : MonoBehaviour
{
    public GameObject[] bookInstantiate;
    public Vector3 offsetVector;
    public GameObject originalPos;
    public Dictionary<string, Transform> colorGroups = new Dictionary<string, Transform>();
    // Start is called before the first frame update
    void Start()
    {
        foreach (GameObject prefab in bookInstantiate)
        {
            if (prefab == null) continue;
            Book bookComponent = prefab.GetComponent<Book>();
            if (bookComponent == null || string.IsNullOrEmpty(bookComponent.bookColor)) continue;
            string color = bookComponent.bookColor.ToLower();
            string groupName = char.ToUpper(color[0]) + color.Substring(1) + "Group";

            if (!colorGroups.ContainsKey(color))
            {
                int groupIndex = 1;
                string baseGroupName = char.ToUpper(color[0]) + color.Substring(1) + "Group";
                string groupName1 = baseGroupName;

                while (GameObject.Find(groupName1) != null)
                {
                    groupIndex++;
                    groupName1 = baseGroupName + groupIndex;
                }

                GameObject groupObj = new GameObject(groupName1);
                groupObj.transform.SetParent(originalPos.transform);
                groupObj.transform.localPosition = Vector3.zero;
                groupObj.transform.localRotation = Quaternion.identity;
                groupObj.transform.localScale = Vector3.one;

                BoxCollider box = groupObj.AddComponent<BoxCollider>();
                Drag3DWithEvents dragScript = groupObj.AddComponent<Drag3DWithEvents>();
                dragScript.returnDuration = 0.6f;
                if (!colorGroups.ContainsKey(color))
                {
                    colorGroups[color] = groupObj.transform;
                }
            }
        }

        for (int i = 0; i < bookInstantiate.Length; i++)
        {
            GameObject prefab = bookInstantiate[i];
            if (prefab == null) continue;
            {

            }

            Book bookComponent = prefab.GetComponent<Book>();
            if (bookComponent == null || string.IsNullOrEmpty(bookComponent.bookColor))
            {
                Debug.LogWarning($"bOOK AT INDEX {i} is missing a valid book script");
                continue;
            }

            string color = bookComponent.bookColor.ToLower();

            GameObject instance = Instantiate(prefab);
            Transform group = colorGroups[color];

            instance.transform.SetParent(group);
            instance.transform.localPosition = offsetVector * i;
            instance.transform.localRotation = Quaternion.identity;
            instance.transform.localScale = Vector3.one;
        }

        foreach (var kvp in colorGroups)
        {
            BoxCollider box = kvp.Value.GetComponent<BoxCollider>();
            if (box != null)
            {
                StartCoroutine(FitColliderToChildren(kvp.Value, box));
            }
            else
            {
                Debug.Log("warning no boxcollider");
            }
        }
    }
    private IEnumerator FitColliderToChildren(Transform group, BoxCollider box)
    {
        yield return null;
        if (group.childCount == 0) yield break;

        Renderer firstRenderer = group.GetChild(0).GetComponent<Renderer>();
        if (firstRenderer == null) yield break;

        Bounds worldBounds = firstRenderer.bounds;

        foreach (Transform child in group)
        {
            Renderer r = child.GetComponent<Renderer>();
            if (r != null)
            {
                worldBounds.Encapsulate(r.bounds);
            }
        }

        Vector3 localCenter = group.InverseTransformPoint(worldBounds.center);
        Vector3 localSize = group.InverseTransformVector(worldBounds.size);
        localSize = new Vector3(Mathf.Abs(localSize.x), Mathf.Abs(localSize.y), Mathf.Abs(localSize.z));

        box.center = localCenter;
        box.size = localSize;
    }
}