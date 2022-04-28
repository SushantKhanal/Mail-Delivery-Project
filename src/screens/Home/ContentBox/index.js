import * as React from "react";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import About from "../../../components/About";
import Cart from "../../../components/Cart";
import DeletedOrders from "../../../components/DeletedOrders";
import PastOrders from "../../../components/PastOrders";
import SendMail from "../../../components/SendMail";
import TrackMail from "../../../components/TrackMail";
import {
  ABOUT,
  SEND_MAIL,
  TRACK_MAIL,
  CART,
  PAST_ORDERS,
  DELETED_ORDERS,
} from "../SideDrawer/constants";

let components = {
  [ABOUT]: <About />,
  [SEND_MAIL]: <SendMail />,
  [TRACK_MAIL]: <TrackMail />,
  [CART]: <Cart />,
  [PAST_ORDERS]: <PastOrders />,
  [DELETED_ORDERS]: <DeletedOrders />,
};

export default function ContentBox(props) {
  const getSuitableComponent = (currentDrawerTab) => {
    let component = components[currentDrawerTab];
    return component;
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
      }}
    >
      {/*     Show Content Based on what is selected in the Sidebar */}
      <Toolbar />
      <h3>{props.currentDrawerTab}</h3>
      {getSuitableComponent(props.currentDrawerTab)}
    </Box>
  );
}
