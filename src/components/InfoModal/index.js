import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InfoModal({ trackedInfo }) {
  const [closeModal, setCloseModal] = React.useState(true);

  useEffect(() => {
    if (trackedInfo !== "") {
      setCloseModal(false);
    }
  }, [trackedInfo]);

  return (
    <Modal
      open={!closeModal}
      onClose={() => setCloseModal(true)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Tracking Info</b>
          </Typography>
          <div
            onClick={() => setCloseModal(true)}
            style={{ cursor: "pointer" }}
          >
            X
          </div>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>Current Address</b>: {trackedInfo.currentAddress}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>Receiver Name</b>: {trackedInfo.receiverName}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>Sender Address</b>: {trackedInfo.senderAddress}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>Sender Name</b>: {trackedInfo.senderName}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>Delivery Status</b>: {trackedInfo.deliveryStatus}
        </Typography>
      </Box>
    </Modal>
  );
}
