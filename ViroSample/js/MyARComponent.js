import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroBox,
  Viro3DObject,
  ViroDirectionalLight,
  ViroNode,
  ViroAmbientLight
} from "react-viro";

 // Outside of the render function, register the target
ViroARTrackingTargets.createTargets({
  "target1": {
    source: require("./res/tesla.webp"),
    orientation: "Up",
    physicalWidth: 0.1, // real world width in meters
  },
  "target2": {
    source: require("./res/lego.png"),
    orientation: "Up",
    physicalWidth: 0.25, // real world width in meters
  },
});

const MyARComponent = ({ message, target }) => {
    console.log(target, message);
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroARImageMarker target={target}>
        <ViroBox position={[0, 0.25, 0]} scale={[0.05, 0.05, 0.05]} />
        <ViroText
          text={message}
          textAlign="left"
          textAlignVertical="top"
          //   textLineBreakMode="justify"
          //   textClipMode="clipToBounds"
          color="#ff0000"
          width={0.2}
          height={0.2}
          extrusionDepth={.1}
          style={{
            fontFamily: "Arial",
            fontSize: 3,
            // fontWeight: 400,
            fontStyle: "italic",
            color: "#0000FF",
          }}
          position={[0, 0.15, 0]}
          rotation={[-90, 0, 0]}
        />
        <ViroNode>
          {/* <ViroDirectionalLight
            color="#ffffff"
            direction={[0, -1, 0]}
            castsShadow={true}
            shadowNearZ={0.01}
            shadowFarZ={20}
            shadowOpacity={0.7} // no
            ref={this._setSpotLightRef}
          /> */}
          <Viro3DObject
            source={require("./res/models/out.glb")}
            type="GLB"
            scale={[0.1, 0.1, 0.1]}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
          ></Viro3DObject>
        </ViroNode>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default MyARComponent;
