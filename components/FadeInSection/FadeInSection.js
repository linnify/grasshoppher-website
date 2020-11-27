import React, {useEffect, useRef} from "react";
import "./FadeInSection.module.scss"

export default function FadeInSection(props) {

  const domRef = useRef();

  const options = {
    threshold: (props.threshold || 0) ,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entrie => {
      if(!entrie[0].isIntersecting) {
        return
      }
      entrie[0].target.classList.toggle("is-visible");
      observer.unobserve(domRef.current)
    }, options);

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return(
    <div
      ref={domRef}
      className={`fade-in-section`}
    >
      {props.children}
    </div>
  );
}