import React, { useRef } from "react";
import Button from "../button/button";

import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, data, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
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

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...data,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(data);
  };

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange} />
      <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange} />
      <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
      <input ref={emailRef} className={styles.input} type="text" name="email" value={email} onChange={onChange} />
      <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange} />
      <div className={styles.fileInput}>
        <FileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
