import React from "react";
import styles from "./HeroLayout.module.scss"

export const HeroLayout = ({backgroundSrc, children}) => {
  return (
    <div className={styles['hero-layout']}>
      <div className={styles['hero-layout__content']}>
        <img className={styles['hero-layout__background']} src={backgroundSrc}/>
        <div className={styles['hero-layout__children']}>
          {children}
        </div>
      </div>
    </div>
  );
}