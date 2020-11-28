import React, {useEffect, useRef} from "react";
import "./FadeIn.module.scss"

export default function FadeIn(props) {

  const domRef = useRef();

  const options = {
    threshold: (props.threshold || 0.2) ,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entrie => {
      if(!entrie[0].isIntersecting) {
        return
      }
      entrie[0].target.classList.toggle("visible");
      observer.unobserve(domRef.current)
    }, options);

    observer.observe(domRef.current);

  }, []);

  return(
    <div
      ref={domRef}
      className={`fade-in`}
    >
      {props.children}
    </div>
  );
}