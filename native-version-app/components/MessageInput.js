import { TextInput, StyleSheet } from "react-native";

export default function MessageInput({changeMessage, message}){
    return (
      <TextInput
        style={styles.input}
        onChangeText={changeMessage}
        value={message}
        placeholder="Write your message"
        // keyboardType="numeric"
      />
    );
}

const styles=StyleSheet.create({
    input: {

    }
})