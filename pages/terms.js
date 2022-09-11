import React from "react";
import Layout from "../components/Layout";
import {OrderedList} from "../components/OrderedList";
import {
  accountRights,
  ageRestrictions,
  application,
  yourUse,
  useApplication,
  youAgree,
  userLicense,
  noWarranty,
  damageLimitations,
  indemnification,
  endAgreement
} from "../constants/terms";
import {HighlightedText} from '../components/HighlightedText/HighlightedText';


export default class Terms extends React.Component {
  render() {
    return (
      <Layout title={"Terms of Use"}>
        <div className={"container container-bottom-padding legal-text-page"}>
          <HighlightedText text={"Terms of Use"}/>
          <div className={"legal-text legal-text-page"}>
            <div className={"legal-text-page__section"}>
              <div>
                <h3>GRASSHOPPHER Terms of Use</h3>
                <h3>Last Updated: November 31, 2021</h3>
              </div>
              <div>Welcome to GrasshoppHer! These “Terms of Use” are a legal contract between Grasshoppher, Inc., a
                Delaware corporation (“GrasshoppHer”, “us”, “we” or “our”) and you (referred to as “you, “your” or
                “user”), as a user of GrasshoppHer’s social networking website and application (together, the
                “Application”). Please let us know if you have any questions about this agreement or its terms.
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700, textDecoration: "underline"}}>OUR VALUES AT GRASSHOPPHER</div>
              <div>Our mission is to connect young women with mentors. To that end, we have put together these terms
                that
                we feel best reflect our values and guiding principles. The current laws and the nature of our business
                require that we protect you and us from liability and clearly lay out the terms of our agreement and
                relationship. These Terms of Use and our related policies are an important part of using the
                Application.
                If you would like to use the Application and access the valuable content and community that it provides,
                you must completely agree to these Terms of Use.
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700, textDecoration: "underline"}}>PRELIMINARY LEGAL TERMS.</div>
              <div><span style={{fontWeight: 700}}>Entire Agreement; Modification.</span>
                The entire agreement between GrasshoppHer and you is made up of these Terms of Use, GrasshoppHer’s
                Privacy
                Policy (available at http://grasshoppher.com/privacy-policy/), and any other terms or policies
                accompanying our Application (collectively, the “Agreement”), superseding any prior agreements between
                you
                and GrasshoppHer (including, but not limited to, any prior versions of the Agreement) and any prior
                representations by GrasshoppHer. Neither the course of conduct between the parties nor trade practices
                shall act to modify this Agreement. We may change the terms of this Agreement at any time and without
                your
                consent by updating this page. Please visit this Agreement regularly to read the current version. Your
                continued use of our Application constitutes your acceptance of those changes. If we make any
                significant
                changes to this Agreement we will notify you by email. You agree to our use of electronic communications
                with you for purposes of this Agreement. If you do not accept the modifications to the Agreement, your
                sole remedy is not to use, or to cease use of, the Application. This Agreement was published on the date
                “Last Updated” above.
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div><span style={{fontWeight: 700}}>Age Restrictions.</span></div>
              <OrderedList list={ageRestrictions}/>
            </div>
            <div><span style={{fontWeight: 700}}>“Signing” of Agreement.</span> You “sign” and accept this Agreement
              by (a) creating an account in order to enter the site or (b) clicking “Agree” at the bottom of this
              Agreement.
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700, textDecoration: "underline"}}>APPLICATION FUNCTIONALITY; ACCESS.</div>
              <OrderedList list={application}/>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>Creation of Your Account; Account Rights.</div>
              <OrderedList list={accountRights}/>
            </div>
            <div>The Application offers specific functionality that may be subject to regulation under applicable laws,
              ordinances, rules or regulations (“Applicable Laws”). Before you create an account, you should ensure your
              use of the Application complies with Applicable Laws.
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>Your Use.</div>
              <OrderedList list={yourUse}/>
            </div>
            <div><span style={{fontWeight: 700}}>Suspension of Access.</span> Use of the Application is a privilege
              and not a right. GrasshoppHer may suspend, deactivate, limit or disable access to your account and the
              Application, as set forth in Section 9.
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>Content & Your Use.</div>
              <div>You are solely responsible for the use of your account, how you use the Application and your
                interactions with third parties through your use of the Application. In the event you use the
                Application
                to access other third party applications, services or websites, you remain subject to the terms of such
                application, service or website. As GrasshoppHer does not control the content, privacy policies, or
                practices of any third party applications, services or websites, we encourage you to read (and you must
                comply with) such application, service or website’s terms and policies. GrasshoppHer is not responsible
                for your use or misuse of any third party applications, services or websites. You understand and agree
                that GrasshoppHer may, but is not obligated to, review and delete (without notice) any information or
                content that GrasshoppHer in its sole discretion determines violates this Agreement, violates the rights
                of another person or entity, or which might be offensive, illegal or threaten the safety of others.
              </div>
            </div>
            <div>The Data will be stored using a third party web hosting service and this license is subject to
              agreements we have with such third party web hosting service.
            </div>
            <div className={"legal-text-page__section"}>
              <div>With respect to your use of the Application, you represent, warrant and covenant that it:</div>
              <OrderedList list={useApplication}/>
            </div>
            <div>If you take any of the above actions or breach any of the above restrictions in contravention of any
              representation, warranty or covenant you made, we can immediately terminate or suspend your use of the
              Application in our sole discretion, among other courses of action.
            </div>
            <OrderedList list={youAgree}/>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>License to Use Your Content; Release.</div>
              <OrderedList list={userLicense}/>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700, textDecoration: "underline"}}>RIGHTS TO APPLICATION.</div>
              <div><span style={{fontWeight: 700}}>No License to Use Content Provided by Other Users.</span> Unless
                expressly authorized by us in writing, you are not granted permission to copy, frame, embed, or
                otherwise
                disseminate aggregated or specific content that GrasshoppHer provides to you or that you obtain through
                use of the Application.
              </div>
              <div><span style={{fontWeight: 700}}>GrasshoppHer Intellectual Property.</span> GrasshoppHer and/or its
                licensors retain ownership of all intellectual property rights relating to GrasshoppHer, the
                Application,
                GrasshoppHer’s trademarks and copyrights, and any Application-related software, data, text, images,
                graphics, logos, user interface, and videos displayed through the Application. You are authorized to use
                GrasshoppHer materials only as expressly authorized at the point of interacting with of such materials.
                GrasshoppHer retains ownership of its trademarks, copyrights, trade secrets and other protected
                intellectual property, as do all users. Nothing in this Agreement transfers ownership of such rights.
              </div>
              <div><span style={{fontWeight: 700}}>Integrity of the Application.</span>You agree not to take any action
                to: (a) harm the Application, GrasshoppHer or other users through use of the Application; (b) interfere
                with the Application’s operation; (c) circumvent, disable or otherwise interfere with security-related
                features or digital rights management functions of the Application; (d) access or copy the Application’s
                underlying technology; or (e) hack, reverse engineer, or disable any technology within or used by the
                Application.
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700, textDecoration: "underline"}}>NO WARRANTY; LIMITATION OF LIABILITY;
                INDEMNIFICATION.
              </div>
              <div><span style={{fontWeight: 700}}>ASSUMPTION OF RISK.</span> You assume all risks when using the
                Application, including but not limited to all of the risks associated with any online or offline
                interactions with other users. Meeting online and in-person, offline, comes with inherent risks. If you
                choose to meet another user, please take the same common sense precautions online as you would offline.
              </div>
            </div>
            <div className={"legal-text-page__section"}>
              <div>When meeting someone for the first time, please remember to:</div>
              <ul>
                <li>Insist on a public meeting place like a cafe, bank, or shopping center.</li>
                <li>Do not meet in a secluded place, or invite strangers into your home.</li>
                <li>Tell a friend or family member where you're going, when you are going, and who you are meeting with.
                </li>
                <li>Take your cell phone along if you have one.</li>
                <li>Consider having a friend accompany you.</li>
                <li>Trust your instincts.</li>
              </ul>
            </div>
            <div className={"legal-text-page__section"}>
              <div>If you choose to meet another user in-person, you acknowledge and understand the following:</div>
              <ul>
                <li>We do not recommend, nor do we endorse, any in person meetings between users of our Application that
                  are illegal in nature or encourage or promote illegal activities;
                </li>
                <li>Participation in person meetings includes possible exposure to inherent risks, including but not
                  limited those which may be related to illness from infectious diseases such as COVID-19. While
                  particular rules and personal discipline may reduce this risk, the risk of serious illness and death
                  does exist; and
                </li>
                <li>I hereby knowingly assume the risk of injury, harm, damage, and loss associated with any in-person
                  meeting arranged using the Application, including any injury, harm, damage and loss caused by the
                  negligence, fault or conduct of any kind on the part of GrasshoppHer, Inc.
                </li>
              </ul>
            </div>

            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>NO WARRANTY.</div>
              <OrderedList list={noWarranty}/>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>Limitation of Liability for Damages.</div>
              <OrderedList list={damageLimitations}/>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>Indemnification; Cooperation.</div>
              <OrderedList list={indemnification}/>
            </div>
            <div className={"legal-text-page__section"}>
              <div style={{fontWeight: 700}}>Termination of Access; Termination of Agreement.</div>
              <OrderedList list={endAgreement}/>
            </div>
            <div style={{fontWeight: 700, textDecoration: "underline"}}>GENERAL LEGAL TERMS.</div>
            <div><span style={{fontWeight: 700}}>The Application is Delivered from Ann Arbor, Michigan.</span></div>
            <div className={"legal-text-page__section"}>
              <div><span style={{fontWeight: 700}}>Force Majeure.</span> Except for the obligation to pay monies due
                and owing, neither party shall be liable for any delay or failure in performance due to events outside
                the
                party’s reasonable control, including third party service failures, distributed denial of service (DDoS)
                attacks, acts of God, bandwidth interruptions, general network outages, earthquake, labor disputes,
                shortages of supplies, riots, war, fire, epidemics, or delays of common carriers. The obligations and
                rights of the excused party shall be extended on a day to day basis for the time period equal to the
                period of the excusable delay. The party affected by an excusable delay shall notify the other party as
                soon as possible, but in no event less than ten (10) days from the beginning of the event.
              </div>
              <div><span style={{fontWeight: 700}}>No Implied Waiver.</span> No waiver by GrasshoppHer shall be
                implied. Any waiver of any term of this Agreement must be in writing and signed by an officer of
                GrasshoppHer. The failure of GrasshoppHer to exercise or enforce any right or provision of this
                Agreement
                shall not constitute a waiver of such right or provision
              </div>
              <div>If any portion of this Agreement is found to be unenforceable, such portion will be modified to
                reflect
                the parties’ intention and only to the extent necessary to make it enforceable. The remaining provisions
                of this Agreement will remain in full force and effect.
              </div>

              <div><span style={{fontWeight: 700}}>Severability.</span> If any portion of this Agreement is found to be
                unenforceable, such portion will be modified to reflect the parties’ intention and only to the extent
                necessary to make it enforceable. The remaining provisions of this Agreement will remain in full force
                and
                effect
              </div>
              <div><span style={{fontWeight: 700}}>Statute of Limitations.</span> Any litigation or other dispute
                resolution arising out of or related to this Agreement must be commenced within one (1) years after the
                date of the event giving rise to the claim. Otherwise, such causes of actions are permanently barred.
              </div>

              <div><span style={{fontWeight: 700}}>International Considerations.</span> GrasshoppHer makes no
                representations that the Application is appropriate or available for use in locations other than the
                United States and the Application should be used only in the United States. Those who access or use the
                Application from outside the U.S. do so at their own volition and are responsible for compliance with
                applicable laws.
              </div>

              <div><span style={{fontWeight: 700}}>Assignment</span> GrasshoppHer may assign, subcontract, delegate,
                and transfer its rights and obligations under this Agreement to a third party. You are prohibited from
                transferring a device or any credentials that would allow anyone else to access your instance of the
                Application.
              </div>
              <div><span style={{fontWeight: 700}}>Notice</span> The Application is offered by GrasshoppHer, Inc., with
                an address of 16192 Coastal Highway, Lewes, Delaware 19958 USA and email: hello@grasshoppher.com.
                GrasshoppHer may provide you with notices, including those regarding changes to GrasshoppHer’s Terms of
                Use, by email, first class mail, or posting within the Application. Notice is deemed given upon the
                earlier of (i) actual receipt, (ii) twenty-four (24) hours after an email is sent, (iii) three (3) days
                after first class mail is deposited with the U.S. Postal Application, or (iv) thirty (30) days after a
                notice is posted within the Application.
              </div>

              <div><span style={{fontWeight: 700}}>Choice of Law, Jurisdiction, and Venue</span> The validity,
                interpretation, and performance under this Agreement shall be controlled by and construed under the laws
                of the State of Michigan, United States of America, as if performed wholly within the state and without
                giving effect to the principles of conflicts of law. You agree that jurisdiction and venue for are
                exclusive in the Washtenaw County Circuit Court in Washtenaw County or the U.S. District Court for the
                Wastern District of Michigan. The parties specifically disclaim the UN Convention on Contracts for the
                International Sale of Goods.
              </div>
            </div>

            <div style={{fontWeight: 700}}>WAIVER OF CLASS ACTIONS AND CLASS ARBITRATIONS. YOU AND GRASSHOPPHER AGREE
              THAT EACH PARTY MAY BRING DISPUTES AGAINST THE OTHER PARTY ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A
              PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING, INCLUDING WITHOUT
              LIMITATION FEDERAL OR STATE CLASS ACTIONS, or CLASS ARBITRATIONS. ACCORDINGLY, UNDER THE ARBITRATION
              PROCEDURES OUTLINED IN THIS SECTION, AN ARBITRATOR SHALL NOT COMBINE OR CONSOLIDATE MORE THAN ONE PARTY’S
              CLAIMS WITHOUT THE WRITTEN CONSENT OF ALL AFFECTED PARTIES TO AN ARBITRATION PROCEEDING.
            </div>
            <div className={"legal-text-page__section"}>
              <div><span style={{fontWeight: 700}}>Nature of Agreement.</span> No agency, partnership, joint venture,
                employee-employer or franchiser-franchisee relationship or other relationship between the parties or any
                of their affiliates is intended or created by this Agreement. This Agreement does not create any right
                that may be enforced by a third party and neither party shall have the right, power, or authority under
                this Agreement to create any duty or obligation on behalf of the other party.
              </div>
              <div><span style={{fontWeight: 700}}>California Users and Residents.</span> By the terms of California
                Civil Code Section 1789.3, any and all comments, questions or concerns can be addressed and sent to us
                via
                certified mail to: Agent of GrasshoppHer, Inc. 16192 Coastal Highway, Lewes, Delaware 19958 USA.
                California users are also entitled to the following specific consumer rights notice: The Complaint
                Assistance Unit of the Division of Consumer Applications of the California Department of Consumer
                Affairs
                may be contacted in writing at 1625 North Market Blvd., Sacramento, CA.
              </div>
              <div><span style={{fontWeight: 700}}>Structure of Agreement.</span> The section titles in this Agreement
                are for convenience only and have no legal or contractual or legal effect. Unless the context otherwise
                requires, (i) references to any party to this Agreement include references to such party’s successors
                and
                permitted assigns, (ii) references to “person” include references to any individual, corporation,
                limited
                liability company, partnership, company, firm, association, joint venture, trust, governmental body, or
                other entity, (iii) any of the terms defined herein may be used in the singular or the plural depending
                on
                the reference, (iv) a masculine, feminine, or neuter pronoun includes the other genders as appropriate
                in
                the context, and (v) the term “including” means “including without limitation” unless otherwise
                expressly
                indicated in a given instance.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
