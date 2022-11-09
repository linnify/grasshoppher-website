import Page from "../components/Page";
import Layout from "../components/Layout";
import React from "react";
import { CheckEmail } from "../components/MembershipPortal/CheckEmail/CheckEmail";

class Collab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailVerified: false,
      virtual: false,
      message: null,
    };
  }

  componentDidMount() {
    this.setState({
      emailVerified: sessionStorage.getItem("emailVerified") === "true",
    });
    this.setState({
      virtual: sessionStorage.getItem("virtual") === "true",
    });
  }

  onCheckEmail = async (email) => {
    const url = `${process.env.NEXT_PUBLIC_HOST}/api/verify-email`;
    try {
      const response = await fetch(url, {
        body: JSON.stringify({
          email: email,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      sessionStorage.setItem("emailVerified", result.active);
      sessionStorage.setItem("virtual", result.virtual);
      this.setState({
        emailVerified: result.active,
        virtual: result.virtual,
        message: result.active
          ? null
          : "You don’t have an active GrasshoppHer Membership subscription.",
      });
    } catch (e) {
      this.setState({
        message: "An error occurred. Please try again.",
      });
    }
  };

  getContent = () => {
    if (this.state.emailVerified) {
      return (
        <div
          className={"container"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Share current project and collab opportunities
          </h2>
          <iframe
            className={"collab-form"}
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_eK2SzuWiyBkqHRa3YDBobxqIieG2dFfB4emNyn9wu-w5ZA/viewform?embedded=true"
          >
            Loading…
          </iframe>
        </div>
      );
    }
    return (
      <CheckEmail
        message={this.state.message}
        onCheckEmail={this.onCheckEmail}
      />
    );
  };
  render() {
    return (
      <Page
        title={"Share current project and collab opportunities - GrasshoppHer"}
      >
        <Layout title={"Share current project and collab opportunities"}>
          {this.getContent()}
        </Layout>
      </Page>
    );
  }
}

export default Collab;
