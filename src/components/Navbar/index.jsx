import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h1 className={styles.navTitle}>NEWS</h1>
      </div>
    </nav>
  );
};

export default Navbar;
