import React, { useEffect, useState, useRef } from "react";
import G6 from "@antv/g6";
import insertCss from "insert-css";
import { rawData, data } from "./rawdata.js";
// import "../style.css";
// import MainIndex from "./index";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import chroma from "chroma-js";

insertCss(`
  .g6-component-tooltip {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 5px 5px 5px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
`);

const animateCfg = { duration: 200, easing: "easeCubic" };
const menu = new G6.Menu({
  offsetX: 10,
  offsetY: 20,
  itemTypes: ["node"],
  getContent(e, graph) {
    const outDiv = document.createElement("div");
    outDiv.style.width = "180px";
    outDiv.innerHTML = `<ul>
        <li>menu01</li>
        <li>menu01</li>
        <li>menu01</li>
        <li>menu01</li>
        <li>menu01</li>
      </ul>`;
    return outDiv;
  },
  handleMenuClick(target, item, graph) {
    console.log(target, item, graph);
  },
});
const toolbar = new G6.ToolBar({
  position: { x: 1160, y: 10 },
  getContent: () => `
  <ul class='g6-component-toolbar'>
    <li  code='zoomOut'> 
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M658.432 428.736a33.216 33.216 0 0 1-33.152 33.152H525.824v99.456a33.216 33.216 0 0 1-66.304 0V461.888H360.064a33.152 33.152 0 0 1 0-66.304H459.52V296.128a33.152 33.152 0 0 1 66.304 0V395.52H625.28c18.24 0 33.152 14.848 33.152 33.152z m299.776 521.792a43.328 43.328 0 0 1-60.864-6.912l-189.248-220.992a362.368 362.368 0 0 1-215.36 70.848 364.8 364.8 0 1 1 364.8-364.736 363.072 363.072 0 0 1-86.912 235.968l192.384 224.64a43.392 43.392 0 0 1-4.8 61.184z m-465.536-223.36a298.816 298.816 0 0 0 298.432-298.432 298.816 298.816 0 0 0-298.432-298.432A298.816 298.816 0 0 0 194.24 428.8a298.816 298.816 0 0 0 298.432 298.432z"></path>
      </svg>
    </li>
    <li code='zoomIn'> 
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M639.936 416a32 32 0 0 1-32 32h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 32 32z m289.28 503.552a41.792 41.792 0 0 1-58.752-6.656l-182.656-213.248A349.76 349.76 0 0 1 480 768 352 352 0 1 1 832 416a350.4 350.4 0 0 1-83.84 227.712l185.664 216.768a41.856 41.856 0 0 1-4.608 59.072zM479.936 704c158.784 0 288-129.216 288-288S638.72 128 479.936 128a288.32 288.32 0 0 0-288 288c0 158.784 129.216 288 288 288z" p-id="3853"></path>
      </svg> 
    </li>
    <li code='autoZoom'>
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="24">
        <path d="M684.288 305.28l0.128-0.64-0.128-0.64V99.712c0-19.84 15.552-35.904 34.496-35.712a35.072 35.072 0 0 1 34.56 35.776v171.008h170.944c19.648 0 35.84 15.488 35.712 34.432a35.072 35.072 0 0 1-35.84 34.496h-204.16l-0.64-0.128a32.768 32.768 0 0 1-20.864-7.552c-1.344-1.024-2.816-1.664-3.968-2.816-0.384-0.32-0.512-0.768-0.832-1.088a33.472 33.472 0 0 1-9.408-22.848zM305.28 64a35.072 35.072 0 0 0-34.56 35.776v171.008H99.776A35.072 35.072 0 0 0 64 305.216c0 18.944 15.872 34.496 35.84 34.496h204.16l0.64-0.128a32.896 32.896 0 0 0 20.864-7.552c1.344-1.024 2.816-1.664 3.904-2.816 0.384-0.32 0.512-0.768 0.768-1.088a33.024 33.024 0 0 0 9.536-22.848l-0.128-0.64 0.128-0.704V99.712A35.008 35.008 0 0 0 305.216 64z m618.944 620.288h-204.16l-0.64 0.128-0.512-0.128c-7.808 0-14.72 3.2-20.48 7.68-1.28 1.024-2.752 1.664-3.84 2.752-0.384 0.32-0.512 0.768-0.832 1.088a33.664 33.664 0 0 0-9.408 22.912l0.128 0.64-0.128 0.704v204.288c0 19.712 15.552 35.904 34.496 35.712a35.072 35.072 0 0 0 34.56-35.776V753.28h170.944c19.648 0 35.84-15.488 35.712-34.432a35.072 35.072 0 0 0-35.84-34.496z m-593.92 11.52c-0.256-0.32-0.384-0.768-0.768-1.088-1.088-1.088-2.56-1.728-3.84-2.688a33.088 33.088 0 0 0-20.48-7.68l-0.512 0.064-0.64-0.128H99.84a35.072 35.072 0 0 0-35.84 34.496 35.072 35.072 0 0 0 35.712 34.432H270.72v171.008c0 19.84 15.552 35.84 34.56 35.776a35.008 35.008 0 0 0 34.432-35.712V720l-0.128-0.64 0.128-0.704a33.344 33.344 0 0 0-9.472-22.848zM512 374.144a137.92 137.92 0 1 0 0.128 275.84A137.92 137.92 0 0 0 512 374.08z"></path>
      </svg>
    </li>
   
  </ul>`,

  handleClick: (code, graph) => {
    switch (code) {
      case "zoomOut":
        graph.zoom(1.2, undefined, true, animateCfg);
        break;
      case "zoomIn":
        graph.zoom(0.8, undefined, true, animateCfg);
        break;
      case "autoZoom":
        graph.fitView(20, undefined, true, animateCfg);
        break;
    }
  },
});

const edgeColors = data.edges.map(() => chroma.random().hex());

const modifiedEdges = data.edges.map((edge, index) => {
  return {
    ...edge,
    style: {
      ...edge.style,
      stroke: edgeColors[index],
    },
  };
});

export default function Topology() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const graphRef = React.createRef(null);

  useEffect(() => {
    // fetchData();
    const container = document.getElementById("App");
    const width = container.scrollWidth || 1200;
    const height = container.scrollHeight || 880;
    if (!graphRef.current) {
      graphRef.current = new G6.Graph({
        container: container,
        width,
        height,
        linkCenter: true,
        pixelRatio: 2,
        fitView: true,
        plugins: [toolbar],
        layout: {
          nodeSpacing: 200,
          linkDistance: 100,
          type: "force",
          animate: true,
          animation:true,
          preventOverlap: true,
          nodeSize: 200,
          workerEnabled: true,
        },
        defaultNode: {
          type: "image",
          size: [170, 170],
          img: 'data:image/svg+xml,<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools --><svg width="256px" height="256px" viewBox="-102.4 -102.4 1228.80 1228.80" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="%23000000" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="%23CCCCCC" strokeWidth="28.672000000000004"><path d="M77 403.4v228.5c1.5 93.7 195.7 183.5 435 183.5s433.4-89.8 435-183.5V403.4H77z" fill="%231B9BDB"/><path d="M947 402.7c0 99.4-194.8 194-435 194s-435-94.6-435-194 194.8-180 435-180 435 80.5 435 180z" fill="%233ED6FF"/><path d="M474.1 311.4H503l0.1 63.2h29.5l-0.7-63.2h28.9l-43.7-75.1zM533 417.2h-29.9l0.1 73.9h-30.6l46.2 75.2 45.5-75.2h-30.6zM654.5 380.9l-1.4-30-72.1 45 76.4 45.1-1.4-30h126.2l-2.6-30.1zM381.1 380.9h-125l-2.3 30.1H380l-1.1 30 75.9-45.1-72.5-45z" fill="%23FFFFFF"/></g><g id="SVGRepo_iconCarrier"><path d="M77 403.4v228.5c1.5 93.7 195.7 183.5 435 183.5s433.4-89.8 435-183.5V403.4H77z" fill="%231B9BDB"/><path d="M947 402.7c0 99.4-194.8 194-435 194s-435-94.6-435-194 194.8-180 435-180 435 80.5 435 180z" fill="%233ED6FF"/><path d="M474.1 311.4H503l0.1 63.2h29.5l-0.7-63.2h28.9l-43.7-75.1zM533 417.2h-29.9l0.1 73.9h-30.6l46.2 75.2 45.5-75.2h-30.6zM654.5 380.9l-1.4-30-72.1 45 76.4 45.1-1.4-30h126.2l-2.6-30.1zM381.1 380.9h-125l-2.3 30.1H380l-1.1 30 75.9-45.1-72.5-45z" fill="%23FFFFFF"/></g></svg>',
          style: {
            fill: "#DEE9FF",
            stroke: "#5B8FF9",
          },
          labelCfg: {
            style: {
              fontSize: 50,
            },
            position: "bottom",
            offset: 1,
          },
        },
        plugins: [menu],
        modes: {
          default: [
            "drag-canvas",
            "zoom-canvas",
            "drag-node",
            "brush-select",
            "click-select",
          ],
          altSelect: [
            {
              type: "brush-select",
              trigger: "drag",
            },
            "drag-node",
          ],
        },
        defaultEdge: {
          type: "line",
          labelCfg: {
            autoRotate: true,
            style: {
              fontSize: 36,
              background: {
                // fill: "#999",
                stroke: "#FDFEFF",
                padding: [1, 1, 1, 1],
                radius: 6,
              },
              fillOpacity: 0,
              strokeOpacity: 0,
            },
          },
          style: {
            width: 90,
            cursor: true,
            opacity: 0.6,
            endArrow: {
              path: G6.Arrow.triangle(0, 0, 0),
              d: 25,
              fill: "#999",
            },
            startArrow: {
              path: G6.Arrow.triangle(6, 25, 55),
              d: 55,
              fill: "#999",
            },
            zIndex: 5,
          },
          edgeStateStyles: {
            highlight: {
              lineWidth: 5,
            },
          },
          loopCfg: {
            position: "top",
          },
          // curveOffset: 100,
        },
        nodeStateStyles: {
          highlight: {
            opacity: 1,
          },
          dark: {
            opacity: 0.1,
          },
        },
        edgeStateStyles: {
          highlight: {
            stroke: "#999",
            opacity: 1,
          },
          dark: {
            opacity: 0.1,
          },
        },
      });
      // graphRef.current.addPlugin(nodeTooltip);
      // graphRef.current.addPlugin(edgeTooltip);

      graphRef.current.data({
        nodes: data.nodes,
        edges: modifiedEdges,
      });
      graphRef.current.render();
      function clearAllStats() {
        graphRef.current.setAutoPaint(false);
        graphRef.current.getNodes().forEach(function (node) {
          graphRef.current.clearItemStates(node);
        });
        graphRef.current.getEdges().forEach(function (edge) {
          graphRef.current.clearItemStates(edge);
        });
        graphRef.current.getEdges().forEach(function (edge) {
          const labelElement = edge
            .getContainer()
            .findAll((element) => element.get("className") === "edge-label");
          if (labelElement) {
            labelElement.forEach((label) => {
              label.attr("fillOpacity", 0);
              label.attr("stroke-opacity", 0.1);
            });
          }
        });

        graphRef.current.paint();
        graphRef.current.setAutoPaint(true);
      }

      graphRef.current.on("node:mouseenter", function (e) {
        const item = e.item;
        const connectedNodes = new Set();
        const connectedEdges = new Set();

        graphRef.current.getEdges().forEach(function (edge) {
          if (edge.getSource() === item || edge.getTarget() === item) {
            connectedEdges.add(edge);
            if (edge.getSource() === item) {
              connectedNodes.add(edge.getTarget());
            } else {
              connectedNodes.add(edge.getSource());
            }
          }
        });

        graphRef.current.getNodes().forEach(function (node) {
          if (node === item || connectedNodes.has(node)) {
            graphRef.current.setItemState(node, "dark", false);
            graphRef.current.setItemState(node, "highlight", true);
            const labelElements = node
              .getContainer()
              .findAll((element) => element.get("className") === "node-label");
            if (labelElements) {
              labelElements.forEach((label) => {
                label.attr("fillOpacity", 1); // Display node labels
                label.attr("stroke-opacity", 1); // Adjust opacity as needed
              });
            }
          } else {
            graphRef.current.setItemState(node, "dark", true);
            const labelElements = node
              .getContainer()
              .findAll((element) => element.get("className") === "node-label");
            if (labelElements) {
              labelElements.forEach((label) => {
                label.attr("fillOpacity", 0); // Dim node labels
                label.attr("stroke-opacity", 0); // Adjust opacity as needed
              });
            }
          }
        });

        graphRef.current.getEdges().forEach(function (edge) {
          if (connectedEdges.has(edge)) {
            graphRef.current.setItemState(edge, "dark", false);
            graphRef.current.setItemState(edge, "highlight", true);
            edge.toFront();
            const labelElement = edge
              .getContainer()
              .findAll((element) => element.get("className") === "edge-label");
            if (labelElement) {
              labelElement.forEach((label) => {
                label.attr("fillOpacity", 1); // Display edge labels
                label.attr("stroke-opacity", 1); // Adjust opacity as needed
              });
            }
          } else {
            graphRef.current.setItemState(edge, "dark", true);
            const labelElement = edge
              .getContainer()
              .findAll((element) => element.get("className") === "edge-label");
            if (labelElement) {
              labelElement.forEach((label) => {
                label.attr("fillOpacity", 0); // Dim edge labels
                label.attr("stroke-opacity", 0); // Adjust opacity as needed
              });
            }
          }
        });

        graphRef.current.paint();
      });
      graphRef.current.on("node:mouseleave", clearAllStats);
      graphRef.current.on("canvas:click", clearAllStats);
      graphRef.current.on("node:mouseenter", (ev) => {
        const node = ev.item;
        const edges = node.getEdges();
        edges.forEach((edge) =>
          graphRef.current.setItemState(edge, "running", true)
        );
      });
      graphRef.current.on("node:mouseleave", (ev) => {
        const node = ev.item;
        const edges = node.getEdges();
        edges.forEach((edge) =>
          graphRef.current.setItemState(edge, "running", false)
        );
      });
    }

    // Create tooltip elements for nodes and edges
    const nodeTooltipElement = document.createElement("div");
    nodeTooltipElement.className = "custom-node-tooltip";
    nodeTooltipElement.style.position = "absolute";
    nodeTooltipElement.style.padding = "5px 20px 5px 5px";
    nodeTooltipElement.style.boxShadow = "rgb(174, 174, 174) 0px 0px 10px";
    nodeTooltipElement.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    nodeTooltipElement.style.border = "1px solid #ccc";
    nodeTooltipElement.style.borderRadius = "8px";
    document.body.appendChild(nodeTooltipElement);

    const edgeTooltipElement = document.createElement("div");
    edgeTooltipElement.className = "custom-edge-tooltip";
    edgeTooltipElement.style.position = "absolute";
    edgeTooltipElement.style.padding = "5px 20px 5px 5px";
    edgeTooltipElement.style.boxShadow = "rgb(174, 174, 174) 0px 0px 10px";
    edgeTooltipElement.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    edgeTooltipElement.style.border = "1px solid #ccc";
    edgeTooltipElement.style.borderRadius = "8px";
    document.body.appendChild(edgeTooltipElement);

    const ContextMenu = document.createElement('div');
    ContextMenu.id='contextmenu';
    ContextMenu.className='context_menu';
    ContextMenu.style.position="absolute";
    document.body.appendChild(ContextMenu);

    graphRef.current.on("node:mouseenter", (ev) => {
      const node = ev.item;
      if (node && node.getModel()) {
        const nodeId = node.getModel().id;
        const nodeContent = `
              <ul>
                <li><strong>ID:</strong> ${nodeId}</li>
                <li><strong>Label:</strong> ${node.getModel().label}</li>
              </ul>`;
        nodeTooltipElement.innerHTML = nodeContent;
        nodeTooltipElement.style.left = `${ev.clientX + 20}px`;
        nodeTooltipElement.style.top = `${ev.clientY + 20}px`;
        nodeTooltipElement.style.zIndex = "9999";
        nodeTooltipElement.style.display = "block";
      }
    });

    graphRef.current.on("node:mouseleave", () => {
      nodeTooltipElement.style.display = "none";
    });

    graphRef.current.on("edge:mouseenter", (ev) => {
      const edge = ev.item;
      if (edge && edge.getModel()) {
        const sourcenodeID = edge.getSource().getModel().id;
        const targetNodeID = edge.getTarget().getModel().id;
        const edgeContent = `
                  <ul>
                    <li><strong>From : ${sourcenodeID}</strong> <strong>&nbsp&nbsp&nbsp To : ${targetNodeID}&nbsp&nbsp</strong></li>
                  </ul> 
              `;
        edgeTooltipElement.innerHTML = edgeContent;
        edgeTooltipElement.style.left = `${ev.clientX + 20}px`;
        edgeTooltipElement.style.top = `${ev.clientY + 20}px`;
        edgeTooltipElement.style.zIndex = "9999";
        edgeTooltipElement.style.display = "block";
      }
    });

    graphRef.current.on("edge:mouseleave", () => {
      edgeTooltipElement.style.display = "none";
    });
    graphRef.current.on("nodeselectchange", (e) => {
      console.log('e',e);

      if (e.select) {
        const SelectedNodes = e.selectedItems.nodes.map( (nodes) => nodes._cfg )
        console.log(SelectedNodes)
        const nodeContent = `
                <ul>
                  <li></li>
                </ul>`;
          nodeTooltipElement.innerHTML = nodeContent;
          nodeTooltipElement.style.left = `${e.clientX + 20}px`;
          nodeTooltipElement.style.top = `${e.clientY + 20}px`;
          nodeTooltipElement.style.zIndex = "9999";
          nodeTooltipElement.style.display = "block";
      }
     
    });

    if (typeof window !== "undefined")
      window.onresize = () => {
        if (!graphRef.current || graphRef.current.get("destroyed")) return;
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return;
        graphRef.current.changeSize(
          container.scrollWidth,
          container.scrollHeight
        );
      };

    return () => {
      graphRef.current?.destroy();
      graphRef.current = null;
    };
  }, [graphRef]);

  const handleDownloadPDF = () => {
    if (graphRef.current) {
      const graphContainer = graphRef.current.get("container");
      html2canvas(graphContainer).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape", // Set orientation to landscape
          unit: "pt", // Use points as unit for positioning
          format: [canvas.width, canvas.height], // Set PDF format based on canvas size
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pdfWidth;
        // const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgHeight = 1130;
        pdf.addImage(imgData, "PNG", 10, 50, imgWidth, imgHeight);
        pdf.save("graph.pdf");
      });
    }
  };

  return (
    <div className="upper-layer">
      <div>
        <header style={{ position: "absolute" }}>
          <img
            src="https://palcnetworks.com/wp-content/themes/twentytwenty-child/images/Palclogoblack.svg"
            alt="palc"
            width="88"
            height="88"
            style={{ marginLeft: "30px" }}
          />
          <div className="title">
            <img
              width="28"
              height="28"
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/topology-4249458-3519260.png?f=webp&w=256"
              alt="netview"
            />
            <h2 style={{ marginTop: "30px" }}>Netview</h2>
          </div>
          <div className="nav ">
            <div
              className="btn"
              title="Download as pdf"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "4px",
                border: "1px solid #E0E0E0",
                borderRadius: "5px",
              }}
              onClick={handleDownloadPDF}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </header>
        <div className="reactflow-graph" id="App"></div>
      </div>
    </div>
  );
}
