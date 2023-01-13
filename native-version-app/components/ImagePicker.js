import { HorizontalPicker } from "@vseslav/react-native-horizontal-picker";
import { useState } from "react";
import { View, Image, ScrollView, StyleSheet, Pressable } from "react-native";

// const imageArray = [
//   require("../assets/images/background-bottom.png"),
//   require("../assets/images/background-top.png"),
// ];

export default function ImagePicker({imageArray, selectedImage, setSelectedImage}) {
//   const [selectedImage, setSelectedImage] = useState(imageArray[0]);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {imageArray.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setSelectedImage(item);
              }}
            >
              <Image
                style={[
                  styles.image,
                  {
                    borderWidth: selectedImage === item ? 5 : 2,
                    borderColor: selectedImage === item ? "red" : "black",
                    marginLeft: index===0?100:0
                  },
                ]}
                source={item}
              ></Image>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    margin: 15,
  },
  imageFirst: {
    marginLeft: 50
  }
});
