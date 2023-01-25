import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

// const imageArray = [
//   require("../assets/images/background-bottom.png"),
//   require("../assets/images/background-top.png"),
// ];

const ImagePicker = ({imageArray, selectedTarget, setSelectedTarget}) =>{
//   const [selectedTarget, setselectedTarget] = useState(imageArray[0]);
console.log(imageArray);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {imageArray.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                setSelectedTarget(item.target);

                console.log(item.target)
              }}
            >
              <Image
                style={[
                  styles.image,
                  {
                    borderWidth: selectedTarget === item.target ? 5 : 2,
                    borderColor: selectedTarget === item.target ? "red" : "black",
                    marginLeft: index===0?100:0
                  },
                ]}
                // source={require(item.img)}
                source={item.img}
              ></Image>
            </TouchableWithoutFeedback>
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

export default ImagePicker;