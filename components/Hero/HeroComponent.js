import React from "react";
import Link from "next/link";
import FadeInIntro from "../FadeInIntro/FadeInIntro";
import FadeInSection from "../FadeInSection/FadeInSection";

export const HeroComponent = ({product}) => {

  const displayDescription = product.description.map((text,index) =>{
    return(<div key={index}><FadeInSection>{text}</FadeInSection></div>);
  })

  return(
    <div className={"hero--component"}>
      <div className={"hero__overlay"}>
        <FadeInIntro threshold={0}>
          <img src={product.background} className={"hero--img"}/>
        </FadeInIntro>
        <div className={"hero__context"}>
          <div className={"hero__description show-xs hide-lg"}>
            <FadeInSection>
              {displayDescription}
            </FadeInSection>
          </div>
          <FadeInSection>
            <Link href={product.pageLink}>
              <div className={`hero--button ${product.class}`}>{product.buttonText}</div>
            </Link>
          </FadeInSection>
          <div className={"hero__description hide-xs show-lg"}>
            <FadeInSection>
              {displayDescription}
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}