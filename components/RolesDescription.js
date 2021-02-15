import React from "react";
import styled from 'styled-components'

const Title = styled.div`
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 35px;
  
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const Dot = styled.span`
    background-color: #F5CAC4;
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
`

const Description = styled.div`
  font-size: 18px;
  padding-bottom: 8px;
`

export const RolesDescription = () => {
  
  return (
    <>
      <div>
        <Title>As a Mentor, you will:</Title>
        <Description> <Dot/> <b>Share</b> your experiences with other women and help them develop</Description>
        <Description> <Dot /> <b>Connect</b> with other senior positioned women and top companies</Description>
        <Description> <Dot /> <b>Enjoy</b> personal branding opportunities and an opportunity to strengthen your leadership and communication skills</Description>
        <Description> <Dot /> <b>Impact</b> and empower women from universities, grad schools and young professionals across the globe</Description>
      </div>
  
      <div style={{ marginTop: '30px'}}>
        <Title>As a Mentee, you will:</Title>
        <Description> <Dot /> <b>Connect</b> with peers, mentors and role models </Description>
        <Description> <Dot /> <b>Build</b> a leadership toolkit to help sharpen your skills and grow</Description>
        <Description> <Dot /> <b>Enjoy</b> a community of cheerleaders with recruiting opportunities</Description>
        <Description> <Dot /> <b>Grow</b> in a culture of mentorship and sponsorship, as well as knowledge sharing</Description>
      </div>
      
    </>
  )
}
