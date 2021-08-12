import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [card, setCard] = useState([
    {
      id: "1",
      name: "ellie",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "dhk215@naver.com",
      message: "hello!",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    {
      id: "2",
      name: "kdh",
      company: "kakao",
      theme: "light",
      title: "Engineer",
      email: "dhk215@naver.com",
      message: "hello!",
      fileName: "kdh",
      fileURL: "kdh.png",
    },
    {
      id: "3",
      name: "aaa",
      company: "carrot",
      theme: "light",
      title: "Software",
      email: "dhk215@naver.com",
      message: "hello!",
      fileName: "aaa",
      fileURL: "aaa.png",
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor data={card} />
        <Preview data={card} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
