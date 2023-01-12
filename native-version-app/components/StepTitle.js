import { Text, View, StyleSheet } from "react-native"

export default function StepTitle({label, number}){
    return (
      <View style={styles.container}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    marginTop: "12%",
  },
  number: {
    fontSize: 100,
    letterSpacing: -2,
  },
  label: {
    fontSize: 30,
    letterSpacing: -2,
  },
});