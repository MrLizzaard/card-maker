import React from "react";
import CardMakerForm from "../cardMakerForm/cardMakerForm";
import CardMakerPreview from "../cardMakerPreview.jsx/cardMakerPreview";
import styles from "./makerContainer.module.css";

const MakerContainer = (props) => {
  return (
    <section className={styles.makerContainer}>
      <CardMakerForm />
      <CardMakerPreview />
    </section>
  );
};

export default MakerContainer;
