import { useEffect, useState } from "react";
import {
  updateLocalStorageUserData,
  getItem,
} from "./utils/localStorageService";
import { LOGOUT_EVENT } from "./constants";
import Emitter from "./shared/Emitter";
import SignIn from "./screens/authentication/SignIn";
import Home from "./screens/Home";

function App() {
  let [isLoggedIn, setLoggedIn] = useState(false);

  const changeLoggedInStateHandler = (data, state) => {
    updateLocalStorageUserData(data, state);
    setLoggedIn(state);
  };

  useEffect(() => {
    const userData = getItem("userData");
    if (userData) setLoggedIn(true);
  }, []);

  useEffect(() => {
    Emitter.on(LOGOUT_EVENT, (data) => {
      changeLoggedInStateHandler(data, false);
    });
    return () => {
      Emitter.off(LOGOUT_EVENT);
    };
  }, []);

  return (
    <div>
      {!isLoggedIn ? (
        <SignIn
          changeLoggedInStateHandler={(data) => {
            changeLoggedInStateHandler(data, true);
          }}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
