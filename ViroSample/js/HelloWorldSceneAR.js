'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';
// import MessageMenu from './MessageMenu';

import MyARComponent from './MyARComponent';

// import {
//   ViroARScene,
//   ViroText,
//   ViroConstants,
//   ViroARTrackingTargets,
//   ViroARImageMarker,
//   ViroBox
// } from 'react-viro';


//  // Outside of the render function, register the target
// ViroARTrackingTargets.createTargets({
//   "target1": {
//     source: require("./res/tesla.webp"),
//     orientation: "Up",
//     physicalWidth: 0.1, // real world width in meters
//   },
//   "target2": {
//     source: require("./res/lego.png"),
//     orientation: "Up",
//     physicalWidth: 0.25, // real world width in meters
//   },
// });
 

export default class HelloWorldSceneAR extends Component {
  

  constructor() {
    super();

    // Set initial state here
    this.state = {
      // text : "This is my message."
      // text: this.props.message
      // message: this.props.message,
      // target: this.props.target,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      // <ViroARScene>
      //   <ViroARImageMarker target={"target2"}>
      //     <ViroBox position={[0, 0.25, 0]} scale={[0.05, 0.05, 0.05]} />
      //     <ViroText
      //       text={this.text}
      //       textAlign="left"
      //       textAlignVertical="top"
      //       textLineBreakMode="justify"
      //       textClipMode="clipToBounds"
      //       color="#ff0000"
      //       width={2}
      //       height={2}
      //       style={{
      //         fontFamily: "Arial",
      //         fontSize: 20,
      //         fontWeight: 400,
      //         fontStyle: "italic",
      //         color: "#0000FF",
      //       }}
      //       position={[0, 0, -5]}
      //     />
      //     ;
      //   </ViroARImageMarker>
      // </ViroARScene>
      <MyARComponent
        target={this.props.arSceneNavigator.viroAppProps.target}
        message={this.props.arSceneNavigator.viroAppProps.message}
      ></MyARComponent>
      // <MessageMenu></MessageMenu>
    );
  }



  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
