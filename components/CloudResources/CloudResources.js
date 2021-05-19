import React from "react";
import {ResourceItem} from "../ResourceItem/ResourceItem";
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 100px;
  
  @media (min-width: 768px) {
    display: grid;
    grid-auto-rows: 20px;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-gap: 170px;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

export const CloudResources = ({ resources }) => {

  const displayResources = resources.map((resource, index) => <ResourceItem resource={resource} key={index}/>);

  return(
    <Container>
      {displayResources}
    </Container>
  );
}
