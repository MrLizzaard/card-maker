import React from "react";
import CardMakerForm from "../cardMakerForm/cardMakerForm";
import CardMakerPreview from "../cardMakerPreview.jsx/cardMakerPreview";
import styles from "./makerContainer.module.css";

const MakerContainer = (props) => {
  return (
    <section className={styles.makerContainer}>
      <CardMakerForm className={styles.left} />
      <CardMakerPreview className={styles.right} />
    </section>
  );
};

export default MakerContainer;
