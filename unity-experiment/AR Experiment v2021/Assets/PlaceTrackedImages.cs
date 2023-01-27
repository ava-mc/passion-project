using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class PlaceTrackedImages : MonoBehaviour
{
    //Global variables

    //reference to Tracked image manager component that tracks the images for us
    private ARTrackedImageManager _trackedImageManager;

    //List of gameobjects
    //Each element in array corresponds to one of the images in the reference library that is being tracked
    //Give them the same name as the image being tracked
    public GameObject[] ArPrefabs;

    //Dictionary (keyed array) of all prefabs created
    private readonly Dictionary<string, GameObject> _instantiatedPrefabs = new Dictionary<string, GameObject>();

    void Awake()
    {
        //get reference to tracked image manager component
        //store in our global variable

        _trackedImageManager = GetComponent<ARTrackedImageManager>();

    }


    void OnEnable()
    {
        //Event handler that will listen and respond to events that happen on tracked image manager
        //when event is enabled, we will attach our function to handle image change event
        _trackedImageManager.trackedImagesChanged += OnTrackedImagesChanged;
    }

    void OnDisable()
    {
        //remove the event handler again
        _trackedImageManager.trackedImagesChanged -= OnTrackedImagesChanged;
    }

    //Function that needs to happen when image change event happens
    private void OnTrackedImagesChanged(ARTrackedImagesChangedEventArgs eventArgs)
    {
        //when new tracked image has been detected
        //loop through array of newly detected tracked images
        foreach (var trackedImage in eventArgs.added)
        {
            //name of reference image
            var imageName = trackedImage.referenceImage.name;

            //loop over array of prefabs to find corresponding GameObject
            foreach (var curPrefab in ArPrefabs)
            {
                //look for matching prefab and check that it has not been created yet
                if (string.Compare(curPrefab.name, imageName, System.StringComparison.OrdinalIgnoreCase) == 0
                    && !_instantiatedPrefabs.ContainsKey(imageName))
                {
                    //create the prefab that corresponds and parent it to the tracked image
                    var newPrefab = Instantiate(curPrefab, trackedImage.transform);
                    //add the new prefab to out array
                    _instantiatedPrefabs[imageName] = newPrefab;
                }
            }
        }

        //when existing image has updated
        //set prefabs to active tracking state, when image is currently being tracked
        // sets it to the same state as in 'the real world'
        foreach (var trackedImage in eventArgs.updated)
        {
            _instantiatedPrefabs[trackedImage.referenceImage.name]
                .SetActive(trackedImage.trackingState == TrackingState.Tracking);
        }


        //when image is not being tracked anymore
        foreach (var trackedImage in eventArgs.removed)
        {
            //destroy the prefab
            //Destroy(_instantiatedPrefabs[trackedImage.referenceImage.name]);
            //and remove it from our array
            //_instantiatedPrefabs.Remove(trackedImage.referenceImage.name);


            // Or, simply set the prefab instance to inactive
            _instantiatedPrefabs[trackedImage.referenceImage.name].SetActive(false);
        }


    }
}
