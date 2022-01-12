import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pdfParser from "pdfexplorer";

const Home: NextPage = () => {
  return <div className={styles.container}>{pdfParser("Hello world")}</div>;
};

export default Home;
