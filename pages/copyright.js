import React from "react";
import Layout from "../components/Layout";
import { informationList, notificationList } from "../constants/copyright";
import { UnorderedList } from "../components/UnorderedList";
import { HighlightedText } from "../components/HighlightedText/HighlightedText";

export default class Copyright extends React.Component {
  render() {
    return (
      <Layout title={"Digital Millennium Copyright Act"}>
        <div className={"container container-bottom-padding legal-text-page"}>
          <HighlightedText
            text={"Digital Millennium Copyright Act Compliance"}
          />
          <div className={"legal-text legal-text-page"}>
            <div className={"legal-text-page__section"}>
              <div style={{ fontWeight: "bold" }}>DMCA Compliance</div>
              <div>
                The below contact information is provided exclusively for DMCA
                notices. Do not send any unrelated inquiries to the contact
                listed below.
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{ fontWeight: "bold" }}>
                Digital Millennium Copyright Act Compliance
              </div>
              <div>
                The site to which this policy applies is www.grasshoppher.com,
                (“Site”). The Site is operated by GrasshoppHer, Inc. a Delaware
                corporation with offices at 16192 Coastal Highway, Lewes,
                Delware 19958 (“GrasshoppHer”).
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{ fontWeight: "bold" }}>
                Digital Millennium Copyright Act: Copyright Matters.
              </div>
              <div>
                Pursuant to Title 17, United States Code, Section 512(c)(2),
                notifications of claimed copyright infringement must be
                submitted to the following Designated Agent:
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div className={"table-alignment-copyright"}>
                <span className={"table-alignment-copyright__key"}>
                  Name of Copyright Agent:
                </span>
                <span> Heather Miller, CEO</span>
              </div>
              <div className={"table-alignment-copyright"}>
                <span className={"table-alignment-copyright__key"}>
                  {"Physical address to which\nnotification should be sent:"}
                </span>
                <span> 16192 Coastal Highway, Lewes, Delaware 19958</span>
              </div>
              <div className={"table-alignment-copyright"}>
                <span className={"table-alignment-copyright__key"}>
                  {"Email address of\nCopyright Agent:"}
                </span>
                <span> outreach@grasshoppher.com</span>
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div>
                To be effective, the notification must be a written
                communication, in the English language, which includes the
                following:
              </div>
              <UnorderedList list={notificationList} />
            </div>
            <div className={"legal-text-page__section"}>
              <div>
                In response to such a written communication, GrasshoppHer may
                give notice to the person or organization responsible for the
                posting of the Disputed Content (“User”) by means of electronic
                mail to a User’s e-mail address or by written communication sent
                by first-class mail to a User’s address if such address is
                present in the records of GrasshoppHer.
              </div>
              <div>
                If a User believes that Disputed Content that was removed (or to
                which access was disabled) is not infringing, or that the User
                has the authorization from the copyright owner, the copyright
                owner’s agent, or pursuant to the law, to post and use the
                Disputed Content, the User may send a counter-notice containing
                the following information to the Copyright Agent for
                GrasshoppHer:
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <UnorderedList list={informationList} />
              <div>
                If a counter-notice is received by the Copyright Agent,
                GrasshoppHer may send a copy of the counter-notice to the
                original complaining party informing that person that
                GrasshoppHer may replace the removed Disputed Content or cease
                disabling it in ten (10) business days. Unless the copyright
                owner files an action seeking a court order against the provider
                of the Disputed Content, the removed Disputed Content may be
                replaced, or access to it restored, in ten to fourteen (10 to
                14) business days or more after receipt of the counter-notice,
                at GrasshoppHer’s sole discretion.
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>
                  Legal Concerns Other Than Copyright.
                </span>{" "}
                If a visitor to the Site, user of the Site, or other third party
                believes that Content or activity at the Site raises legal
                issues affecting that visitor other than copyright (by way of
                example, trademark, privacy, disparagement) that visitor may
                follow the procedures outlined above for DMCA claims and a
                representative of GrasshoppHer will investigate.
              </div>
              <div className={"table-alignment-copyright"}>
                Last Modified:<span> September 25, 2018</span>
              </div>
              <div>
                For all other Digital Millennium Copyright Act Compliance
                inquiries, please contact us at{" "}
                <span style={{ fontWeight: "bold" }}>
                  outreach@grasshoppher.com.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
