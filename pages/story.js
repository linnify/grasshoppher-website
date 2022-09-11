import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {StoryIntro} from "../components/StoryIntro";
import Page from "../components/Page";
import {Loader} from "../components/Loader/Loader";
import {StoryFounders} from "../components/Story/StoryFounders/StoryFounders";


export const Story = () => {
    const [loaded, setLoaded] = useState(true)
    const [pageURL, setPageURL] = useState("")

    useEffect(() => {
        setLoaded(true)
        if (typeof window !== 'undefined') {
            setPageURL(window.location.href)
        }
    }, [])

    return (
        <Page
            title={"The Story"}
            description={"This is an inception story. An “aha moment” story. A story about how one girl decided “good” wasn’t good enough."}
            url={pageURL}
            images_url={"https://grasshoppher.com/heather-miller.png"}
            images_width={642}
            images_height={642}
        >
            <Layout title={"The Story"}>
                {!loaded && <Loader/>}
                <StoryFounders/>
            </Layout>
        </Page>
    );
}

export default Story