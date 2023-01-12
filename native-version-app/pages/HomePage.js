import { View, StyleSheet, ImageBackground, Image } from "react-native";
import Button from "../components/Button";

const backgroundTop = require("../assets/images/background-top.png");
const backgroundBottom = require("../assets/images/background-bottom.png");

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainerTop}>
        <Image
          source={backgroundTop}
          // imageStyle={{
          //   resizeMode: "auto",
          //   alignSelf: "flex-end",
          // }}
          style={styles.image}
        ></Image>
        <Button
          style={{ marginBottom: 20 }}
          theme="light"
          label="I want to send a message"
          onPress={() => {
            navigation.navigate("Sender");
          }}
        ></Button>
      </View>
      
        <View style={styles.buttonContainerBottom}>
            <Image
        source={backgroundBottom}
        style={styles.imageBottom}
      ></Image>
          <Button
            style={{ marginTop: 20 }}
            theme="dark"
            label="I have received a message"
            onPress={() => {
              navigation.navigate("Receiver");
            }}
          ></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonContainerTop: {
    width: "100%",
    backgroundColor: "#fff",
    height: "50%",
    justifyContent: "flex-end",
  },
  buttonContainerBottom: {
    width: "100%",
    backgroundColor: "#000",
    height: "50%",
    justifyContent: "flex-start",
  },
  image: {
    // flex: 1,
    // justifyContent: "flex-end",
    width: "100%",
    // backgroundColor: "red",
    // flexFlow: 'row',
    // justifySelf: "flex-end",
    position: "absolute",
    top: "auto",
    bottom: 0,
  },
  imageBottom: {
    // flex: 1,
    // justifyContent: "flex-end",
    width: "100%",
    // flexFlow: 'row',
    // justifySelf: "flex-end",
    position: "absolute",
    top: 0,

  },
});
