import { useRouter } from "next/router";
import styles from "@/styles/SenderImageChoice.module.css";
import { useState } from "react";
import StepTitle from "@/components/StepTitle";
import ImagePicker from "@/components/ImagePicker";
import Title from "@/components/Title";
import Arrow from "@/components/Arrow";
import ArrowContainer from "@/components/ArrowContainer";
import { useEffect } from "react";


const imageArray = [
  "/assets/custom/marker-0.png",
  "/assets/custom/marker-1.png",
  "/assets/custom/marker-2.png",
];

export default function SenderImageChoice({}) {
    // const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
     const router = useRouter();
     const [params, setParams] = useState({});

   useEffect(() => {
     if (router.isReady) {
       console.log("ready", router.query);
       setParams(router.query);
       if (router.query?.image) {
        console.log('i have an image', router.query.image);
        //  setSelectedImage(router.query.image);
         setSelectedImageIndex(parseInt(router.query.image));
       }
       else {
        // setSelectedImage(imageArray[0]);
        setSelectedImageIndex(0);
       }
     }
   }, [router.isReady]);

  //  useEffect(() => {
  //    if (selectedImage) {
  //      if (router.isReady) {
  //        console.log(params);
  //        const copy = { ...params };
  //        copy.image = selectedImage;
  //        setParams({ ...copy });
  //      }
  //    }
  //  }, [selectedImage]);
  useEffect(() => {
    if (selectedImageIndex || selectedImageIndex == 0) {
      if (router.isReady) {
        console.log(params);
        const copy = { ...params };
        copy.image = selectedImageIndex;
        setParams({ ...copy });
      }
    }
  }, [selectedImageIndex]);  

  return (
    <>
      <Title></Title>
      <div className={styles.container}>
        <StepTitle number={1} label={"Pick your image"}></StepTitle>
        <ImagePicker
          imageArray={imageArray}
          // selectedImage={selectedImage}
          // setSelectedImage={setSelectedImage}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        ></ImagePicker>
        <ArrowContainer>
          <Arrow
            type="back"
            disabled={false}
            onPress={() => {
              console.log(params);
              console.log(useRouter.query);
              router.push({
                pathname: "/",
                query: { ...params },
              });
            }}
          ></Arrow>
          <Arrow
            type="forward"
            disabled={false}
            onPress={() => {
              console.log(params);
              router.push({
                pathname: "/SenderText",
                query: { ...params },
              });
            }}
          ></Arrow>
        </ArrowContainer>
      </div>
    </>
  );
}
