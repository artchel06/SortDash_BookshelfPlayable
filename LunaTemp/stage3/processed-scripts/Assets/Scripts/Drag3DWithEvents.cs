// Drag3DWithEvents.cs
using UnityEngine;
using UnityEngine.EventSystems;

public class Drag3DWithEvents : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IDragHandler
{
    private Camera cam;
    private bool isDragging = false;
    private float dragDistance;

    private void Start()
    {
        cam = Camera.main;
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        isDragging = true;

        Ray ray = cam.ScreenPointToRay(Input.mousePosition);
        if (Physics.Raycast(ray, out RaycastHit hit))
        {
            dragDistance = Vector3.Distance(cam.transform.position, hit.point);
        }
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!isDragging) return;

        Ray ray = cam.ScreenPointToRay(Input.mousePosition);
        Vector3 targetPos = ray.GetPoint(dragDistance);
        transform.position = targetPos;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        isDragging = false;
    }
}
