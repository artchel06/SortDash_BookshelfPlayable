using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class BookInstantiate : MonoBehaviour
{
    public GameObject[] bookInstantiate;
    public Vector3 offsetVector;
    public GameObject originalPos;
    // Start is called before the first frame update
    void Start()
    {
        for (int i = 0; i < bookInstantiate.Length; i++)
        {
            GameObject instance = Instantiate(bookInstantiate[i], originalPos.transform);

            instance.transform.localPosition = Vector3.zero + offsetVector * i;
            instance.transform.localRotation = Quaternion.identity;
            instance.transform.localScale = Vector3.one;
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
