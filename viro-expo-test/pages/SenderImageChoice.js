import { View, Text, StyleSheet , Image} from "react-native";
import Arrow from "../components/Arrow";
import { useState } from "react";
import ArrowContainer from "../components/ArrowContainer";
import StepTitle from "../components/StepTitle";
import ImagePicker from "../components/ImagePicker";

const imageArray = [
  require("../assets/images/background-bottom.png"),
  require("../assets/images/background-top.png"),
];

export default function SenderImageChoice({ navigation, route }) {
    const params = {...route.params};
    if (!params){
        params= {};
    }
    let initialImage = imageArray[0];
    if (params?.image) {
        initialImage = params.image;
    }
    const [selectedImage, setSelectedImage] = useState(initialImage);
    console.log(params);
    
  return (
    <View style={styles.container}>
      <StepTitle number={1} label={'Pick your image'}></StepTitle>
      <ImagePicker imageArray={imageArray} selectedImage={selectedImage} setSelectedImage={setSelectedImage}></ImagePicker>
      <ArrowContainer>
        <Arrow type="back" disabled={true}></Arrow>
        <Arrow
          type="forward"
          disabled={false}
          onPress={() => {
            params.image = selectedImage;
            navigation.navigate("SenderText", params);
          }}
        ></Arrow>
      </ArrowContainer>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%'
    },

});
