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
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "dhk215@naver.com",
      message: "hello!",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "김도형",
      company: "kakao",
      theme: "light",
      title: "Engineer",
      email: "dhk215@naver.com",
      message: "hello!",
      fileName: "kdh",
      fileURL: null,
    },
    {
      id: "3",
      name: "Kim Do Hyeong",
      company: "carrot",
      theme: "colorful",
      title: "Software",
      email: "dhk215@naver.com",
      message: "hello!",
      fileName: "aaa",
      fileURL: null,
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
