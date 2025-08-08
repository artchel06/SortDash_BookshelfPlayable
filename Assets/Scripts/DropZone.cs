using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DropZone : MonoBehaviour
{
    public string dropColor;
    private void OnDrawGizmos()
    {
        Gizmos.color = Color.green;
        Gizmos.DrawWireCube(transform.position, transform.localScale);
    }

    public bool IsWithinZone(Vector3 position)
    {
        Bounds bounds = new Bounds(transform.position, transform.localScale);
        return bounds.Contains(position);
    }

    public void OnItemDropped(GameObject item, Vector3 dropPosition)
    {
        Debug.Log("dropped in");
    }
}
