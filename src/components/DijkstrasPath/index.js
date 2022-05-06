import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { STATE_NAMES } from "../../constants/stateNames.js";
import { getPathWithDijkstras } from "../../services/djkstras";

export default function DijkstrasPath() {
  const [stateNames, setStateNames] = useState();
  const [fromState, setFromState] = useState("");
  const [toState, setToState] = useState("");

  useEffect(() => {
    const states = [];
    for (let stateShortcut in STATE_NAMES) {
      states.push([stateShortcut, STATE_NAMES[stateShortcut]]);
    }
    setStateNames(states);
  }, []);

  const findPath = () => {
    if (!fromState || !toState) {
      alert("Fields cannot be empty!");
      return;
    }
    const path = getPathWithDijkstras(fromState, toState);
    path.path = path.path.map((stateShortcut) => STATE_NAMES[stateShortcut]);
    let string = "";
    for (let i = 1; i <= path.path.length; i++) {
      string += i + "st stop is " + path.path[i - 1] + ". \n";
    }
    alert(string);
  };

  return (
    <div>
      <p style={{ fontSize: 16 }}>
        Pick start and end states to find the shortest path
      </p>
      {stateNames && (
        <>
          <div style={{ display: "flex" }}>
            <FormControl fullWidth style={{ marginBottom: 20 }}>
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fromState}
                label="From"
                onChange={(event) => {
                  setFromState(event.target.value);
                }}
                style={{ width: "80%" }}
              >
                {stateNames.map((state, index) => {
                  return (
                    <MenuItem key={index} value={state[0]}>
                      {state[1]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toState}
                label="To"
                onChange={(event) => {
                  setToState(event.target.value);
                }}
                style={{ width: "80%" }}
              >
                {stateNames.map((state, index) => {
                  return (
                    <MenuItem key={index} value={state[0]}>
                      {state[1]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(event) => findPath(event.target.value)}
            style={{ width: "30%", marginTop: "20px" }}
          >
            Find Path
          </Button>
        </>
      )}
    </div>
  );
}
