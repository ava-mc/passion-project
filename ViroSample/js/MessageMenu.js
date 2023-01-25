import { useState } from "react";
import ImagePicker from "./ImagePicker";
import { Text, TextInput,View, StyleSheet, ScrollView, Pressable, Image} from "react-native";
// import { View, Image, ScrollView, StyleSheet, Pressable } from "react-native";



const MessageMenu = ({message, setMessage, selectedTarget, setSelectedTarget}) => {
    const imageArray = [
      { img: require("./res/lego.png"), target: "target2" },
      { img: require("./res/tesla.webp"), target: "target1" },
    ];
    // const [message, setMessage] = useState('');
    // const [selectedTarget, setSelectedTarget] = useState('target1');
    console.log(message);
    console.log(typeof message);

    return (
      <>
        <View>
          <Text style={{ color: "white" }}>Create your AR message</Text>
          <TextInput
            style={{ backgroundColor: "white" }}
            onChangeText={(text)=>{setMessage(text)}}
            value={message}
          ></TextInput>
          <ImagePicker imageArray={imageArray} selectedTarget={selectedTarget} setSelectedTarget={setSelectedTarget}></ImagePicker>
          {/* <View style={styles.container}>
            <ScrollView horizontal={true}>
                {imageArray.map((item, index) => {
                return (
                  <View key={index}>
                    <Text style={{color:'white'}}>This does something</Text>
                  </View>
                );}
              )}
            </ScrollView>
          </View> */}
        </View>
      </>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderWidth: 2,
//     borderColor: "black",
//     margin: 15,
//   },
//   imageFirst: {
//     marginLeft: 50,
//   },
// });

export default MessageMenu;