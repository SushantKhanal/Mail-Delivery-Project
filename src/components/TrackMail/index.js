import * as React from "react";
import Typography from "@mui/material/Typography";
import SearchBar from "../SearchBar";

import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function TrackMail(props) {
  const [trackingNumber, setTrackingNumber] = React.useState("");

  //READ
  const fetchMailDetails = async (trackingNumber) => {
    const qry = query(
      collection(db, "deliveryInfo"),
      where("trackingNumber", "==", +trackingNumber)
    );
    let data = await getDocs(qry);
    data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    alert(JSON.stringify(data[0]));
    setTrackingNumber("");
  };

  return (
    <div>
      <Typography paragraph>Track your mail with tracking number.</Typography>
      <SearchBar
        value={trackingNumber}
        onChangeValue={(newValue) => setTrackingNumber(newValue)}
        onRequestSearch={() => fetchMailDetails(trackingNumber)}
      />
    </div>
  );
}
