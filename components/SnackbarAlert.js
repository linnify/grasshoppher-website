import React from "react";
import Alert from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";

export const SnackbarAlert = ({
                                snackBarOpened,
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

  return (
    <Snackbar
      open={snackBarOpened}
      onClose={onCloseSnackBar}
      autoHideDuration={3000}
    >
      { requestError ? error() :  success() }
    </Snackbar>
  );
};
