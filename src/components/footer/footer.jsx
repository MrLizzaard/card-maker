import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => (
  <section className={styles.footer}>
    <p className={styles.title}>Coded by MrLizard</p>
  </section>
));

export default Footer;
