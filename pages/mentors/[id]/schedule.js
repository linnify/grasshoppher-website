import Page from "../../../components/Page";
import Layout from "../../../components/Layout";
import {MentorHeader} from "../../../components/Mentors/MentorHeader/MentorHeader";
import React from "react";
import {getMentor, getMentorsSlugs} from "../../../src/services/datafycms";
import {useRouter} from "next/router";

const MentorSchedule = ({ mentor }) => {
  const router = useRouter()
  
  
  if (router.isFallback) {
    return <div/>
  }
  
  const name = `${mentor.first_name} ${mentor.last_name}`
  const pageTitle = `Grasshopper | ${name} | Schedule`
  const breadcrumbs = [
    {
      label: "The Disruptors",
      href: '/disruptors'
    },
    {
      label: "Meet the Disruptors",
      href: '/mentors',
    },
    {
      label: mentor.nickname,
      href: `/mentors/${mentor.slug}`,
    },
    {
      label: 'Book A Session',
      href: `/mentors/${mentor.slug}/schedule`,
      current: true
    }
  ]
  
  return (
    <Page
      title={pageTitle}
      description={"We are courage, independence and good fortune."}
      url={'https://grasshoppher.com/mentors'}
      images_url={"https://grasshoppher.com/partner/organizations.png"}
      images_width={327}
      images_height={327}
    >
      <Layout title={pageTitle}>
        
        <div className={'container'} style={{ marginTop: '64px'}}>
          <MentorHeader title={'Book A Session'} breadcrumbs={breadcrumbs}/>
          <iframe
            src={`https://grasshoppher.trafft.com/booking-embedded?employee=${mentor.trafft_employee_id}`}
            style={{
              marginBottom: 32,
              border: "none",
              width: '100%',
              minHeight: 655,
              margin: '0 auto',
              display: "block"
            }}
          />
          
        </div>
        
      </Layout>
    </Page>
  )
}

export async function getStaticPaths() {
  // const mentorsSlugs = await getMentorsSlugs()
  // const paths = mentorsSlugs.slice(0, 1).map(slug => {
  //   return { params: { id: slug } }
  // });
  
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const mentor = await getMentor(params.id);
  return {
    props: {
      mentor
    }
  }
}

export default MentorSchedule
