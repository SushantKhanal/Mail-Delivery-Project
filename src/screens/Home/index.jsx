import { useEffect, useState } from "react";
import ButtonAppBar from "../../components/ButtonAppBar";
import Emitter from "../../shared/Emitter";
import { updateLocalStorageUserData } from "../../utils/localStorageService";
import { LOGOUT_EVENT } from "../../constants";

export default function Home(props) {
  const onLogOutSuccess = (res) => {
    updateLocalStorageUserData(null, false);
    Emitter.emit(LOGOUT_EVENT, null);
  };

  return (
    <div>
      <ButtonAppBar
        onLogOutSuccess={() => {
          onLogOutSuccess({});
        }}
      />
      <h1>This is Home!</h1>
    </div>
  );
}
