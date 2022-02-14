import React, {useEffect, useRef} from "react";
import styles from "./FadeInScroll.module.scss"

export default function FadeInScroll(props) {

  const domRef = useRef();

  const options = {
    threshold: (props.threshold || 0) ,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entrie => {
      if(!entrie[0].isIntersecting) {
        return
      }
      entrie[0].target.classList.toggle(styles["fade-in-scroll__is-visible"]);
      observer.unobserve(domRef.current)
    }, options);

    observer.observe(domRef.current);

  }, []);

  return(
    <div
      ref={domRef}
      className={styles['fade-in-scroll']}
    >
      {props.children}
    </div>
  );
}
