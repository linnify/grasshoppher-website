import React, {useEffect, useRef} from "react";
import "./FadeInIntro.module.scss"

export default function FadeInIntro(props) {

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

    return () => observer.unobserve(domRef.current);
  }, []);

  return(
    <div
      ref={domRef}
      className={`fade-in-intro`}
    >
      {props.children}
    </div>
  );
}