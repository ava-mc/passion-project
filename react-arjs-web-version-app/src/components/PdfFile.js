import { Document, Page, Text, StyleSheet, Image, View } from "@react-pdf/renderer";

const PdfFile = ({qr, img}) => {
  return (
    <Document>
      <Page orientation="landscape" size="A4">
        <Text style={styles.title}>Mystery Mail</Text>
        <Text style={styles.text}>
          Print out your card, cut it out of the paper and send it!
        </Text>
        <View style={styles.imageContainer}>
          <View style={styles.qrWrapper}>
            <Image style={styles.qr} src={qr}></Image>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} src={img} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    letterSpacing: -3,
    textTransform: "uppercase",
    fontSize: 30,
    fontFamily: "Helvetica",
  },
  text: {
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Helvetica",
  },
  imageContainer: {
    // width: 400,
    // height: 200,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifySelf: "center",
    marginTop: 100,
  },
  image: {
    // width: 300,
    // height: 300,
    // border: 2,
    // borderColor: "var(--color-black)",
  },
  imageWrapper: {
    width: 300,
    height: 300,
    border: 2,
    borderColor: "var(--color-black)",
  },
  qr: {
    width: 200,
    height: 200,
  },
  qrWrapper: {
    width: 300,
    height: 300,
    border: 2,
    borderColor: "var(--color-black)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
