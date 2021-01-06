import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import {SnackbarAlert} from "../components/SnackbarAlert";
import {PageTitle} from "../components/PageTitle";
import {ContactImage} from "../components/ContactImage";
import FadeIn from "../components/FadeIn/FadeIn";
import {Loader} from "../components/Loader/Loader";


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedContact: false,
      loadingPage: false,
      snackBarOpened: false,
      validation: false,
      requestError: false,
    };
  }
  contactRef = React.createRef();

  componentDidMount() {
    this.setState({loadedContact: true, loadingPage: true});
  }

  onSubmit = async (body) => {
    this.setState({ loadedContact: true });
    const url = `/api/sendEmail`;
    try {
      await fetch(url, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      this.setState({ snackBarOpened: true });
      this.contactRef.current.clearState();
    } catch (e) {
      this.setState({ loadedContact: false, requestError: true });
    }
  };

  handleClose = () => {
    this.setState({ snackBarOpened: false });
  };

  validate = (e) => {
    this.setState({ validation: e, snackBarOpened: true });
  };

  render() {

    return (
      <Layout title={"Contact GrasshoppHer"}>
        {!this.state.loadingPage && <Loader/>}
        <FadeIn>
          <PageTitle content={"Contact GrasshoppHer"} id={"general"}/>
          <div className={"container row middle-xs between-md row-revert-mobile contact--row"}>
            <div className={"col-xs-12 col-md-6 col-xl-5"} style={{ width: "100%"}}>
              <ContactForm
                ref={this.contactRef}
                loading={this.state.loadedContact}
                onSubmit={this.onSubmit}
                validation={this.validate}
              />
            </div>
            <ContactImage/>
          </div>
        </FadeIn>
        <SnackbarAlert
          snackBarOpened={this.state.snackBarOpened}
          requestError={this.state.requestError}
          onCloseSnackBar={this.handleClose}
        />
      </Layout>
    );
  }
}