import React from "react";
import styles from "./HeroLayout.module.scss"

export const HeroLayout = ({ backgroundSrc, children }) => {
  return(
    <div className={styles['hero-layout']}>
      <img className={styles['hero-layout__background']} src={backgroundSrc} />
      <div className={styles['hero-layout__content']}>
        {children}
      </div>
    </div>
  );
}