



// // Stringify the JSON data with added quotes to the keys
// const jsonString = JSON.stringify(jsonData, null, 2); // null and 2 are for indentation

// console.log(jsonString);
const jsonData = {
  
    nodes: [
      {
        id: "TVF-D1002-AMS-001",
        isLeaf: false,

      },
      {
        id: "TVF-C9102-AMS-002",
        isLeaf: true,

      },
      {
        id: "TVF-C9102-AMS-001",
        isLeaf: true,

      },
      {
        id: "TVF-D1002-AMS-002",
        isLeaf: false,

      },
      {
        id: "TVF-C9102-AMS-003",
        isLeaf: true,
      },
      {
        id: "TVF-C9102-AMS-004",
        isLeaf: true,
     
      },
      {
        id: "TVF-CSR1000-AMS-001",
        isLeaf: false,

      },
      {
        id: "TVF-CSR1000-AMS-002",
        isLeaf: false,

      },
      {
        id: "TVF-D1001-AMS-005",
        isLeaf: false,
 
      },
      {
        id: "TVF-C9006-AH-001",
        isLeaf: true,

      },
      {
        id: "TVF-CCRS1-AMS-200",
        isLeaf: true,

      },
      {
        id: "ams-dc0001-gr101",
        isLeaf: true,

      },
      {
        id: "TVF-D1002-AMS-005",
        isLeaf: true,

      },
      {
        id: "TVF-C9001-MT-001",
        isLeaf: true,

      },
      {
        id: "TVF-C9001-AMS-002",
        isLeaf: true,

      }
    ],
    edges : [
    
      {
        id: "edge-TVF-D1002-AMS-001-TVF-C9102-AMS-002",
        source: "TVF-D1002-AMS-001",
        target: "TVF-C9102-AMS-002",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-D1002-AMS-001-TVF-C9102-AMS-001",
        source: "TVF-D1002-AMS-001",
        target: "TVF-C9102-AMS-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-D1002-AMS-002-TVF-C9102-AMS-003",
        source: "TVF-D1002-AMS-002",
        target: "TVF-C9102-AMS-003",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-D1002-AMS-002-TVF-C9102-AMS-004",
        source: "TVF-D1002-AMS-002",
        target: "TVF-C9102-AMS-004",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-CSR1000-AMS-001-TVF-C9102-AMS-002",
        source: "TVF-CSR1000-AMS-001",
        target: "TVF-C9102-AMS-002",
        label: ["16777214"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-CSR1000-AMS-001-TVF-C9102-AMS-001",
        source: "TVF-CSR1000-AMS-001",
        target: "TVF-C9102-AMS-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-CSR1000-AMS-002-TVF-C9102-AMS-003",
        source: "TVF-CSR1000-AMS-002",
        target: "TVF-C9102-AMS-003",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-CSR1000-AMS-002-TVF-C9102-AMS-004",
        source: "TVF-CSR1000-AMS-002",
        target: "TVF-C9102-AMS-004",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-D1001-AMS-005-TVF-C9102-AMS-002",
        source: "TVF-D1001-AMS-005",
        target: "TVF-C9102-AMS-002",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-D1001-AMS-005-TVF-C9102-AMS-001",
        source: "TVF-D1001-AMS-005",
        target: "TVF-C9102-AMS-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-C9006-AH-001",
        source: "TVF-C9102-AMS-002",
        target: "TVF-C9006-AH-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-CCRS1-AMS-200",
        source: "TVF-C9102-AMS-002",
        target: "TVF-CCRS1-AMS-200",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-ams-dc0001-gr101",
        source: "TVF-C9102-AMS-002",
        target: "ams-dc0001-gr101",
        label: ["1000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-D1002-AMS-005",
        source: "TVF-C9102-AMS-002",
        target: "TVF-D1002-AMS-005",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-C9102-AMS-001",
        source: "TVF-C9102-AMS-002",
        target: "TVF-C9102-AMS-001",
        label: ["1000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-C9001-MT-001",
        source: "TVF-C9102-AMS-002",
        target: "TVF-C9001-MT-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-C9001-AMS-002",
        source: "TVF-C9102-AMS-002",
        target: "TVF-C9001-AMS-002",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-002-TVF-C9006-AMS-001",
        source: "TVF-C9102-AMS-002",
        target: "TVF-C9006-AMS-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-003-TVF-C9102-AMS-004",
        source: "TVF-C9102-AMS-003",
        target: "TVF-C9102-AMS-004",
        label: ["1000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-003-TVF-D1006-AMS-004",
        source: "TVF-C9102-AMS-003",
        target: "TVF-D1006-AMS-004",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-003-TVF-C9901-AMS-001",
        source: "TVF-C9102-AMS-003",
        target: "TVF-C9901-AMS-001",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-003-TVF-CCRS1-UT-200",
        source: "TVF-C9102-AMS-003",
        target: "TVF-CCRS1-UT-200",
        label: ["2000"],
        edgeId: "1",
        type: "quadratic",
    },
    {
        id: "edge-TVF-C9102-AMS-003-ams-dc0001-gr101",
        source: "TVF-C9102-AMS-003",
        target: "ams-dc0001-gr101",
        label: ["1000"],
        edgeId: "1",
        type: "quadratic",
    }
  ]
  };

  function assignRegions(jsonData) {
    const connections = {};
  
    // Count occurrences of each node as a source or target
    jsonData.edges.forEach(edge => {
      connections[edge.source] = (connections[edge.source] || 0) + 1;
      connections[edge.target] = (connections[edge.target] || 0) + 1;
    });
  
    // Create an array to store nodes grouped by their immediate connection count
    const nodesByConnectionCount = Array.from({ length: 11 }, () => []);
  
    // Group nodes by their immediate connection count
    Object.entries(connections).forEach(([node, count]) => {
      nodesByConnectionCount[count - 1].push(node);
    });
  
    // Assign regions based on the count of immediate connections
    const regions = {};
    let clusterIndex = 1;
    nodesByConnectionCount.forEach((nodes, count) => {
      const region = `Cluster${clusterIndex++}`;
      nodes.forEach(node => {
        regions[node] = region;
      });
    });
  
    // Assign regions to nodes
    jsonData.nodes.forEach(node => {
      if (regions[node.id]) {
        node.region = regions[node.id];
      } else {
        node.region = "Unknown";
      }
    });
  
    return jsonData.nodes;
  }
  
  const nodesWithRegions = assignRegions(jsonData);
  console.log(nodesWithRegions);
  