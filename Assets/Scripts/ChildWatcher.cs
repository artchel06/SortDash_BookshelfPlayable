using UnityEngine;

public class ChildWatcher : MonoBehaviour
{
    public int maxSlots = 10; // set in Inspector per tray

    public bool IsFull()
    {
        int occupiedCount = 0;

        for (int i = 0; i < transform.childCount; i++)
        {
            ChildSlot slot = transform.GetChild(i).GetComponent<ChildSlot>();
            if (slot != null && slot.isOccupied)
                occupiedCount++;
        }

        return occupiedCount >= maxSlots;
    }
}
