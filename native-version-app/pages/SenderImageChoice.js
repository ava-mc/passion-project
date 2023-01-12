import { View, Text, StyleSheet } from "react-native";
import Arrow from "../components/Arrow";
import { useState } from "react";
import ArrowContainer from "../components/ArrowContainer";
import StepTitle from "../components/StepTitle";
import ImagePicker from "../components/ImagePicker";

export default function SenderImageChoice({ navigation }) {
    const [selectedImage, setSelectedImage] = useState(null);
    
  return (
    <View style={styles.container}>
      <StepTitle number={1} label={'Pick your image'}></StepTitle>
      <ImagePicker></ImagePicker>
      <ArrowContainer>
        <Arrow type="back" disabled={true}></Arrow>
        <Arrow
          type="forward"
          disabled={false}
          onPress={() => {
            navigation.navigate("SenderText");
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
