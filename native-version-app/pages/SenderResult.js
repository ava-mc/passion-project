import { View, Text, StyleSheet, Image } from "react-native";
import StepTitle from "../components/StepTitle";
import QRCode from "react-native-qrcode-svg";
import queryString from "query-string";
import { useState, useEffect } from "react";
import * as Linking from "expo-linking";

// const useInitialURL = () => {
//   const [url, setUrl] = useState(null);
//   const [processing, setProcessing] = useState(true);

//   useEffect(() => {
//     const getUrlAsync = async () => {
//       // Get the deep link used to open the app
//       const initialUrl = await Linking.getInitialURL();

//       // The setTimeout is just for testing purpose
//       setTimeout(() => {
//         setUrl(initialUrl);
//         setProcessing(false);
//       }, 1000);
//     };

//     getUrlAsync();
//   }, []);

//   return { url, processing };
// };

const htmlContentBottom = `
    </body>
    </html>
`;
const htmlContentTop=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Mystery Mail!</h1>
`;


export default function SenderResult({route}) {
    const params = route.params;
    console.log(params);
    const appUrl = Linking.useURL();
    // const appUrl = Linking.getInitialURL();
    // const { url: appUrl, processing } = useInitialURL();
    console.log(appUrl);
    // console.log(processing);
    // console.log(appUrl);
    const url = `${appUrl}?${queryString.stringify(params)}`;
    console.log(url);
  return (
    <View>
      <View style={styles.QRcode}>
        <QRCode
          //QR code value
          value={url}
          //   value={`${appUrl}/SenderResult?`}
          //size of QR Code
          size={150}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="transparent"
        ></QRCode>
      </View>
      <Image style={styles.image} source={params.image}></Image>
      <Text>
        Print the card with your unique code and send it to your friend.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  QRcode: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
});
