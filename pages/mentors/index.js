import React from "react";
import Page from "../../components/Page";
import Layout from "../../components/Layout";
import {getMentors} from "../../src/services/datafycms";
import {Breadcrumbs} from "../../components/Breadcrumbs/Breadcrumbs";
import {MentorsList} from "../../components/Mentors/MentorsList/MentorsList";

const Mentors = ({ mentors }) => {
  
  const breadcrumbs = [
    {
      label: "The Disruptors",
      href: '/disruptors'
    },
    {
      label: "Meet the Disruptors",
      href: '/mentors',
      current: true
    }
  ]
  
  return (
    <Page
      title={"Grasshopper | Mentors"}
      description={"We are courage, independence and good fortune."}
      url={'https://grasshoppher.com/mentors'}
      images_url={"https://grasshoppher.com/partner/organizations.png"}
      images_width={327}
      images_height={327}
    >
      <Layout title={"Grasshopper | Menors"}>
        <div className={'container members-page__header'}>
          <h1><span className={'primary-color'}>MEET</span> THE DISRUPTORS </h1>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        
        <MentorsList mentors={mentors}/>
        
      </Layout>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const mentors = await getMentors()
  
  return {
    props: {
      mentors: mentors.sort((a, b) => a.starting_price - b.starting_price),
    },
  };
}

export default Mentors;
