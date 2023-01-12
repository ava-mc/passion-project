import { HorizontalPicker } from "@vseslav/react-native-horizontal-picker";
import { View, Image, ScrollView, StyleSheet } from "react-native";

const imageArray = [
  require("../assets/images/background-bottom.png"),
  require("../assets/images/background-top.png"),
];

function Item(item, index) {
  return (
    <View>
      <Image source={item}></Image>
    </View>
  );
}

export default function ImagePicker({}) {
  return (
    //   <HorizontalPicker
    //     data={imageArray}
    //     renderItem={Item}
    //     itemWidth={80}
    //   />
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {imageArray.map((item) => {
          return <Image source={item}></Image>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
});
