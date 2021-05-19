import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import styled from 'styled-components'

// TODO remove styled-component and use module css
const Container = styled.div`
  margin-top: 100px;
  padding-bottom: 5px;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px #00000029;
  grid-row-end: ${(props => `span ${props.span}`)};
`;

const Image = styled.div`
  overflow: hidden;
  position:relative;
  width: 100%;
  
  & h2 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 4px;
    left: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0,0,0,0.3);
  } 
  
  & img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover img{
    transform: scale(1.2);
  }
  
  @media (min-width: 768px) {
    & h2 {
      font-size: 30px;
    }
  }
  
  @media (min-width: 992px) {
    & h2 {
      font-size: 40px;
    }
  }
  
  @media (min-width: 1200px) {
    & h2 {
      font-size: 50px;
    }
  }
`;

const Summary = styled.div`
  font-size: 18px;
  margin: 40px 50px;
`;

const Button = styled.div`
  margin: 0 50px 50px;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  border: 2px solid #f5cac4;
  background-color: #f5cac4;
  border-radius: 41px;
  transition: background-color 0.3s ease-out;

  & a {
    width: 100%;
    height: 100%;
    padding-top: 15px;
    text-align: center;
    border-radius: 41px;
    padding-bottom: 15px;
  }

  &:hover {
    background-color: white;
    color:#f5cac4;
  }
    
  @media (min-width: 420px) {
    font-size: 18px;
  }
    
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;


export const ResourceItem = ({ resource }) => {
  const pdf = resource.document_resource.url
  const [span, setSpan] = useState(0)
  const imageRef = useRef()
  const containerRef = useRef()

  useEffect(() => {
    imageRef.current.addEventListener('load', resizeResourceItem)
    window.addEventListener("resize", resizeResourceItem);
    return () => {
      window.removeEventListener("resize", resizeResourceItem);
      imageRef.current.removeEventListener('load', resizeResourceItem)
    };
  });

  const resizeResourceItem = () => {
    const height = containerRef.current.clientHeight
    const rowGap = parseInt(getComputedStyle(containerRef.current.parentNode).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((height)/(rowGap));
    setSpan(rowSpan)
  };

  return(
    <Container className={"resource"} span={span} ref={containerRef}>
      <Image className={"resource--image"}>
        <h2 className={"resource--title"}>{resource.title}</h2>
        <img src={resource.image.url} className={"image"} ref={imageRef}/>
      </Image>
      <Summary className={"resource--summary"}>{resource.description}</Summary>
      {!!pdf && <Button className={"resource--button"}>
        <Link href={pdf}>
          <a target={'_blank'}>See more</a>
        </Link>
      </Button>}
    </Container>
  )
}