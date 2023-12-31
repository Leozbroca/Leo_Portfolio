import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import GlobalStateContext from "../../context/GlobalContextState";
import { useContext } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

export default function Toast() {
    const { toasty, setToasty } =
    useContext(GlobalStateContext);
  const vertical = 'top'
  const horizontal = 'center'


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToasty(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={toasty}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Email sent!
          Leozbroca will contact you as soon as possible.
        </Alert>
      </Snackbar>
    </Stack>
  );
}