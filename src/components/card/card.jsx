import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";
const Card = ({ data }) => {
  const {
    id, //
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = data;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li key={id}>
      <img src={url} alt="profile" />
      <div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{company}</p>
        <p className={styles.description}>{title}</p>
        <p className={styles.description}>{email}</p>
        <p className={styles.description}>{message}</p>
      </div>
    </li>
  );
};

export default Card;
