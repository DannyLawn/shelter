import React from "react";
import InDevelopment from "../InDevelopment/InDevelopment";
import styles from "./Rules.module.scss";

export default function Rules() {
  return(
    <section className={styles.rules}>
      <InDevelopment />
    </section>
  );
}