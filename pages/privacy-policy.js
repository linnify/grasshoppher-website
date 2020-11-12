import React from "react";
import {Layout} from "../components/Layout";
import {OrderedList} from "../components/OrderedList";
import {policy} from "../constants/privacyPolicy";


export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Layout title={"Privacy Policy"}>
        <div className={"container container-padding legal-text"}>
          <div className={"page-title"}>Privacy Policy</div>
          <div className={"legal-text"}>GrassoppHer Privacy Policy</div>
          <OrderedList list={policy}/>
          <div>GrasshoppHer, </div>
          <div>Inc. 16192 Coastal Highway </div>
          <div>Lewes, Delaware 19958 USA</div>
          <div className={"table-alignment-policy"} style={{paddingTop: "40px"}}>Attn: <span>CEO</span></div>
          <div className={"table-alignment-policy"}>Email: <span>hello@grasshoppher.com</span></div>
        </div>
      </Layout>
    );
  }
}