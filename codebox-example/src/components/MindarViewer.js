import React, { useEffect, useRef } from 'react';
import {PropTypes} from "prop-types";

const MindarViewer = ({model, target, text}) => {
  const sceneRef = useRef(null);
  console.log(model, target, text);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });
    return () => {
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc: assets/custom/multi.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img alt="example" id="image-0" src="assets/img/lego.png" />
        <img alt="example" id="image-1" src="assets/img/question.png" />
        {/* <img
          alt="example"
          id="image-2"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png"
        /> */}
        <a-asset-item
          id="avatarModel-0"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
        ></a-asset-item>
        <a-asset-item
          id="avatarModel-1"
          src="assets/Buggy0.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target={`targetIndex: ${target}`}>
        <a-plane
          id="overlay-image"
          src={`#image-${target}`}
          position="0 0 0"
          height="0.552"
          width="1"
          rotation="0 0 0"
        ></a-plane>
        <a-gltf-model
          id="avatarModel"
          rotation="0 0 0 "
          position="-0.2 0 0.1"
          scale="0.005 0.005 0.005"
          src={`#avatarModel-${model}`}
          animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
        ></a-gltf-model>
        <a-entity
          id="text"
          geometry="primitive: plane; height: auto; width: auto"
          material="color: blue"
          position="0 .4 0.4"
          text={`width: 1; value: ${text}; wrapCount: 20; align: center`}
        ></a-entity>
      </a-entity>
    </a-scene>
  );
}

MindarViewer.propTypes = {
  model: PropTypes.number,
  target: PropTypes.number,
  text: PropTypes.string,
};


MindarViewer.defaultProps = {
  model: 0,
  target: 0,
  text: 'Choose your message',
};


export default MindarViewer;


