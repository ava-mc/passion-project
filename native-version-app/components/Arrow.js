import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";

export default function Arrow({type, disabled, onPress}) {
  return (
  <Pressable onPress={onPress}>
    <MaterialIcons
      name={`arrow-${type}`}
      size={50}
      color={disabled ? "lightgrey" : "#000"}
    />
  </Pressable>
  )

}
