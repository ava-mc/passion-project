import styles from "@/styles/Title.module.css";
import Link from "next/link";

const Title = () => {
  return (
    <Link
      className={`${styles.button} ${styles.buttonTop}`}
      href={{
        pathname: "/",
      }}
    >
      <h1 className={styles.title}>Mystery Mail</h1>
    </Link>
  );
};

export default Title;
