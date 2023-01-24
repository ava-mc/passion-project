import { ARCanvas, ARMarker} from "@artcom/react-three-arjs";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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
       <meshStandardMaterial attach="material" color="red" />
     </mesh>
   );
  }


  const models = [
    { name: "Buggy0", scale: [0.005, 0.005, 0.005], rotation: [-90, 0, 0] },
    { name: "Duck", scale: [0.5, 0.5, 0.5], rotation: [-90, -90, 0] },
  ];

const ARTest = ({message, image, model}) => {
  let chosenModel = models[model];
  const url = `assets/models/${chosenModel.name}.gltf`;
  const gltf = useLoader(GLTFLoader, url);
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
        <primitive
          object={gltf.scene}
          rotation={chosenModel.rotation}
          position={[-0.2, 0, 0.1]}
          scale={chosenModel.scale}
        />
        <Text3d text={message}></Text3d>

      </ARMarker>
    </ARCanvas>
  );
};

export default ARTest;
