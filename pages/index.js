import React from "react";
import Layout from "../components/Layout";
import {Hero} from "../components/Hero/Hero";
import {MobileApp} from "../components/MobileApp/MobileApp";
import {LandingDownload} from "../components/LandingDownload/LandingDownload";
import FadeInScroll from "../components/FadeInScroll/FadeInScroll";
import FadeIn from "../components/FadeIn/FadeIn";
import {Loader} from "../components/Loader/Loader";
import {HomeProblemStatement} from "../components/Home/HomeProblemStatement/HomeProblemStatement";
import {HomeWhatYouWillGet} from "../components/Home/HomeWhatYouWillGet/HomeWhatYouWillGet";
import {getInstagramPosts} from "../src/services/instagram"
import {Sponsors} from "../components/Home/Sponsors";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            newPartnership: this.props.newPartnership,
            partners: this.props.partners,
        };
    }

    async componentDidMount() {
        this.setState({loaded: true});
    }

    render() {
        return (
            <Layout title={"GrasshoppHer"}>
                {!this.state.loaded && <Loader/>}
                <FadeIn>
                    <Hero/>
                </FadeIn>
                <FadeInScroll threshold={0.25}>
                    <HomeProblemStatement/>
                </FadeInScroll>
                <FadeInScroll>
                    <HomeWhatYouWillGet/>
                </FadeInScroll>
                {/*<InstagramSlider feed={Array(5).fill(*/}
                {/*    {*/}
                {/*        id: 1,*/}
                {/*        caption: "dasas",*/}
                {/*        media_url: "/linnify-logo.svg",*/}
                {/*        media_type: "Dsada",*/}
                {/*        permalink: "dasda",*/}
                {/*        thumbnail_url: "/linnify-logo.svg"*/}
                {/*    }*/}
                {/*)}/>*/}
                {/*INSTAGRAM*/}
                {/*<FadeInScroll threshold={0.25}>*/}
                {/*    <InstagramSection feed={this.props.posts}/>*/}
                {/*</FadeInScroll>*/}
                <FadeInScroll>
                    <Sponsors/>
                </FadeInScroll>
                <FadeInScroll>
                    <MobileApp/>
                </FadeInScroll>
                <FadeInScroll>
                    <LandingDownload/>
                </FadeInScroll>
                {/*<FadeInScroll>*/}
                {/*    <Partnership newPartnership={this.state.newPartnership} partners={this.state.partners}/>*/}
                {/*</FadeInScroll>*/}
            </Layout>
        );
    }
}

export async function getStaticProps() {
    // console.log("HERE")
    // const posts = await getInstagramPosts();
    // console.log(posts)


    return {
        props: {
            posts: [],
        },
    };
}
