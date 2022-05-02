import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Scanner from "../Scanner";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function SendMail(props) {
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="senderZip"
            label="Sender Zip Code"
            fullWidth
            variant="standard"
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="ReceiverZip"
            label="Receiver Zip Code"
            fullWidth
            variant="standard"
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
          onClick={() => {}}
          style={{ width: "30%", marginTop: "20px" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
