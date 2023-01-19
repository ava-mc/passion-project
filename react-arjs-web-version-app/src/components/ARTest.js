import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

const ARTest = ({}) => {
    return (
        <ARCanvas
    camera={ { position: [0, 0, 0] } }
    onCreated={ ({ gl }) => {
      gl.setSize(window.innerWidth, window.innerHeight)
    } }>
    <ambientLight />
    <pointLight position={ [10, 10, 0] }  />
    <ARMarker
      type={ "pattern" }
      patternUrl={ "data/hiro.patt" }>
      <mesh>
        <boxGeometry args={ [1, 1, 1] } />
        <meshStandardMaterial color={ "green" } />
      </mesh>
    </ARMarker>
  </ARCanvas>
    )
}

export default ARTest;