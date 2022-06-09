import Page from "../components/Page";
import Layout from "../components/Layout";
import {Loader} from "../components/Loader/Loader";
import FadeIn from "../components/FadeIn/FadeIn";
import {PageTitle} from "../components/PageTitle";
import React from "react";
const datafyCMS = require('@datafycms/js-client')

const Membership = (props) => {
  return (
    <Page title={"Presale Membership - GrasshoppHer"}>
      <Layout title={"Presale Membership"}>
        <FadeIn>
          <PageTitle content={"Presale Membership"} id={"general"}/>
        </FadeIn>
        <div className={"container padding-top-m padding-bottom-xxl"}>
          <div dangerouslySetInnerHTML={{__html: props.page }}/>
        </div>
      </Layout>
    </Page>
  )
}



export const getStaticProps = async () => {
  const response = await datafyCMS.collections('pages')
    .filterBy('type', 'eq', 'membership')
    .pageSize(1)
    .list()
  const page = response.results?.[0];
  
  
  return {
    props: {
      page: page?.content || ''
    }
  }
}

export default Membership;
