import React from "react";
import Link from "next/link";
import FadeIn from "../FadeIn/FadeIn";
import FadeInScroll from "../FadeInScroll/FadeInScroll";

export const HeroComponent = ({product}) => {

  const displayDescription = product.description.map((text,index) =>{
    return(<div key={index}><FadeInScroll>{text}</FadeInScroll></div>);
  })

  return(
    <div className={"hero--component"}>
      <div className={"hero__overlay"}>
        <FadeIn threshold={0}>
          <img src={product.background} className={"hero--img"}/>
        </FadeIn>
        <div className={"hero__context"}>
          <div className={"hero__description show-xs hide-lg"}>
            <FadeInScroll>
              {displayDescription}
            </FadeInScroll>
          </div>
          <FadeInScroll>
            <Link href={product.pageLink}>
              <div className={`hero--button ${product.class}`}>{product.buttonText}</div>
            </Link>
          </FadeInScroll>
          <div className={"hero__description hide-xs show-lg"}>
            <FadeInScroll>
              {displayDescription}
            </FadeInScroll>
          </div>
        </div>
      </div>
    </div>
  );
}