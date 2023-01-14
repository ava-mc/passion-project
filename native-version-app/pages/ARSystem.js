import { Image, Text, View } from "react-native";
export default function ARSystem({route}) {
    const params = route.params;
    return (
      <View>
        {params?.image && <Image source={params.image}></Image>}
        {params?.message && <Text>{params.message}</Text>}
      </View>
    );
}