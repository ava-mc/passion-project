import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Title from "@/components/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mystery Mail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title></Title>
        <div className={styles.container}>
          <div className={styles.buttonContainerTop}>
            <Link
              className={`${styles.button} ${styles.buttonTop}`}
              href={{
                pathname: "/SenderImageChoice",
              }}
            >
              I want to send a message
            </Link>
          </div>

          <div className={styles.buttonContainerBottom}>
            <Link
              className={`${styles.button} ${styles.buttonBottom}`}
              href={{
                pathname: "/Receiver",
              }}
            >
              I have received a message
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
