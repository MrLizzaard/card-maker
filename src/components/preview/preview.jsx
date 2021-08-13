import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ data }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {data.map((item) => (
          <Card data={item} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
