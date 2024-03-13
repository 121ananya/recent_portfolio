import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
    <a href="mailto:sinhaananya050@gmail.com" target="_blank">sinhaananya050@gmail.com</a>
  </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
        <a href="https://www.linkedin.com/in/ananya-sinha-838312166/" target="_blank">linkedin.com/ananya</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/121ananya" target="_blank">github.com/ananya</a>
      </li>

      </ul>
    </footer>
  );
};
