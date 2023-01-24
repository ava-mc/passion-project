import { useEffect, useState } from "react";
import StepTitle from "@/components/StepTitle";
import ArrowContainer from "@/components/ArrowContainer";
import { useRouter } from "next/router";
import styles from "@/styles/SenderText.module.css";
import Arrow from "@/components/Arrow";
import Title from "@/components/Title";
import ImagePicker from "@/components/ImagePicker";


const modelImagesArray = ['/assets/models/Buggy.png','/assets/models/Duck-example.png'];

export default function SenderModel({}) {
  const [selectedModelIndex, setSelectedModelIndex] = useState(null);
  const router = useRouter();
  const [params, setParams] = useState({});

  useEffect(() => {
    if (router.isReady) {
      console.log("ready", router.query);
      setParams(router.query);
      if (router.query?.model) {
        console.log("i have a model", router.query.model);
        setSelectedModelIndex(parseInt(router.query.model));
      } else {
        setSelectedModelIndex(0);
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    if (selectedModelIndex) {
      if (router.isReady) {
        console.log(params);
        const copy = { ...params };
        copy.model = selectedModelIndex;
        setParams({ ...copy });
      }
    }
  }, [selectedModelIndex]);

  return (
    <>
      <Title></Title>
      <div className={styles.container}>
        <StepTitle number={3} label={"Pick a 3D model"}></StepTitle>
        <ImagePicker
          imageArray={modelImagesArray}
          selectedImageIndex={selectedModelIndex}
          setSelectedImageIndex={setSelectedModelIndex}
        ></ImagePicker>
        <ArrowContainer>
          <Arrow
            type="back"
            disabled={false}
            onPress={() => {
              console.log(params);
              console.log(useRouter.query);
              router.push({
                pathname: "/SenderText",
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
                pathname: "/SenderResult",
                query: { ...params },
              });
            }}
          ></Arrow>
        </ArrowContainer>
      </div>
    </>
  );
}
