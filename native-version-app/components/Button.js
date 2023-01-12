import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, theme, onPress, style }) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: theme === "light" ? "#000" : "#fff" },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.buttonLabel,
            { color: theme === "light" ? "#fff" : "#000" },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    // width: "93%",
    // height: 40,
    // marginLeft: "auto",
    // marginRight: 'auto',
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: .5,
  },
  button: {
    // width: "100%",
    // height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  buttonLabel: {
    fontSize: 27,
    textTransform: "uppercase",
    letterSpacing: -2.5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
});
