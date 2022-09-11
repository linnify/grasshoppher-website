import React from "react";
import Layout from "../components/Layout";
import {OrderedList} from "../components/OrderedList";
import {policy} from "../constants/privacyPolicy";
import {PageTitle} from "../components/PageTitle";
import Link from 'next/link'
import {HighlightedText} from '../components/HighlightedText/HighlightedText';

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Layout title={"Privacy Policy"}>
        <div className={"container container-bottom-padding legal-text-page"}>
          <HighlightedText text={"Privacy Policy"}/>
          <div className={"legal-text legal-text-page"}>
            <div>
              <h3>GrassoppHer Privacy Policy</h3>
              <h3>Last Updated: November 31, 2021</h3>
            </div>
            <ol>
              <li>
                <div>Purpose. This Privacy Policy (“Policy”) applies to GrasshoppHer’s social networking website and
                  application (together, the “Application”) operated by Grasshoppher, Inc., a Delaware corporation (“us”
                  or “we”). This Policy identifies the personally identifiable information (“PI”) and other anonymous
                  information (“AI”) gathered by us (collectively, “Information”) and the use by us of such Information.
                  Please contact us using the contact methods below if you have any questions about this Policy.
                </div>
                <br/>
                <div>This Policy hereby incorporates by this reference our <Link href={'terms'}>Terms of Use</Link> and
                  any additional updates, revisions, supplements, modifications and additional rules, polices, terms and
                  conditions (collectively referred to in this Policy as “Additional Terms”). Except as otherwise
                  indicated, any reference herein to the “Policy” shall include the Terms of Use and Additional Terms.
                  In
                  the event of any inconsistency or conflict between this Policy and the Terms of Use and/or any
                  Additional Terms, the following order of precedence shall control: (a) the Terms of Use; (b) this
                  Privacy Policy; and (c) any Additional Terms.
                </div>
              </li>
              <br/>
              <li>
                <div>Acceptance of the Policy. You acknowledge that you have read, understood, and agree to be bound
                  this
                  Policy by using any part of the Application, including by setting up or registering a user account,
                  providing information to us (by any means, whether in correspondence, via our Application, or
                  otherwise), signing this Policy, or continuing to use the Application. You “sign” and accept this
                  Policy
                  by clicking “I agree” on the account creation screen or signing an applicable separate legal agreement
                  that specifically references this Policy.
                </div>
                <br/>
                <div>IF YOU DO NOT AGREE WITH THIS POLICY OR OUR PRACTICES, YOU MAY NOT USE OUR APPLICATION. THIS POLICY
                  MAY CHANGE FROM TIME TO TIME AND YOUR CONTINUED USE OF OUR APPLICATION CONSTITUTES YOUR ACCEPTANCE OF
                  THOSE CHANGES. WE ENCOURAGE YOU TO REVIEW THIS POLICY PERIODICALLY.
                </div>
              </li>
              <br/>
              <li>
                Changes to Policy. This Policy was published on the date “Last Updated” above. We may make changes to
                this
                Policy from time to time. Changes to this Policy will be made by updating this page. Please visit this
                Policy regularly to read the current version. If we make any significant changes to this Policy we will
                notify you by email or flag this Policy on the Application as updated. You agree to our use of
                electronic
                communications with you for purposes of this Policy. If you do not agree to the changes to this Policy,
                we
                will continue to maintain and use PI previously collected in accordance with the Policy in force as of
                that date, but you may not continue to use our Application. Your continued use of our Application
                constitutes your acceptance of those changes.
              </li>
              <br/>
              <li>
                <div>PI. Personally identifiable information means any information that identifies, relates to,
                  describes,
                  is reasonable capable of being associated with, or could reasonably be linked, directly or indirectly,
                  with a particular consumer. We collect PI that you provide us in connection with your creation of an
                  account. This Information includes your username, password, information that identifies, relates to,
                  describes, or is capable of being associated with, a particular individual, (including, but not
                  limited
                  to, an individual’s full name, email, phone number, age, physical characteristics or description, city
                  of residence, state, country telephone number); professional or employment-related information
                  (including employment history, employer, current job title, years and types of experience); biometric
                  information (including photos and videos you may upload of yourself); and Inferences drawn from any of
                  the information identified above to create a profile about you reflecting your preferences,
                  characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities,
                  and aptitudes . Some of this personal information is required to provide our services to you and some
                  of
                  it is optional. If you do not provide the minimum personal information we ask for, it may delay or
                  prevent us from providing our services to you. We collect most of this personal information directly
                  from you—in person, by telephone, text or email and/or via our Application. However, we may also
                  collect
                  information from publicly accessible sources, directly from a third party (e.g., dealerships, vehicle
                  magazine providers), from a third party with your consent, from cookies on our Application, and via
                  our
                  IT systems, including automated monitoring of our Application and other technical systems, such as our
                  computer networks and connections, communications systems, email and instant messaging systems.
                </div>
                <br/>
                <div>We primarily use PI to communicate with you about the Application and our services, to help you
                  manage your access to the Application, to analyze activity on the Application, to assess and address
                  security issues, to generally administer and improve the Application, to comply with our legal and
                  regulatory obligations, in the performance of our contract with you or to take steps at your request
                  before entering into a contract, for our legitimate interests or those of a third party, or where you
                  have given consent.
                </div>
                <br/>
                <div>We may also use your PI to provide you with newsletters or our own marketing materials. You have
                  the
                  right to opt out of receiving promotional communications at any time by contacting us using the
                  contact
                  methods described below or using the “unsubscribe” link in emails. We may ask you to confirm or update
                  your marketing preferences if you instruct us to provide further services in the future, or if there
                  are
                  changes in the law, regulation, or the structure of our business. Please note that even if you opt out
                  of receiving promotional communications, you may still receive communications related to the our
                  oversight activities or otherwise as required by law. Also note that we may need to keep information
                  we
                  have collected about you for record-keeping, research and other purposes.
                </div>
                <br/>
                <div>We use Information in the aggregate for our business purposes and other than as specified in this
                  Policy, we do not use aggregated information in a manner that allows identification of an individual
                  user.
                </div>
              </li>

              <br/>
              <li>
                Legal. We may use PI as required or permitted by law, including in response to service of legal process
                (court order, summons, subpoena, and the like). We may disclose PI to law enforcement or regulatory
                authorities as part of an investigation into activity at the Application (such as a suspected breach) or
                in connection with your account. We shall use reasonable measures to limit disclosure and use of such
                PI.
                We may use PI in connection with the establishment or defense of legal claims.
              </li>
              <br/>
              <li>
                Security. Although no electronic method of transmission or storage is completely secure, we have, or
                have
                caused to be, implemented technical, physical and administrative safeguards designed to protect PI
                against
                loss and against unauthorized access, use, and disclosure. We may retain PI as necessary for the
                purposes
                stated in above or to otherwise meet legal requirements.
              </li>
              <br/>
              <li>
                Anonymous Information. We may collect AI regarding your use of the Application, such as computer-related
                information (the device or browser type you use, your Internet Protocol address, language data, certain
                plug-in data, and browser history data.) We may send to your device a “cookie” or “pixel tag” that
                contains an identification number that is unique to the device you are using. You may decline, through
                your browser or machine settings, to provide such cookies or other information to us, although some of
                the
                Application’s features or services may not function properly as a result, and some services may not be
                available at all. We may use this AI to operate the Application, to enhance the Application, to
                understand
                how our Application is used, to investigate and verify proper use of the Application, and to monitor the
                security and integrity of the Application.
              </li>
              <br/>
              <li>
                Third Party Agents – Access to and Use of the Information. We contract with third parties to assist us
                in
                administering the Application and hosting the Information. This may require you or us to share
                Information
                in order to make the Application available for your use. Such third parties agree with us to maintain
                your
                privacy at least with the level of protection set forth in this Policy.
              </li>
              <br/>
              <li>
                Third -Party Links and Information. Our Application may contain links to websites or other information
                and
                materials provided by third parties, including, but not limited to, links to third-party content. We do
                not own or control such websites, content, or third parties and are not responsible for the information
                or
                services provided by those third parties. As such, we are not responsible for their privacy policies,
                terms of use or service, or the information collected at or by such third-party websites or services. As
                such, we urge that you exercise caution before providing them with your personal information and to
                review
                the third party’s privacy policy for information on its data processing practice. You should contact the
                site administrator for such third party website if you have any complaints, claims, concerns or
                questions
                regarding such third party website or its privacy practices.
              </li>
              <br/>
              <li>
                Transfer of Information. We may transfer any information we have about you as an asset in connection
                with
                a merger or sale (including transfers made as part of insolvency or bankruptcy proceedings) involving
                all
                or part of a company reorganization or other change in company control. We will cause the new entity or
                owner of our business to agree to comply with the terms of this Policy.
              </li>
              <br/>
              <li>
                How Long Information is Kept. We will keep your Information while you have an account with us or while
                we
                are providing services to you. Thereafter, we will keep your Information for as long as is necessary to
                respond to any questions, complaints or claims made by you or on your behalf, to show that we treated
                you
                fairly; or to keep records required by law. We will not retain your Information for longer than
                necessary
                for the purposes set out in this Policy. Different retention periods apply for different types of
                Information.
              </li>
              <br/>
              <li>
                Information about Children. Our Application is not directed to children, and you may not use our
                Application if you are under the age of 13. If you are under 13, do not use our Application or provide
                any
                information about yourself including, without limitation, your name, address, email address or any
                screen
                name or user name you may use, unless you possess legal parental or guardian consent. We do not
                knowingly
                collect PI from or about children under the age of 13. If a parent or guardian believes that their child
                under the age of 13 has provided us with personally identifiable information, they should contact us.
              </li>
              <br/>
              <li>
                Your Access to PI. You may request access or updates to your PI or request a correction be made to an
                inaccuracy in your PI by contacting us as set out below or by using the functionality available on the
                Application. For security purposes, we may request PI from you in connection with such request.
              </li>
              <br/>
              <li>
                Deleting and Retention of PI. You may request that we delete or deactivate your account or otherwise
                delete PI, and we shall attempt to accommodate such requests. However, we may retain and use PI for such
                periods of time as required by law.
              </li>
              <br/>
              <li>
                Third Party Tracking. Information is collected in connection with your use of the Application and it may
                be shared with third parties. Some browsers have a "do not track" feature that lets you tell websites
                that
                you do not want your online activities tracked. At this time, we may not recognize or respond to Do Not
                Track signals or similar signals that users may employ.
              </li>
              <br/>
              <li>
                Applicable Jurisdiction. Information may be held at our offices and those of our third party agencies,
                service providers, representatives and agents for the reasons described above. This Policy is governed
                by
                the laws of the State of New York. We do not represent that it complies with privacy laws outside the
                United States. If your use of the Application would be subject to the laws of a jurisdiction with which
                this Policy does not comply, you shall not use the Application.
              </li>
              <br/>
              <li>
                Contact. Please contact us with any questions or comments you may have using the following contact
                information:
              </li>
            </ol>
            <div>
              <div>GrasshoppHer,</div>
              <div>Inc. 16192 Coastal Highway</div>
              <div>Lewes, Delaware 19958 USA</div>
            </div>
            <div>
              <div className={"table-alignment-policy"} style={{paddingTop: "40px"}}>Attn: <span>CEO</span></div>
              <div className={"table-alignment-policy"}>Email: <span>hello@grasshoppher.com</span></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
