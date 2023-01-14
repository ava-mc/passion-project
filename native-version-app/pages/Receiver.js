import { View, Text, Image} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import queryString from "query-string";





export default function Receiver({navigation}){
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [hasScanned, setHasScanned] = useState(false);
    const [scanningResults, setScanningResults] = useState(null);
    // console.log(permission);

    const scannedCode = (result) => {
      if (!hasScanned){
        console.log(result);
        console.log(result.data);
      }
      setHasScanned(true);
      handleScannedCode(result.data)
    };

    const handleScannedCode = (data) => {
        // const url = new URL(data);
        // console.log(url);
        // const params = url.searchParams;
        // console.log(params.get('image'));
        const parsed = queryString.parseUrl(
          data
        );
        console.log(parsed);
        if (parsed.query.image && parsed.query.message){
            setScanningResults(parsed.query);
            navigation.navigate("ARSystem", scanningResults)
        }
    }

    return (
      <View>
        <Camera
          style={{ width: 300, height: 300 }}
          type={type}
          onBarCodeScanned={scannedCode}
          autoFocus={true}
        ></Camera>
        <Text>Receive your card</Text>
        {/* {scanningResults?.image && <Image source={scanningResults.image}></Image>}
        {} */}
      </View>
    );
}
