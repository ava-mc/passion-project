import { View, Text, StyleSheet } from "react-native";
import StepTitle from "../components/StepTitle";
import QRCode from "react-native-qrcode-svg";
import queryString from "query-string";


export default function SenderResult({route}) {
    const params = route.params;
    console.log(params);
    const url = `http://myapp.com?${queryString.stringify(params)}`;
  return (
    <View style={styles.QRcode}>
      <QRCode
        style={styles.QRcode}
        //QR code value
        value={url}
        //size of QR Code
        size={250}
        //Color of the QR Code (Optional)
        color="black"
        //Background Color of the QR Code (Optional)
        backgroundColor="transparent"
      ></QRCode>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    QRcode: {
        marginLeft: 100,
        marginTop: 100,
    }
});
