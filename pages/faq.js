import React from "react";
import Layout from "../components/Layout";
import Page from "../components/Page";
import FadeIn from "../components/FadeIn/FadeIn";
import {getFrequentlyAskQuestions} from "../src/services/datafycms";
import {FAQSection} from "../components/FAQ/FAQSection/FaqSection";

const FAQ = ({ questions }) => {
  
  const mentorQuestions = questions.filter(item => item.type === 'Mentor');
  const menteeQuestions = questions.filter(item => item.type === 'Mentee');
  
  return (
    <Page
      title={"Grasshopper | FAQ"}
      description={"We are courage, independence and good fortune."}
      url={'https://grasshoppher.com/faq'}
      images_url={"https://grasshoppher.com/partner/organizations.png"}
      images_width={327}
      images_height={327}
    >
      <Layout title={"Grasshopper | FAQ"}>
        <FadeIn>
          <FAQSection menteeQuestions={menteeQuestions} mentorQuestions={mentorQuestions} />
        </FadeIn>
      </Layout>
  
    </Page>
  )
}

export async function getStaticProps() {
  // const questions = await getFrequentlyAskQuestions()
  
  return {
    props: {
      questions: [],
    },
  };
}

export default FAQ
