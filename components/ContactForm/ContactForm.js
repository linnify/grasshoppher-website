import React from "react";
import "./ContactForm.module.scss"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
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
      return this.props.validation(false);;
    }

    this.props.validation(true);
    const body = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    this.props.onSubmit(body);
    this.clearState();
  };

  render() {
    return (
      <div className={"form"}>
        <div className={"form__input-row"}>
          <div className={"form__input-item"}>
            <div>Name</div>
            <input
              className={"item"}
              value={this.state.name}
              onChange={(name) => this.setState({name: name.target.value})}
            />
          </div>
          <div className={"form__input-item"}>
            <div>E-mail</div>
            <input
              className={"item"}
              value={this.state.email}
              onChange={(email) => this.setState({email: email.target.value})}
            />
          </div>
        </div>
        <div className={"form__textarea"}>
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