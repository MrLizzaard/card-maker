import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const [card, setCard] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (item) => {
    setCard((card) => {
      const updated = { ...card };
      updated[item.id] = item;
      return updated;
    });
  };
  const deleteCard = (item) => {
    setCard((card) => {
      const updated = { ...card };
      delete updated[item.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor //
          FileInput={FileInput}
          data={card}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview data={card} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
