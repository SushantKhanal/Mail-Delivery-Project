import { useEffect, useState } from "react";
import { STATE_NAMES } from "../../constants/stateNames.js";

export default function DijkstrasPath() {
  const [stateNames, setStateNames] = useState();
  useEffect(() => {
    setStateNames(STATE_NAMES);
  }, []);
  return (
    <div>
      <p style={{ fontSize: 16 }}>
        Pick start and end states to find the shortest path
      </p>
    </div>
  );
}
