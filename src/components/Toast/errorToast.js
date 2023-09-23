import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import GlobalStateContext from "../../context/GlobalContextState";
import { useContext } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

export default function ErrToast() {
    const { errToasty, setErrToasty } =
    useContext(GlobalStateContext);
  const vertical = 'top'
  const horizontal = 'center'


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrToasty(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={errToasty}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something went wrong! Please try again.
        </Alert>
      </Snackbar>
    </Stack>
  );
}