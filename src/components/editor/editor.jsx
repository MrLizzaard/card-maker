import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ data }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {data.map((item) => (
        <CardEditForm data={item} />
      ))}
    </section>
  );
};

export default Editor;
