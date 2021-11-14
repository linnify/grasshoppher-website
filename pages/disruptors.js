import React from "react";
import Layout from "../components/Layout";
import Page from "../components/Page";
import FadeIn from "../components/FadeIn/FadeIn";
import {getMentors} from "../src/services/datafycms";
import {DisruptorsHero} from "../components/Disruptors/DisruptorsHero/DisruptorsHero";
import {DisruptorsDescription} from "../components/Disruptors/DisruptorsDescription/DisruptorsDescription";
import {DisruptorsMentornshipMovement} from "../components/Disruptors/DisruptorsMentorshipMovement/DisruptorsMentornshipMovement";
import {DisruptorsMentors} from "../components/Disruptors/DisruptorsMentors/DisruptorsMentors";
import {DisruptorsFindMentors} from "../components/Disruptors/DisruptorsFindMentor/DisruptorsFindMentor";
import {DisruptorsScholarhsip} from "../components/Disruptors/DisruptorsScolarship/DisruptorsScholarhsip";


const Disruptors = ({ mentors }) => {
  
  return (
    <Page
      title={"Grasshopper | The Disruptors"}
      description={"We are courage, independence and good fortune."}
      url={'https://grasshoppher.com/disruptors'}
      images_url={"https://grasshoppher.com/partner/organizations.png"}
      images_width={327}
      images_height={327}
    >
      <Layout title={"Grasshopper | The Disruptors"}>
        <FadeIn>
          <DisruptorsHero />
        </FadeIn>
        
        <FadeIn>
          <DisruptorsDescription />
        </FadeIn>
        
        <FadeIn>
          <div className={'padding-vertical-xxl'}>
            <DisruptorsMentornshipMovement />
          </div>
        </FadeIn>
        
        <FadeIn>
          <div className={'padding-bottom-xxl'}>
            <DisruptorsMentors mentors={mentors} />
          </div>
        </FadeIn>
        
        <FadeIn>
          <DisruptorsFindMentors />
        </FadeIn>
        
        <FadeIn>
          <div className={'padding-bottom-xxl'}>
            <DisruptorsScholarhsip />
          </div>
        </FadeIn>
      </Layout>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const mentors = await getMentors()
  
  return {
    props: {
      mentors,
    },
  };
}

export default Disruptors
