import React from "react";
import {Layout} from "../components/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import {SnackbarAlert} from "../components/SnackbarAlert";
import {PageTitle} from "../components/PageTitle";
import {ContactImage} from "../components/ContactImage";
import FadeInIntro from "../components/FadeInIntro/FadeInIntro";
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
    console.log(body);
    this.setState({ loadedContact: true });
    const url = "#";
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
        <FadeInIntro>
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
        </FadeInIntro>
        <SnackbarAlert
          snackBarOpened={this.state.snackBarOpened}
          validation={this.state.validation}
          requestError={this.state.requestError}
          onCloseSnackBar={this.handleClose}
        />
      </Layout>
    );
  }
}