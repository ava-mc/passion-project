import { View, Text, StyleSheet } from "react-native";
import Arrow from "../components/Arrow";
import ArrowContainer from "../components/ArrowContainer";

export default function SenderText({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Send your card</Text>
      <ArrowContainer>
        <Arrow
          type="back"
          disabled={false}
          onPress={() => {
            navigation.navigate("SenderImageChoice");
          }}
        ></Arrow>
        <Arrow
          type="forward"
          disabled={false}
          onPress={() => {
            navigation.navigate("SenderResult");
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
