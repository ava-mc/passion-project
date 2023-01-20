import 'aframe';
import '@ar-js-org/ar.js';


const ARTest = () => {
    return (
      <>
        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          {/* <a-assets>
            <a-asset-item
              id="model"
              src="/assets/final.glb"
            ></a-asset-item>
          </a-assets> */}
          <a-nft
            samplehandler
            type="nft"
            url="https://followthedarkside.github.io/arjs-image-tracking-sample/resources/nft/ramen-1000px"
            smooth="true"
            smoothCount="10"
            smoothTolerance="0.01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model="/assets/LeePerrySmith.glb"
              scale="5 5 5"
              position="50 150 0"
            ></a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </>
    );
}

export default ARTest;