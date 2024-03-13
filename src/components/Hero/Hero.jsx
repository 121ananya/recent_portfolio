import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ananya Sinha</h1>
        <p className={styles.description}>
          I'm a full-stack developer with almost 3 years of experience using Angular, React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1T6ZuybtCe2q5E64kMvr6qvpRu0GIP_0Q/view?usp=sharing" target="_blank" className={styles.contactBtn}>
          Reach Me Through
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
