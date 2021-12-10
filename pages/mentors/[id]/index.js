import {getMentor, getMentorsSlugs} from "../../../src/services/datafycms";
import Page from "../../../components/Page";
import Layout from "../../../components/Layout";
import {MentorHero} from "../../../components/Mentors/MentorHero/MentorHero";
import {MentorSummary} from "../../../components/Mentors/MentorSummary/MentorSummary";

const Mentor = ({mentor}) => {
  const name = `${mentor.first_name} ${mentor.last_name}`
  const pageTitle = `Grasshopper | ${name}`
  
  return (
    <Page
      title={pageTitle}
      description={mentor.summary || "We are courage, independence and good fortune."}
      url={'https://grasshoppher.com/mentors'}
      images_url={"https://grasshoppher.com/partner/organizations.png"}
      images_width={327}
      images_height={327}
    >
      <Layout title={pageTitle}>
        <MentorHero mentor={mentor}/>
        <MentorSummary mentor={mentor} />
      </Layout>
    </Page>
  )
}

export async function getStaticPaths() {
  const mentorsSlugs = await getMentorsSlugs()
  const paths = mentorsSlugs.map(slug => {
    return { params: { id: slug } }
  });
  
  return {
    paths,
    fallback: false,
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

export default Mentor;
