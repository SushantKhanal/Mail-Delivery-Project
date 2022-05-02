import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Scanner from "../Scanner";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function SendMail(props) {
  let [senderName, setSenderName] = useState("");
  let [senderAddress, setSenderAddress] = useState("");
  let [senderZip, setSenderZip] = useState("");
  let [receiverName, setReceiverName] = useState("");
  let [receiverAddress, setReceiverAddress] = useState("");
  let [receiverZip, setReceiverZip] = useState("");

  const userCollectionRef = collection(db, "deliveryInfo");

  //CREATE
  const addDeliveryInfo = async (trackingNumber) => {
    await addDoc(userCollectionRef, {
      currentAddress: senderAddress,
      deliveryStatus: "PROCESSING",
      receiverAddress,
      receiverName,
      receiverZip,
      senderAddress,
      senderName,
      senderZip,
      trackingNumber,
    });
  };

  const resetState = () => {
    setSenderName("");
    setSenderAddress("");
    setSenderZip("");
    setReceiverName("");
    setReceiverAddress("");
    setReceiverZip("");
  };

  const onSubmit = async () => {
    const trackingNumber = new Date().getTime();
    addDeliveryInfo(trackingNumber).then(() => {
      alert("Success! Your tracking Number is, " + trackingNumber);
    });
    resetState();
  };

  return (
    <div>
      <Grid container spacing={3} marginBottom={10}>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="senderName"
            label="Sender Name"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={senderName}
            onChange={(event) => {
              setSenderName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="senderAddress"
            label="Sender Address"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={senderAddress}
            onChange={(event) => {
              setSenderAddress(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="senderZip"
            label="Sender Zip Code"
            fullWidth
            variant="standard"
            value={senderZip}
            onChange={(event) => setSenderZip(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="receiverName"
            label="Receiver Name"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={receiverName}
            onChange={(event) => {
              setReceiverName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="receiverAddress"
            label="Receiver Address"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={receiverAddress}
            onChange={(event) => setReceiverAddress(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="ReceiverZip"
            label="Receiver Zip Code"
            fullWidth
            variant="standard"
            value={receiverZip}
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
