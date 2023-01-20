import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

import dynamic from "next/dynamic";

const NoSSRARTest = dynamic(() => import("../components/ARTest"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NoSSRARTest></NoSSRARTest>
    </>
  );
}
