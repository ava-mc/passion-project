import { View, Text, StyleSheet, Image } from "react-native";
import StepTitle from "../components/StepTitle";
import QRCode from "react-native-qrcode-svg";
import queryString from "query-string";
import { useState, useEffect, useRef } from "react";
import * as Linking from "expo-linking";

import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import Button from "../components/Button";

import { captureRef } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";

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
</div>
</div>
    </body>
    </html>
`;
const htmlContentTop = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
        */@page {
  size: A4 landscape;
}*/
            body {
                
                width: 100%;
                height: 100%;
                font-size: 16px;
                
            }
            h1 {
                text-align: center;
                letter-spacing: -3px;
                text-transform: uppercase;
                font-size: 30px;
                font-family: Helvetica, Arial, sans-serif;
            }
            p {
                text-align: center;
                margin-top: 30px;
                font-family: Helvetica, Arial, sans-serif;
            }
            .wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                margin-top: 200px;
            }
            .container {
                display: grid;
                grid-template-columns: max-content max-content;
                grid-template-rows: max-content;
                row-gap: 50px;
                background-color: 'red';
                margin: auto;

            }
            .container > div {
                width: 300px;
                height: 300px;
                border: 2px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img{
               margin: auto;
               width: 200px;
                height: 200px;
            }
            .container > div:last-of-type img{
                width: 300px;
                height: 300px;
            }

        </style>
    </head>
    <body>
        <h1>Mystery Mail</h1>
        <p>Print out your card, cut it out of the paper and send it!</p>
        <div class='wrapper'>
        <div class='container'>
`;

const printToFile = async (htmlTop, htmlBottom, imageRef, qrRef) => {
  const imageUri = await getImageUri(imageRef);
  console.log(imageUri);
  const qrUri = await getImageUri(qrRef);
  // const imageData = await fetchImageData(imageUri);
  // // console.log(imageData);
  // const qrData = await fetchImageData(qrUri);
  const imageTag = `<div><img width=200 height=200 src='data:image/jpg;base64,${imageUri}'/></div>`;
  const qrTag = `<div><img width=200 height=200 src='data:image/jpg; base64,${qrUri}'/></div>`;

  const html = htmlTop + qrTag + imageTag + htmlBottom;
  const { uri } = await Print.printToFileAsync({
    html,
    // orientation: Print.Orientation.landscape,
  });
  console.log("File has been saved to:", uri);
  await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
};

// // fetch Base64 string of image data
// const fetchImageData = async (uri) => {
//   const data = await FileSystem.readAsStringAsync("file://" + uri, {
//     encoding: FileSystem.EncodingType.Base64,
//   });
//   return (imageData = "data:image/jpg;base64," + data);
// };

const getImageUri = async (ref) => {
  try {
    const localUri = await captureRef(ref, {
      height: 440,
      quality: 1,
      format: "jpg",
      result: "base64",
    });
    return localUri;
  } catch (e) {
    console.log(e);
  }
};

export default function SenderResult({ route }) {
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

  const qrRef = useRef();
  const imageRef = useRef();

  return (
    <View>
      <View ref={qrRef} style={styles.QRcode}>
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
      <View ref={imageRef} style={styles.imageContainer}>
        <Image style={styles.image} source={params.image}></Image>
      </View>
      <Text>
        Print the card with your unique code and send it to your friend.
      </Text>
      <Button
        label={"Save your result"}
        theme="light"
        onPress={() => {
          printToFile(htmlContentTop, htmlContentBottom, imageRef, qrRef);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  QRcode: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",

    marginTop: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
  },
});
