import { ARCanvas, ARMarker} from "@artcom/react-three-arjs";
// import { AMarkerCamera } from "aframe";
// extend({ AMarkerCamera });
// import { extend } from "@react-three/fiber";
// import "arjs";
// import '@ar-js-org/ar.js';
// import "aframe";
// require("aframe");
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";

import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

const textSplitter = (text, maxCharCount) => {
  const split = text.split(" ");
  console.log(split);
  const newSplit = split.map(string => string+' ');
  console.log(newSplit);
  const resultArray = [];
  let count = 0;
  let stringPart = '';
  newSplit.forEach((string, index)=>{
    count+=string.length;
    console.log(string, stringPart, count);
    if (count<=maxCharCount) {
      stringPart += string;
      if (index==newSplit.length-1) {
        resultArray.push(stringPart);
      }
    }
    else {
      resultArray.push(stringPart);
      count = string.length;
      stringPart = string;
      if (index == newSplit.length - 1) {
        resultArray.push(stringPart);
      }
    }
  })
  console.log(resultArray);
  let resultString = '';
  resultArray.forEach(string => resultString += string + '\n ');
  console.log(resultString);
  return resultString;
}

function Text3d({text}){
  const maxCharCount = 20;
  const splitText = textSplitter(text, maxCharCount);
   const font = new FontLoader().parse(
     helvetiker
   );
   const textOptions = {
      font,
      size: .1,
      height: .05,

   };
   return (
     <mesh rotation={[-90, 0, 0]} position={[-0.5, 1.0, -0.5]}>
       <textGeometry attach="geometry" args={[`${splitText}`, textOptions]} />
       <meshStandardMaterial attach="material" color="lightgreen" />
     </mesh>
   );
  }


const ARTest = ({message, image}) => {
  const url = "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf";
  // const url = "assets/models/Buggy0.gltf";
  const gltf = useLoader(GLTFLoader, url);
//   const url = "assets/models/Buggy0.gltf";
//   // const url = "assets/models/Avocado.gltf";
//   const [gltf, setGltf] = useState()
//   useEffect(() => {
//   new GLTFLoader().load(url, (gltf) => {
//     setGltf(gltf.scene);
//     const mixer = new THREE.AnimationMixer(gltf.scene);
//     gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
//   });
// }, [url])
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
        patternUrl={`assets/custom/marker-${image}.patt`}
        onMarkerfound={() => console.log("found marker")}
        onMarkerlost={() => console.log("lost marker")}
        preset={"custom"}
      >
        {/* {gltf && (
          <primitive
            object={gltf}
            rotation={[-90, 0, 0]}
            position={[-0.2, 0, 0.1]}
            scale={[0.005, 0.005, 0.005]}
          />
        )} */}
        <primitive
          object={gltf.scene}
          rotation={[-90, 0, 0]}
          position={[-0.2, 0, 0.1]}
          scale={[0.005, 0.005, 0.005]}
        />
        <Text3d text={message}></Text3d>
        {/* <aMarkerCamera preset="hiro" type="pattern" url="data/hiro.patt"> */}
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh> */}

        {/* </aMarkerCamera> */}
        {/* <a-gltf-model
          id="avatarModel"
          rotation="0 0 0 "
          position="-0.2 0 0.1"
          scale="0.005 0.005 0.005"
          src="assets/models/Buggy0.gltf"
          animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
        ></a-gltf-model> */}
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
