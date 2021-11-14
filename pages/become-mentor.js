import React from "react";
import Layout from "../components/Layout";
import FadeIn from "../components/FadeIn/FadeIn";
import Page from "../components/Page";
import {BecomeMentorHero} from "../components/BecomeMentor/BecomeMentorHero/BecomeMentorHero";
import {BecomeMentorDescription} from "../components/BecomeMentor/BecomeMentorDescription/BecomeMentorDescription";
import {BecomeMentorFeatures} from "../components/BecomeMentor/BecomeMentorFeatures/BecomeMentorFeatures";
import {BecomeMentorCTA} from "../components/BecomeMentor/BecomeMentorCTA/BecomeMentorCTA";

const BecomeMentor = () => {
  
  return (
    <Page
      title={"Grasshopper | Become a mentor"}
      description={"We are courage, independence and good fortune."}
      url={'https://grasshoppher.com/become-mentor'}
      images_url={"https://grasshoppher.com/partner/organizations.png"}
      images_width={327}
      images_height={327}
    >
      <Layout title={"Grasshopper | Become a mentor"}>
        <FadeIn>
          <BecomeMentorHero />
        </FadeIn>
        <FadeIn>
          <BecomeMentorDescription />
        </FadeIn>
        <FadeIn>
          <BecomeMentorFeatures />
        </FadeIn>
        <FadeIn>
          <div style={{ marginBottom: 64 }}>
            <BecomeMentorCTA />
          </div>
        </FadeIn>
      </Layout>
    </Page>
  )
}

export default BecomeMentor
