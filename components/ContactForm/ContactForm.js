import React from "react";
import styles from "./ContactForm.module.scss"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      validEmail: "",
    };
  }

  isDisabled = () => {
    return !this.props.loading || !this.state.email;
  };

  isEmailValid = () => {
    return !(
      !this.state.email.includes("@") || !this.state.email.includes(".")
    );
  };

  clearState = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  onSubmit = () => {

    if (!this.isEmailValid()) {
      this.setState({validEmail: "invalid"});
      return this.props.validation(false);;
    }

    this.props.validation(true);
    const body = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    this.setState({validEmail: ""});
    this.props.onSubmit(body);
    this.clearState();
  };

  render() {
    return (
      <div className={styles.form}>
        <div className={styles['form__input-row']}>
          <div className={styles["form__input-item"]}>
            <div>Name</div>
            <input
              value={this.state.name}
              onChange={(name) => this.setState({name: name.target.value})}
            />
          </div>
          <div className={styles[`form__input-item`]} id={this.state.validEmail}>
            <div>E-mail</div>
            <input
              value={this.state.email}
              onChange={(email) => this.setState({email: email.target.value})}
            />
          </div>
        </div>
        <div className={styles["form__textarea"]}>
          <div>Your message</div>
          <textarea
            value={this.state.message}
            onChange={(message) => this.setState({message: message.target.value})}
          />
        </div>
        <div
          className={`button__contact ${this.isDisabled() ? "button-disabled" : ""}`}
          onClick={this.onSubmit}
        >
          Submit
        </div>
      </div>
    );
  }
}
