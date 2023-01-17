// import { div, Text, StyleSheet, Image } from "react-native";
// import StepTitle from "../components/StepTitle";
// import QRCode from "react-native-qrcode-svg";
// import queryString from "query-string";
// import { useState, useEffect, useRef } from "react";
// import * as Linking from "expo-linking";

// import * as Print from "expo-print";
// import { shareAsync } from "expo-sharing";
// import Button from "../components/Button";

// import { captureRef } from "react-native-view-shot";
// import * as FileSystem from "expo-file-system";

import QRCode from "react-qr-code";
import styles from '@/styles/SenderResult.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Image from "next/image";
import Title from "@/components/Title";


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

export default function SenderResult({ }) {
  // const params = route.params;
  // console.log(params);
  // const appUrl = Linking.useURL();
  // // const appUrl = Linking.getInitialURL();
  // // const { url: appUrl, processing } = useInitialURL();
  // console.log(appUrl);
  // // console.log(processing);
  // // console.log(appUrl);
  // const url = `${appUrl}?${queryString.stringify(params)}`;
  // console.log(url);

  // const qrRef = useRef();
  // const imageRef = useRef();
  // const url = window.location();
  const router = useRouter();
  // console.log(router.basePath);
  // const url = router.asPath;
  const [url, setUrl] = useState(null);
  const receiverPage = 'Receiver';

  const [loaded, setLoaded] = useState(false);
  const [params, setParams] = useState({});

  useEffect(()=> {
    // setLoaded(true);
    console.log(window.location);
  },[])

  useEffect(()=> {
    if (router.isReady){
      setLoaded(true);
      // const fullUrl = window.location.origin + router.asPath;
      const query = router.query;
      setParams(query);
      const querystring = queryString.stringify(query);
      console.log(query);
      const fullUrl = window.location.origin +'/'+receiverPage+'?'+ querystring;
      console.log(fullUrl);
      setUrl(fullUrl);
    }
  }, [router.isReady]);

  return (
    <div>
      <Title></Title>
      {loaded && (
        <>
          <div className={styles.QRcode}>
            <QRCode
              //QR code value
              value={url}
              //   value={`${appUrl}/SenderResult?`}
              //size of QR Code
              size={200}
              //Color of the QR Code (Optional)
              fgColor="black"
              // Background Color of the QR Code (Optional)
              bgColor="transparent"

              // viewBox={`0 0 256 256`}
            ></QRCode>
          </div>
        </>
      )}
      {params?.image && (
        <>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={params.image} width={200} height={200} alt={'Chosen tracking image'}></Image>
          </div>
          <p>
            Print the card with your unique code and send it to your friend.
          </p>
          {/* <Button
            label={"Save your result"}
            theme="light"
            onPress={() => {
              printToFile(htmlContentTop, htmlContentBottom, imageRef, qrRef);
            }}
          ></Button> */}
        </>
      )}
    </div>
  );
}
