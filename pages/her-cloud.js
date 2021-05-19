import React, {useEffect, useState} from "react";
import Page from "../components/Page";
import Layout from "../components/Layout";
import FadeIn from "../components/FadeIn/FadeIn";
import {PageTitle} from "../components/PageTitle";
import {CloudResources} from "../components/CloudResources/CloudResources";
import {ButtonRedirect} from "../components/ButtonRedirect";
import {Loader} from "../components/Loader/Loader";
const datafyCMS = require('@datafycms/js-client')

export default class HerCloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      resources: this.props.resources
    };
  }

  componentDidMount() {
    this.setState({loaded: true, pageURL: window.location.href});
  }

  render() {
    return (
      <Page
        title={"HerCloud - GrasshoppHer"}
        description={"Find more about the events hosted by GrasshoppHer team."}
        url={this.state.url}
      >
        <Layout title={"HerCloud"}>
          {!this.state.loaded && <Loader/>}
          <FadeIn>
            <PageTitle content={"HerCloud"} id={"general"}/>
          </FadeIn>
          <div className={'container margin-top-bottom-100-md'}>
            <FadeIn>
              <div className={'her-cloud-hero-background'}>
                <img src={'/her-cloud.jpg'} alt={'her cloud background image'}/>
                <div className={'text-overlay'}>Free resources to up your mentorship game.</div>
              </div>
            </FadeIn>
          </div>
          <div className={'container'}>
            <CloudResources resources={this.state.resources}/>
          </div>
          <div className={'container'}>
            <div className={'her-cloud-mentorship'}>
              <div className={'her-cloud-mentorship--text'}>Find Mentorship</div>
              <ButtonRedirect text={"Log in"} href={"https://www.grasshoppherapp.com/signup"} target={true}/>
            </div>
          </div>
        </Layout>
      </Page>
    )
  }
}

export const getStaticProps = async () => {
  const resources = await datafyCMS.collections('cloud_resource')
    .fields(['id', 'title', 'description', 'image.url', 'document_resource.url'])
    .pageSize(50)
    .list()
    .then(response => response.results)


  return {
    props: {
      resources
    }
  }
}