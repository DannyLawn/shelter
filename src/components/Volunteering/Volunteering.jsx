import React from "react";
import InDevelopment from "../InDevelopment/InDevelopment.jsx";
import styles from "./Volunteering.module.scss";

export default function Volunteering() {
  return(
    <section className={styles.volunteering}>
      <InDevelopment />
    </section>
  );
}