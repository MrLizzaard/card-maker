import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ data }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(data).map((key) => (
          <Card key={key} data={data[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
