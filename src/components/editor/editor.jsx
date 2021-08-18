import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ data, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {data.map((item) => (
        <CardEditForm data={item} key={item.id} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
