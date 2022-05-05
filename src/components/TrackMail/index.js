import * as React from "react";
import Typography from "@mui/material/Typography";
import SearchBar from "../SearchBar";
import InfoModal from "../InfoModal";
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function TrackMail(props) {
  const [trackedInfo, setTrackedInfo] = React.useState("");

  //READ
  const fetchMailDetails = async (trackingNumber) => {
    const qry = query(
      collection(db, "deliveryInfo"),
      where("trackingNumber", "==", +trackingNumber)
    );
    let data = await getDocs(qry);
    data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setTrackedInfo(data[0]);
  };

  return (
    <div>
      <InfoModal trackedInfo={trackedInfo} />
      <Typography paragraph>Track your mail with tracking number.</Typography>
      <SearchBar
        onRequestSearch={(trackingNumber) => fetchMailDetails(trackingNumber)}
      />
    </div>
  );
}
