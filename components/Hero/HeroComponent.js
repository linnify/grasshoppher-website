import React from "react";
import Link from "next/link";

export const HeroComponent = ({product}) => {

  const displayDescription = product.description.map((text,index) =>{
    return(
      <div key={index}>{text}</div>
    );
  })

  return(
    <div className={"hero--component"}>
      <div className={"hero__overlay"}>
        <img src={product.background} className={"hero--img"}/>
        <div className={"hero__context"}>
          <Link href={product.pageLink}>
            <div className={`hero--button ${product.class}`}>{product.buttonText}</div>
          </Link>
          <div className={"hero__description"}>
            {displayDescription}
          </div>
        </div>
      </div>
    </div>
  );
}