import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Scanner from "../Scanner";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SendMail(props) {
  let [senderAddress, setSenderAddress] = useState("");
  let [senderZip, setSenderZip] = useState("");
  let [receiverAddress, setReceiverAddress] = useState("");
  let [receiverZip, setReceiverZip] = useState("");

  // const onSubmit = React.useCallback(() => {
  // }, [senderAddress, senderZip, receiverAddress, receiverZip]);

  const onSubmit = () => {
    console.log(senderAddress, senderZip, receiverAddress, receiverZip);
    alert("Mail Info Submitted Successfully!");
  };

  return (
    <div>
      <Grid container spacing={3} marginBottom={10}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="senderAddress"
            label="Sender Address"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(event) => {
              setSenderAddress(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="senderZip"
            label="Sender Zip Code"
            fullWidth
            variant="standard"
            onChange={(event) => setSenderZip(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="receiverAddress"
            label="Receiver Address"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(event) => setReceiverAddress(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="ReceiverZip"
            label="Receiver Zip Code"
            fullWidth
            variant="standard"
            onChange={(event) => setReceiverZip(event.target.value)}
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          OR Scan barcode
        </Typography>
        <Scanner />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => onSubmit()}
          style={{ width: "30%", marginTop: "20px" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
