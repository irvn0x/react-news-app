import React from "react";

import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <p className={styles.error}>Error, Please reload page!</p>
    </div>
  );
};

export default Error;
