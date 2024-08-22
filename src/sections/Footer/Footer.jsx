import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy;2024 Rahul Sharma.
        <br />
        All rights Reserved
      </p>
    </section>
  );
}

export default Footer;
