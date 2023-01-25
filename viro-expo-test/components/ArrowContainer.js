import { View, StyleSheet } from "react-native";

export default function ArrowContainer({children}) {
    return (
        <View style={styles.arrowContainer}>
            {children}
        </View>
    )
} 

const styles = StyleSheet.create({
  arrowContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignSelf: "center",
    justifySelf: "center",
  },
});
