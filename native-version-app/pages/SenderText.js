import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Arrow from "../components/Arrow";
import ArrowContainer from "../components/ArrowContainer";
import StepTitle from "../components/StepTitle";
import TextInput from "../components/MessageInput";

export default function SenderText({navigation, route}) {
    const params = { ...route.params };
    if (!params) {
      params = {};
    }
    console.log(params);
    let initialText = '';
    if (params?.message) {
        initialText = params.message;
    }
    const [message, setMessage] = useState(initialText);
  return (
    <View style={styles.container}>
        {/* {params?.image &&<Image source={params.image}></Image>} */}
      <StepTitle number={2} label={'Write your message'}></StepTitle>
      <TextInput changeMessage={setMessage} message={message}></TextInput>
      <ArrowContainer>
        <Arrow
          type="back"
          disabled={false}
          onPress={() => {
            params.message = message;
            navigation.navigate("SenderImageChoice", params);
          }}
        ></Arrow>
        <Arrow
          type="forward"
          disabled={false}
          onPress={() => {
            params.message = message;
            navigation.navigate("SenderResult", params);
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
        width: '100%',
    }
});
