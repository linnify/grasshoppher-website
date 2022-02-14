import React from "react";
import styles from './MentorCardBar.module.scss';

export const MentorCardBar = ({ bottom }) => {
  if (bottom) {
    return (
      <div className={`${styles['mentor-card-bar']} ${styles['mentor-card-bar__bottom']}`}/>
    )
  }
  
  return (
    <div className={styles['mentor-card-bar']}>
      <div className={styles['mentor-card-bar__dot']}/>
      <div className={styles['mentor-card-bar__dot']}/>
      <div className={styles['mentor-card-bar__dot']}/>
    </div>
  )
}
