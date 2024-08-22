import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle"> Contact</h1>

      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Email
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="message"
            required
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
