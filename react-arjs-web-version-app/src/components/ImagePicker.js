import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styles from "@/styles/ImagePicker.module.css";
import Image from "next/image";


export default function ImagePicker({imageArray, selectedImageIndex, setSelectedImageIndex}) {
  return (
    <div className={styles.container}>
      <ScrollMenu horizontal={true}>
        {imageArray.map((item, index) => {
          return (
            <Image
              key={index}
              onClick={() => {
                // setSelectedImage(item);
                setSelectedImageIndex(index);
              }}
              style={{
                // borderWidth: selectedImage === item ? ".5rem" : ".2rem",
                // borderColor: selectedImage === item ? "red" : "black",
                borderWidth: selectedImageIndex === index ? ".5rem" : ".2rem",
                borderColor: selectedImageIndex === index ? "red" : "black",
              }}
              className={`${styles.image} ${
                index === 0 ? styles.imageFirst : ""
              } ${index === imageArray.length - 1 ? styles.imageLast : ""}`}
              src={item}
              alt={`Image tracker option ${index + 1}`}
              width={200}
              height={200}
            ></Image>
          );
        })}
      </ScrollMenu>
    </div>
  );
}

