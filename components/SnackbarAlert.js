import React from "react";
// import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

export const SnackbarAlert = ({
                                snackBarOpened,
                                validation,
                                requestError,
                                onCloseSnackBar,
                              }) => {
  const success = () => {
    return (
      <Alert severity="success" onClose={onCloseSnackBar}>
        Your message was sent! Thank you!
      </Alert>
    );
  };

  const error = () => {
    return (
      <Alert severity="warning" onClose={onCloseSnackBar}>
        Request error! Please try again.
      </Alert>
    );
  };

  const incorrectEmail = () => {
    return (
      <Alert severity="warning" onClose={onCloseSnackBar}>
        Invalid e-mail address!
      </Alert>
    );
  };

  return (
    <Snackbar
      open={snackBarOpened}
      autoHideDuration={3000}
      onClose={onCloseSnackBar}
    >
      {validation ? success() : requestError ? error() : incorrectEmail()}
    </Snackbar>
  );
};
