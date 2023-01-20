import { ARCanvas, ARMarker} from "@artcom/react-three-arjs";
// import { AMarkerCamera } from "aframe";
// extend({ AMarkerCamera });
// import { extend } from "@react-three/fiber";
// import "arjs";
// import '@ar-js-org/ar.js';
// import "aframe";
// require("aframe");


const ARTest = ({}) => {
  return (
    <ARCanvas
      style={{ zIndex: 10 }}
      camera={{ position: [0, 0, 0] }}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} />
      <ARMarker
        type={"pattern"}
        patternUrl={"data/hiro.patt"}
        onMarkerfound={() => console.log("found marker")}
        onMarkerlost={() => console.log("lost marker")}
        preset={"custom"}
      >
      {/* <aMarkerCamera preset="hiro" type="pattern" url="data/hiro.patt"> */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      {/* </aMarkerCamera> */}
      </ARMarker>
    </ARCanvas>
    // <>
    //   {/* <a-scene embedded arjs>
    //     <a-marker preset="hiro">
    //       <a-entity
    //         position="0 0 0"
    //         scale="0.05 0.05 0.05"
    //         gltf-model="assets/tracking/Buggy0.gltf"
    //       ></a-entity>
    //     </a-marker>
    //     <a-entity camera></a-entity>
    //   </a-scene> */}
    //   <a-scene
    //     embedded
    //     arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
    //   >
    //     {/* <a-assets>
    //       <a-asset-item
    //         id="animated-asset"
    //         src="assets/tracking/Buggy0.gltf"
    //       ></a-asset-item>
    //     </a-assets> */}

    //     <a-marker type="barcode" value="7">
    //       <a-box position="0 0.5 0" color="yellow"></a-box>
    //     </a-marker>

    //     <a-marker preset="hiro" url="data/hiro.patt" type="pattern" value="6">
    //       {/* <a-entity
    //             gltf-model="#animated-asset"
    //             scale="2">
    //         </a-entity> */}
    //       <a-entity
    //         position="0 0 0"
    //         scale="0.05 0.05 0.05"
    //         gltf-model="assets/tracking/Buggy0.gltf"
    //       ></a-entity>
    //     </a-marker>
    //     <a-entity camera></a-entity>
    //   </a-scene>
    // </>
  );
};

export default ARTest;
