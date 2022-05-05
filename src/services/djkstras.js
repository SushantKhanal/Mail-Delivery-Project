const graph = {
  AL: {
    FL: 1,
    GA: 1,
    MS: 1,
    TN: 1,
  },
  AR: {
    LA: 1,
    MO: 1,
    MS: 1,
    OK: 1,
    TN: 1,
    TX: 1,
  },
  AZ: {
    CA: 1,
    NM: 1,
    NV: 1,
    UT: 1,
  },
  CA: {
    NV: 1,
    OR: 1,
    AZ: 1,
  },
  CO: {
    KS: 1,
    NE: 1,
    NM: 1,
    OK: 1,
    UT: 1,
    WY: 1,
  },
  CT: {
    MA: 1,
    NY: 1,
    RI: 1,
  },
  DC: {
    MD: 1,
    VA: 1,
  },
  DE: {
    MD: 1,
    NJ: 1,
    PA: 1,
  },
  FL: {
    GA: 1,
    AL: 1,
  },
  GA: {
    NC: 1,
    SC: 1,
    TN: 1,
    AL: 1,
    FL: 1,
  },
  IA: {
    IL: 1,
    MN: 1,
    MO: 1,
    NE: 1,
    SD: 1,
    WI: 1,
  },
  ID: {
    MT: 1,
    NV: 1,
    OR: 1,
    UT: 1,
    WA: 1,
    WY: 1,
  },
  IL: {
    IN: 1,
    KY: 1,
    MO: 1,
    WI: 1,
    IA: 1,
  },
  IN: {
    KY: 1,
    MI: 1,
    OH: 1,
    IL: 1,
  },
  KS: {
    MO: 1,
    NE: 1,
    OK: 1,
    CO: 1,
  },
  KY: {
    MO: 1,
    OH: 1,
    TN: 1,
    VA: 1,
    WV: 1,
    IL: 1,
    IN: 1,
  },
  LA: {
    MS: 1,
    TX: 1,
    AR: 1,
  },
  MA: {
    NH: 1,
    NY: 1,
    RI: 1,
    VT: 1,
    CT: 1,
  },
  MD: {
    PA: 1,
    VA: 1,
    WV: 1,
    DC: 1,
    DE: 1,
  },
  ME: {
    NH: 1,
  },
  MI: {
    OH: 1,
    WI: 1,
    IN: 1,
  },
  MN: {
    ND: 1,
    SD: 1,
    WI: 1,
    IA: 1,
  },
  MO: {
    NE: 1,
    OK: 1,
    TN: 1,
    AR: 1,
    IA: 1,
    IL: 1,
    KS: 1,
    KY: 1,
  },
  MS: {
    TN: 1,
    AL: 1,
    AR: 1,
    LA: 1,
  },
  MT: {
    ND: 1,
    SD: 1,
    WY: 1,
    ID: 1,
  },
  NC: {
    SC: 1,
    TN: 1,
    VA: 1,
    GA: 1,
  },
  ND: {
    SD: 1,
    MN: 1,
    MT: 1,
  },
  NE: {
    SD: 1,
    WY: 1,
    CO: 1,
    IA: 1,
    KS: 1,
    MO: 1,
  },
  NH: {
    VT: 1,
    MA: 1,
    ME: 1,
  },
  NJ: {
    NY: 1,
    PA: 1,
    DE: 1,
  },
  NM: {
    OK: 1,
    TX: 1,
    AZ: 1,
    CO: 1,
  },
  NV: {
    OR: 1,
    UT: 1,
    AZ: 1,
    CA: 1,
    ID: 1,
  },
  NY: {
    PA: 1,
    VT: 1,
    CT: 1,
    MA: 1,
    NJ: 1,
  },
  OH: {
    PA: 1,
    WV: 1,
    IN: 1,
    KY: 1,
    MI: 1,
  },
  OK: {
    TX: 1,
    AR: 1,
    CO: 1,
    KS: 1,
    MO: 1,
    NM: 1,
  },
  OR: {
    WA: 1,
    CA: 1,
    ID: 1,
    NV: 1,
  },
  PA: {
    WV: 1,
    DE: 1,
    MD: 1,
    NJ: 1,
    NY: 1,
    OH: 1,
  },
  RI: {
    CT: 1,
    MA: 1,
  },
  SC: {
    NC: 1,
    GA: 1,
  },
  SD: {
    WY: 1,
    IA: 1,
    MN: 1,
    MT: 1,
    ND: 1,
    NE: 1,
  },
  TN: {
    VA: 1,
    AL: 1,
    AR: 1,
    GA: 1,
    KY: 1,
    MO: 1,
    MS: 1,
    NC: 1,
  },
  TX: {
    OK: 1,
    NM: 1,
    AR: 1,
    LA: 1,
  },
  UT: {
    WY: 1,
    AZ: 1,
    CO: 1,
    ID: 1,
    NV: 1,
  },
  VA: {
    WV: 1,
    DC: 1,
    KY: 1,
    MD: 1,
    NC: 1,
    TN: 1,
  },
  VT: {
    NY: 1,
    MA: 1,
    NH: 1,
  },
  WA: {
    OR: 1,
    ID: 1,
  },
  WI: {
    IA: 1,
    IL: 1,
    MI: 1,
    MN: 1,
  },
  WV: {
    VA: 1,
    KY: 1,
    MD: 1,
    OH: 1,
    PA: 1,
  },
  WY: {
    CO: 1,
    ID: 1,
    MT: 1,
    NE: 1,
    SD: 1,
    UT: 1,
  },
};

const getNodeWithShortestDist = (distances, visitedNodes) => {
  let smallest = null;
  for (let node in distances) {
    let isSmallest = !smallest || distances[node] < distances[smallest];
    if (isSmallest && !visitedNodes.includes(node)) {
      smallest = node;
    }
  }
  return smallest;
};

export const getPathWithDijkstras = (entryNode, exitNode) => {
  let distancesObj = {};
  distancesObj[exitNode] = Infinity;
  distancesObj = Object.assign(distancesObj, graph[entryNode]);
  let parentsObject = { exitNode: null };
  for (let child in graph[entryNode]) {
    parentsObject[child] = entryNode;
  }
  let visitedNodes = [];
  let node = getNodeWithShortestDist(distancesObj, visitedNodes);
  while (node) {
    let distance = distancesObj[node];
    for (let child in graph[node]) {
      if (String(child) !== String(entryNode)) {
        let newdistance = distance + graph[node][child];
        if (!distancesObj[child] || distancesObj[child] > newdistance) {
          distancesObj[child] = newdistance;
          parentsObject[child] = node;
        }
      }
    }
    visitedNodes.push(node);
    node = getNodeWithShortestDist(distancesObj, visitedNodes);
  }
  let shortestPath = [exitNode];
  let parent = parentsObject[exitNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parentsObject[parent];
  }
  shortestPath.reverse();
  let results = {
    distance: distancesObj[exitNode],
    path: shortestPath,
  };
  return results;
};

// console.log(getPathWithDijkstras("FL", "VA"));
