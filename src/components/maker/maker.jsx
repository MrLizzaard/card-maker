import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [card, setCard] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopSync = cardRepository.syncCards(userId, (card) => {
      setCard(card);
    });
    return () => {
      stopSync();
    };
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const createOrUpdateCard = (item) => {
    setCard((card) => {
      const updated = { ...card };
      updated[item.id] = item;
      return updated;
    });
    cardRepository.saveCard(userId, item);
  };
  const deleteCard = (item) => {
    setCard((card) => {
      const updated = { ...card };
      delete updated[item.id];
      return updated;
    });
    cardRepository.removeCard(userId, item);
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
