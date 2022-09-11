import React from "react";
import Layout from "../components/Layout";
import FadeInScroll from "../components/FadeInScroll/FadeInScroll";
import {Loader} from "../components/Loader/Loader";
import {HomeProblemStatement} from "../components/Home/HomeProblemStatement/HomeProblemStatement";
import {HomeWhatYouWillGet} from "../components/Home/HomeWhatYouWillGet/HomeWhatYouWillGet";
import {getInstagramPosts} from "../src/services/instagram"
import {Sponsors} from "../components/Home/Sponsors";
import {HomeEBook} from "../components/Home/HomeEBook/HomeEBook";
import {HomeImpactInYourInbox} from "../components/Home/HomeImpactInYourInbox/HomeImpactInYourInbox";
import {HomeHero} from '../components/Home/HomeHero/HomeHero';

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
                <HomeHero/>
                <HomeProblemStatement/>
                <FadeInScroll>
                    <HomeWhatYouWillGet/>
                </FadeInScroll>
                {/*INSTAGRAM*/}
                {/*<FadeInScroll threshold={0.25}>*/}
                {/*    <InstagramSection feed={this.props.posts}/>*/}
                {/*</FadeInScroll>*/}
                <FadeInScroll>
                    <Sponsors/>
                </FadeInScroll>
                {/*inbox*/}
                <FadeInScroll>
                    <HomeImpactInYourInbox/>
                </FadeInScroll>
                <FadeInScroll>
                    <HomeEBook/>
                </FadeInScroll>
            </Layout>
        );
    }
}

export async function getStaticProps() {
    // const posts = await getInstagramPosts();

    return {
        props: {
            posts: [],
        },
    };
}
