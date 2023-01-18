import styles from '@/styles/SenderResult.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Image from "next/image";
import Title from "@/components/Title";

import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import PdfFile from "@/components/PdfFile";

import QRCode from "qrcode";

export default function SenderResult({ }) {
  const router = useRouter();
  const receiverPage = 'Receiver';
  const [params, setParams] = useState({});

  const [qrData, setQrData] = useState(null);

  useEffect(()=> {
    console.log(window.location);
  },[])

  useEffect(()=> {
    if (router.isReady){
      const query = router.query;
      setParams(query);
      const querystring = queryString.stringify(query);
      const fullUrl = window.location.origin +'/'+receiverPage+'?'+ querystring;
      console.log(fullUrl);

      QRCode.toDataURL(
        fullUrl,
        { errorCorrectionLevel: "H" },
        (err, url) => {
          console.log(url);
          setQrData(url);
        }
      );
    }
  }, [router.isReady]);

  return (
    <>
      <Title></Title>
      <div className={styles.container}>
        {qrData && (
          <div className={styles.QrContainer}>
          <Image
            className={styles.QRcode}
            src={qrData}
            width={200}
            height={200}
            alt={"Qr code of the secret message"}
          ></Image>
          </div>
        )}
        {params?.image && (
          <>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={params.image}
                width={200}
                height={200}
                alt={"Chosen tracking image"}
              ></Image>
            </div>
            <p className={styles.text}>
              Print the card with your unique code and send it to your friend.
            </p>
            {params?.image && qrData && (
              <PDFDownloadLink
                className={styles.download}
                document={<PdfFile img={params.image} qr={qrData} />}
                fileName="mystery-mail.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
            )}
          </>
        )}
      </div>
    </>
  );
}
