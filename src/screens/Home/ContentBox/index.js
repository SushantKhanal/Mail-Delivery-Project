import * as React from "react";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import About from "../../../components/About";
import Cart from "../../../components/Cart";
import DeletedOrders from "../../../components/DeletedOrders";
import Reports from "../../../components/Reports";
import SendMail from "../../../components/SendMail";
import TrackMail from "../../../components/TrackMail";
import {
  ABOUT,
  SEND_MAIL,
  TRACK_MAIL,
  CART,
  REPORTS,
  DELETED_ORDERS,
} from "../SideDrawer/constants";

let components = {
  [ABOUT]: <About />,
  [SEND_MAIL]: <SendMail />,
  [TRACK_MAIL]: <TrackMail />,
  [CART]: <Cart />,
  [REPORTS]: <Reports />,
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
