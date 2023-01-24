import logo from './logo.svg';
import './App.css';
// import 'babel-polyfill';
import 'aframe';
// import '@ar-js-org/ar.js';
import 'arjs';
import { Entity, Scene } from "aframe-react";

function App() {
  return (
    <div className="App">
      <Scene>
        {/* <a-scene embedded arjs> */}
        <a-marker
          // preset="custom"
          // type="pattern"
          // url="assets/markers/marker-2.patt"
          preset="hiro"
          type="pattern"
          emitevents={true}
        >
          {/* <a-entity
            id="avatarModel"
            rotation="-90 0 0 "
            position="-0.2 0 0.1"
            scale="0.005 0.005 0.005"
            gltf-model="assets/models/Buggy0.gltf"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-entity> */}
          <Entity
            gltf-model={{ src: "assets/models/Buggy0.gltf" }}
            id="avatarModel"
            rotation="-90 0 0 "
            position="-0.2 0 0.1"
            scale="0.005 0.005 0.005"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          />
          {/* <a-entity
            id="text"
            geometry="primitive: plane; height: auto; width: auto"
            material="color: blue"
            position="0 .4 0.4"
            rotation="-90 0 0 "
            text="width: 1; value: My testing text; wrapCount: 20; align: center"
          ></a-entity> */}
        </a-marker>
        <a-entity camera></a-entity>
        <Entity primitive="a-camera"></Entity>
        {/* </a-scene> */}
      </Scene>
    </div>
  );
}

export default App;
