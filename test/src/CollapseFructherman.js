// import React, { useEffect, useRef } from 'react';
// import G6 from '@antv/g6';
// import insertCss from 'insert-css';

// // Insert custom CSS styles
// insertCss(`
//   .g6-tooltip {
//     border: 1px solid #e2e2e2;
//     border-radius: 4px;
//     font-size: 12px;
//     color: #545454;
//     background-color: rgba(255, 255, 255, 0.9);
//     padding: 10px 8px;
//     box-shadow: rgb(174, 174, 174) 0px 0px 10px;
//   }
// `);

// const colors = ['#f5222d', '#faad14', '#a0d911', '#13c2c2', '#1890ff', '#b37feb', '#eb2f96'];
// const beginColor = '#5b8c00'; // green
// const endColor = '#ff4d4f'; // red

// // Generate large dummy data
// const regions = ['East Asia', 'Cluster1', 'North America', 'South America', 'Cluster2', 'Oceania'];
// const data = {
//     nodes: [
//       { id: 'node1', label: 'Node 1', region: 'East Asia', importValue: 1000, exportValue: 1500 },
//       { id: 'node2', label: 'Node 2', region: 'Cluster1', importValue: 1200, exportValue: 1600 },
//       { id: 'node3', label: 'Node 3', region: 'North America', importValue: 800, exportValue: 900 },
//       { id: 'node4', label: 'Node 4', region: 'South America', importValue: 950, exportValue: 700 },
//       { id: 'node5', label: 'Node 5', region: 'Cluster2', importValue: 400, exportValue: 600 },
//       { id: 'node6', label: 'Node 6', region: 'Oceania', importValue: 300, exportValue: 500 },
//       { id: 'node7', label: 'Node 7', region: 'East Asia', importValue: 1100, exportValue: 1300 },
//       { id: 'node8', label: 'Node 8', region: 'Cluster1', importValue: 1000, exportValue: 1700 },
//       { id: 'node9', label: 'Node 9', region: 'North America', importValue: 900, exportValue: 1000 },
//       { id: 'node10', label: 'Node 10', region: 'South America', importValue: 950, exportValue: 1100 },
//   ],
//     edges: [
//       { source: 'node1', target: 'node2', value: 300 },
//       { source: 'node2', target: 'node3', value: 200 },
//       { source: 'node3', target: 'node4', value: 100 },
//       { source: 'node4', target: 'node5', value: 400 },
//       { source: 'node5', target: 'node6', value: 500 },
//       { source: 'node6', target: 'node7', value: 600 },
//       { source: 'node7', target: 'node8', value: 700 },
//       { source: 'node8', target: 'node9', value: 800 },
//       { source: 'node9', target: 'node10', value: 900 },
//       { source: 'node10', target: 'node1', value: 1000 },
//       ],
//   };
  
//   const nodes = data.nodes;
//   const edges = data.edges;
// const nodeMap = new Map();
// const clusterMap = new Map();
// let cidx = 0;
// nodes.forEach(function (n) {
//   nodeMap.set(n.id, n);
//   let region = n.region.split(' ');
//   if (n.region === 'East Asia') region = n.region;
//   else region = region[region.length - 1];

//   if (clusterMap.get(region) === undefined) {
//     clusterMap.set(region, cidx);
//     cidx++;
//   }
//   const clusterId = clusterMap.get(region);
//   const color = colors[clusterId % colors.length];
//   n.style = {
//     color,
//     fill: color,
//     stroke: '#666',
//     lineWidth: 0.6,
//   };
//   n.cluster = clusterId;
//   n.importValue = 0;
//   n.exportValue = 0;
// });
// // Map the value of
// edges.forEach(function (e) {
//   if (e.value === '') e.value = 0;
//   const v = parseFloat(e.value);
//   nodeMap.get(e.source).exportValue += v;
//   nodeMap.get(e.target).importValue += v;
// });

// function mapValueToProp(items, valueName, propName, range) {
//   const valueRange = [9999999999, -9999999999];
//   items.forEach(function (n) {
//     if (n[valueName] > valueRange[1]) valueRange[1] = n[valueName];
//     if (n[valueName] < valueRange[0]) valueRange[0] = n[valueName];
//   });
//   const valueLength = valueRange[1] - valueRange[0];
//   const rLength = range[1] - range[0];
//   const propNameStrs = propName.split('.');
//   if (propNameStrs[0] === 'style' && propNameStrs.length > 1) {
//     items.forEach(function (n) {
//       if (n.style === undefined) n.style = {};
//       n.style[propNameStrs[1]] = (rLength * (n[valueName] - valueRange[0])) / valueLength + range[0];
//     });
//   } else {
//     items.forEach(function (n) {
//       n[propNameStrs[0]] = (rLength * (n[valueName] - valueRange[0])) / valueLength + range[0];
//     });
//   }
// }

// mapValueToProp(nodes, 'exportValue', 'size', [2, 12]);

// export default function CollapseForce() {
//   const graphRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const width = container.scrollWidth;
//     const height = container.scrollHeight - 30;

//     if (!graphRef.current) {
//       graphRef.current = new G6.Graph({
//         container: container,
//         width,
//         height,
//         layout: {
//           type: 'force',
//           preventOverlap: true,
//           nodeStrength: -30,
//           edgeStrength: 0.1,
//           clustering: true,
//           clusterNodeStrength: 30,
//           nodeSpacing: 50,
//           clusterGravity: 100,
//           maxIteration: 8000,
//           workerEnabled: true,
//         },
//         fitView: true,
//         linkCenter: true,
//         defaultNode: {
//           shape: 'circle',
//           size: 5,
//         },
//         defaultEdge: {
//           shape: 'quadratic',
//         },
//         modes: {
//           default: [
//             'drag-node',
//             'drag-canvas',
//             'zoom-canvas',
//             {
//               type: 'tooltip',
//               formatText: function formatText(model) {
//                 let name = '';
//                 let countries = '';
//                 if (model.name) name = model.name + '<br/>';
//                 if (model.countries) countries = '<br/>Number of Countries: ' + model.countries;
//                 const text = `${name} Export Value: ${model.exportValue}(1000USD)<br/>Region: ${model.region}<br/>Cluster: ${model.cluster} ${countries}`;
//                 return text;
//               },
//               shouldUpdate: function shouldUpdate() {
//                 return true;
//               },
//             },
//           ],
//         },
//       });

//       graphRef.current.on('afterlayout', function () {
//         container.innerHTML = 'Done!';
//       });

//       graphRef.current.data(data);
//       graphRef.current.render();

//       const edgeItems = graphRef.current.getEdges();
//       edgeItems.forEach(function (e) {
//         const lineWidth = 0.4;
//         const strokeOpacity = 0.2;
//         let stroke = 'l(0) 0:' + beginColor + ' 1:' + endColor;
//         const sourceModel = e.getSource().getModel();
//         const targetModel = e.getTarget().getModel();
//         if (sourceModel.x > targetModel.x) {
//           stroke = 'l(0) 0:' + endColor + ' 1:' + beginColor;
//         }
//         e.update({
//           style: {
//             lineWidth,
//             strokeOpacity,
//             stroke,
//           },
//         });
//       });
//       graphRef.current.paint();

//       graphRef.current.on('node:click', function (e) {
//         const targetItem = e.item;
//         const model = targetItem.getModel();
//         const graphEdges = graphRef.current.getEdges();
//         const graphNodes = graphRef.current.getNodes();
//         // click on the cluster node
//         if (model.id.substr(0, 7) === 'cluster') {
//           graphNodes.forEach(function (gn) {
//             const gnModel = gn.getModel();
//             // show the common nodes
//             if (gnModel.cluster === model.cluster && gnModel.id.substr(0, 7) !== 'cluster') {
//               gn.show();
//             }
//             // remove the cluster nodes
//             if (gnModel.id === model.id) graphRef.current.removeItem(gn);
//           });

//           graphEdges.forEach(function (ge) {
//             const sourceModel = ge.get('sourceNode').getModel();
//             const targetModel = ge.get('targetNode').getModel();
//             // show the common edges
//             if (
//               (sourceModel.cluster === model.cluster && sourceModel.id.substr(0, 7) !== 'cluster') ||
//               (targetModel.cluster === model.cluster && targetModel.id.substr(0, 7) !== 'cluster')
//             ) {
//               ge.show();
//               // add the edges to other cluster nodes
//               if (!ge.get('sourceNode').get('visible') && sourceModel.cluster !== model.cluster) {
//                 let c1 = beginColor,
//                   c2 = endColor;
//                 if (model.x > targetModel.x) {
//                   c1 = endColor;
//                   c2 = beginColor;
//                 }
//                 graphRef.current.addItem('edge', {
//                   source: 'cluster' + sourceModel.cluster,
//                   target: targetModel.id,
//                   id: 'cluster-edge-' + ge.id,
//                   style: {
//                     stroke: 'l(0) 0:' + c1 + ' 1:' + c2,
//                     lineWidth: 0.4,
//                     strokeOpacity: 0.2,
//                   },
//                 });
//               } else if (ge.get('targetNode').get('visible') && targetModel.cluster !== model.cluster) {
//                 let _c = beginColor,
//                   _c2 = endColor;
//                 if (sourceModel.x > model.x) {
//                   _c = endColor;
//                   _c2 = beginColor;
//                 }
//                 graphRef.current.addItem('edge', {
//                   source: sourceModel.id,
//                   target: 'cluster' + targetModel.id,
//                   id: 'cluster-edge-' + ge.id,
//                   style: {
//                     stroke: 'l(0) 0:' + _c + ' 1:' + _c2,
//                     lineWidth: 0.4,
//                     strokeOpacity: 0.2,
//                   },
//                 });
//               }
//               // hide the edges to the common nodes in other clusters
//               if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) {
//                 ge.hide();
//               }
//             }
//             // remove the cluster edges
//             if (sourceModel.id === model.id || targetModel.id === model.id) {
//               graphRef.current.removeItem(ge);
//             }
//           });
//         } else {
//           // click on the common node, collapse them
//           // calculate the cluster center
//           const center = {
//             x: 0,
//             y: 0,
//             count: 0,
//             exportValue: 0,
//           };
//           nodes.forEach(function (n) {
//             if (n.cluster === model.cluster) {
//               center.x += n.x;
//               center.y += n.y;
//               center.count++;
//               center.exportValue += n.exportValue;
//             }
//           });
//           center.x /= center.count;
//           center.y /= center.count;
//           // add cluster node on the center
//           const size = center.count * 1;
//           const clusterNodeId = 'cluster' + model.cluster;
//           const color = colors[model.cluster % colors.length];
//           const regionStrs = model.region.split(' ');
//           let region = regionStrs[regionStrs.length - 1];
//           if (model.region === 'East Asia') region = model.region;
//           let labelPosition = 'center';
//           if (region.length > size) labelPosition = 'left';
//           graphRef.current.addItem('node', {
//             x: center.x,
//             y: center.y,
//             id: clusterNodeId,
//             cluster: model.cluster,
//             region,
//             countries: center.count,
//             exportValue: center.exportValue,
//             style: {
//               color,
//               fill: color,
//               stroke: '#666',
//               lineWidth: 0.6,
//             },
//             size,
//             label: region,
//             labelCfg: {
//               style: {
//                 fontSize: 8.5,
//               },
//               position: labelPosition,
//             },
//           });

//           // add edges about the cluster
//           graphEdges.forEach(function (ge) {
//             const sourceModel = ge.get('sourceNode').getModel();
//             const targetModel = ge.get('targetNode').getModel();
//             if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) return;
//             if (sourceModel.cluster === model.cluster && targetModel.cluster !== model.cluster) {
//               let c1 = beginColor,
//                 c2 = endColor;
//               if (center.x > targetModel.x) {
//                 c1 = endColor;
//                 c2 = beginColor;
//               }
//               graphRef.current.addItem('edge', {
//                 source: clusterNodeId,
//                 target: targetModel.id,
//                 id: 'cluster-edge-' + ge.id,
//                 style: {
//                   stroke: 'l(0) 0:' + c1 + ' 1:' + c2,
//                   lineWidth: 0.4,
//                   strokeOpacity: 0.2,
//                 },
//               });
//             } else if (targetModel.cluster === model.cluster && sourceModel.cluster !== model.cluster) {
//               let _c3 = beginColor,
//                 _c4 = endColor;
//               if (sourceModel.x > center.x) {
//                 _c3 = endColor;
//                 _c4 = beginColor;
//               }
//               graphRef.current.addItem('edge', {
//                 source: sourceModel.id,
//                 target: clusterNodeId,
//                 id: 'cluster-edge-' + ge.id,
//                 style: {
//                   stroke: 'l(0) 0:' + _c3 + ' 1:' + _c4,
//                   lineWidth: 0.4,
//                   strokeOpacity: 0.2,
//                 },
//               });
//             }
//           });

//           // hide the common nodes in the cluster
//           graphNodes.forEach(function (gn) {
//             if (gn.getModel().cluster === model.cluster && gn.getModel().id.substr(0, 7) !== 'cluster') gn.hide();
//           });
//           // hide the common edges about cluster
//           graphEdges.forEach(function (ge) {
//             if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) ge.hide();
//           });
//         }
//       });

//       // Cleanup function
//       return () => {
//         graphRef.current?.destroy();
//         graphRef.current = null;
//       };
//     }

//     if (typeof window !== 'undefined') {
//       window.onresize = () => {
//         if (!graphRef.current || graphRef.current.get('destroyed')) return;
//         if (!container || !container.scrollWidth || !container.scrollHeight) return;
//         graphRef.current.changeSize(container.scrollWidth, container.scrollHeight);
//       };
//     }
//   }, []);

//   return <div ref={containerRef} id="App" style={{ width: '100%', height: '100vh' }}></div>;
// }

import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import insertCss from 'insert-css';
import chroma from "chroma-js";

// Insert custom CSS styles
insertCss(`
  .g6-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #545454;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
`);

const data = {
  nodes: [
    {
      "id": "TVF-D1002-AMS-001",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9102-AMS-002",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9102-AMS-001",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-D1002-AMS-002",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9102-AMS-003",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9102-AMS-004",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-CSR1000-AMS-001",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "TVF-CSR1000-AMS-002",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "TVF-D1001-AMS-005",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9006-AH-001",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-CCRS1-AMS-200",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "ams-dc0001-gr101",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-D1002-AMS-005",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9001-MT-001",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9001-AMS-002",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9006-AMS-001",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-D1006-AMS-004",
      "isLeaf": true,
      "region": "ClusterD"
    },
    {
      "id": "TVF-C9901-AMS-001",
      "isLeaf": true,
      "region": "ClusterD"
    },
    {
      "id": "TVF-CCRS1-UT-200",
      "isLeaf": true,
      "region": "ClusterD"
    },
    {
      "id": "TVF-C9001-HM-002",
      "isLeaf": true,
      "region": "ClusterD"
    },
    {
      "id": "TVF-D1002-AMS-004",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-D1002-AMS-006",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9006-AMS-003",
      "isLeaf": true,
      "region": "ClusterD"
    },
    {
      "id": "TVF-C9901-AMS-002",
      "isLeaf": true,
      "region": "ClusterD"
    },
    {
      "id": "TVF-C9006-AMS-002",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9001-AMS-003",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "ams-tr0021-gr101",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-C9001-MT-002",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "TVF-D1004-AH-001",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1004-AH-002",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-C9910-AH-001",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "TVF-C9910-AH-002",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "TVF-D1006-EHV-001",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1006-EHV-002",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-C9910-EHV-001",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "TVF-C9910-EHV-002",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "nls-ams02a-rt2",
      "isLeaf": false,
      "region": "ClusterB"
    },
    {
      "id": "TVF-D1004-AMS-231",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1001-AMS-001",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1001-AMS-002",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1004-UT-231",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1001-UT-002",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1002-HRL-001",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-D1001-UT-001",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "NLSPL1PE01",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "ams-dc0001-dr109",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "slr-tr0004-gr103-new",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "ams-dc0001-dr149",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "nls-ams17b-rt1",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "nls-hlm01a-ra60",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "zp-dc0100-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "ehv-dc0002-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "ams-dc0001-gr103-new",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "nls-ams02e-ra60",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "ams-tr0021-gr103",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "hm-dc0100-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "rt-dc0172-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "lls-dc0100-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "hrv-dc0100-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "nm-dc0100-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "nls-mnd01a-ra60",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "rt-dc0173-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "nls-tbg01a-ra60",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "re0-ams-tr0042-dr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "asn-dc0002-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "dv-dc0001-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "tb-dc0001-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "weer-dc0002-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "vnn-dc0001-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "mnd-dc0001-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "gv-dc0010-gr101",
      "isLeaf": true,
      "region": "ClusterA"
    },
    {
      "id": "ams-tr0021-dr109",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "slr-tr0004-gr104-new",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "ams-tr0021-gr104-new",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "nls-ams02e-ra50",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "nls-mnd01a-ra50",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "re0-ams-tr0610-dr101",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "hvs-dc0001-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "gv-dc0052-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "NLSPL1PE02",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "ams-tr0021-dr149",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "nls-hlm01a-ra50",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "zp-dc0100-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "ams-tr0021-gr104",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "hm-dc0100-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "rt-dc0172-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "lls-dc0100-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "hrv-dc0100-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "nm-dc0100-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "rt-dc0173-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "nls-tbg01a-ra50",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "gn-dc0002-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "zl-dc0001-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "ht-dc0001-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "venls-dc0003-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "amr-dc0010-gr102",
      "isLeaf": true,
      "region": "ClusterB"
    },
    {
      "id": "ams-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterE"
    },
    {
      "id": "ams-dc0001-rr101",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-dc0001-rr102",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-dc0001-rr103",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-dc0001-rr104",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-dc0001-rr107",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-tr0021-rr101",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-tr0021-rr102",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-tr0021-rr103",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-tr0021-rr104",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "ams-tr0021-rr107",
      "isLeaf": true,
      "region": "ClusterF"
    },
    {
      "id": "AH-TR0009-DR101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "HTN-S03555-CR104",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "AH-TR0009-DR102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "HTN-S03555-CR103",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "EHV-TR0001-DR101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "EHV-TR0001-DR102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "tb-dc0001-dr171",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "tb-dc0001-dr172",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr301",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr302",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr303",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr304",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "tb-dc0001-dr301",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr302",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr303",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr304",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr305",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr306",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr307",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-dr308",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "rt-dc0173-dr301",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "rt-dc0173-dr302",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "slr-tr0004-dr371",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "SLR-TR0004-DR101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "slr-tr0004-gr303",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "slr-tr0004-dr372",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "SLR-TR0004-DR102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "slr-tr0004-gr304",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "AMS-TR0021-DR107",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "RT-RC0173-DR107",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "AMS-TR0021-DR103",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0006-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0409-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0610-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0042-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-dc0001-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0021-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0021-gr303",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0021-gr304",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "tb-dc0001-gr303",
      "isLeaf": false,
      "region": "ClusterG"
    },
    {
      "id": "tb-dc0001-gr304",
      "isLeaf": true,
      "region": "ClusterG"
    },
    {
      "id": "mnd-dc0002-dr171",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "mnd-dc0002-dr172",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "HM-RC0100-DR105",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "HM-RC0100-DR106",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "RT-RC0173-DR105",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "RT-RC0173-DR106",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-mnd01a-ra2",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "nls-ams02a-rb3",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "nls-ams02a-rb4",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-zut01a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-zut01a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "zp-dc0100-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "zp-dc0100-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "ehv-dc0002-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "ams-tr0410-dr106",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-ams02a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-ams02a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-hlm01a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-hlm01a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr104",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "hm-dc0100-dr103",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-rtm02a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-rtm02a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "rt-lc0100-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-ley01a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-ley01a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "lls-dc0100-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "lls-dc0100-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-hrv01a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-hrv01a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-nij01a-rb1",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-nij01a-rb2",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nm-dc0100-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nm-dc0100-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "nls-rtm03a-rb1",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "nls-rtm03a-rb2",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "rt-dc0173-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "weer-dc0002-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "venls-dc0003-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "asn-dc0002-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "gn-dc0002-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "gv-dc0010-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "gv-dc0052-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "vnn-dc0001-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "amr-dc0010-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "mnd-dc0001-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "hvs-dc0002-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "dv-dc0001-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "zl-dc0001-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "tb-dc0001-dr102",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "ht-dc0001-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-mnd-dc0002-gr103",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "re0-mnd-dc0002-gr104",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-tb-dc0001-gr103",
      "isLeaf": false,
      "region": "ClusterH"
    },
    {
      "id": "re0-tb-dc0001-gr104",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-ams-tr0409-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-ams-tr0410-dr102",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-gn-dc0002-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-emn-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-zl-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-ht-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-tb-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-bd-dc0002-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-ah-tr0002-dr108",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-vnn-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-mnd-dc0001-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-gv-dc0010-dr101",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "re0-rt-tr0006-dr108",
      "isLeaf": true,
      "region": "ClusterH"
    },
    {
      "id": "TVF-C9001-HM-001",
      "isLeaf": false,
      "region": "ClusterC"
    },
    {
      "id": "TVF-D1002-AMS-003",
      "isLeaf": false,
      "region": "ClusterC"
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
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-C9001-HM-002",
       source: "TVF-C9102-AMS-003",
       target: "TVF-C9001-HM-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-D1002-AMS-004",
       source: "TVF-C9102-AMS-003",
       target: "TVF-D1002-AMS-004",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-D1002-AMS-006",
       source: "TVF-C9102-AMS-003",
       target: "TVF-D1002-AMS-006",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-C9006-AMS-003",
       source: "TVF-C9102-AMS-003",
       target: "TVF-C9006-AMS-003",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-C9901-AMS-002",
       source: "TVF-C9102-AMS-003",
       target: "TVF-C9901-AMS-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-C9006-AMS-002",
       source: "TVF-C9102-AMS-003",
       target: "TVF-C9006-AMS-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-003-TVF-C9001-AMS-003",
       source: "TVF-C9102-AMS-003",
       target: "TVF-C9001-AMS-003",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-C9006-AH-001",
       source: "TVF-C9102-AMS-004",
       target: "TVF-C9006-AH-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-CCRS1-AMS-200",
       source: "TVF-C9102-AMS-004",
       target: "TVF-CCRS1-AMS-200",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-ams-tr0021-gr101",
       source: "TVF-C9102-AMS-004",
       target: "ams-tr0021-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-D1002-AMS-004",
       source: "TVF-C9102-AMS-004",
       target: "TVF-D1002-AMS-004",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-D1002-AMS-006",
       source: "TVF-C9102-AMS-004",
       target: "TVF-D1002-AMS-006",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-C9001-MT-002",
       source: "TVF-C9102-AMS-004",
       target: "TVF-C9001-MT-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-C9006-AMS-002",
       source: "TVF-C9102-AMS-004",
       target: "TVF-C9006-AMS-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-004-TVF-C9001-AMS-003",
       source: "TVF-C9102-AMS-004",
       target: "TVF-C9001-AMS-003",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1006-AMS-004-TVF-C9102-AMS-001",
       source: "TVF-D1006-AMS-004",
       target: "TVF-C9102-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1004-AH-001-TVF-D1004-AH-002",
       source: "TVF-D1004-AH-001",
       target: "TVF-D1004-AH-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1004-AH-001-TVF-C9910-AH-001",
       source: "TVF-D1004-AH-001",
       target: "TVF-C9910-AH-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1004-AH-002-TVF-C9910-AH-002",
       source: "TVF-D1004-AH-002",
       target: "TVF-C9910-AH-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1006-EHV-001-TVF-D1006-EHV-002",
       source: "TVF-D1006-EHV-001",
       target: "TVF-D1006-EHV-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1006-EHV-001-TVF-C9910-EHV-001",
       source: "TVF-D1006-EHV-001",
       target: "TVF-C9910-EHV-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1006-EHV-002-TVF-C9910-EHV-002",
       source: "TVF-D1006-EHV-002",
       target: "TVF-C9910-EHV-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9901-AMS-001-TVF-C9102-AMS-001",
       source: "TVF-C9901-AMS-001",
       target: "TVF-C9102-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-ams02a-rt2-ams-tr0021-gr101",
       source: "nls-ams02a-rt2",
       target: "ams-tr0021-gr101",
       label: ["63"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-AMS-200-TVF-D1004-AMS-231",
       source: "TVF-CCRS1-AMS-200",
       target: "TVF-D1004-AMS-231",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-AMS-200-TVF-D1001-AMS-001",
       source: "TVF-CCRS1-AMS-200",
       target: "TVF-D1001-AMS-001",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-AMS-200-TVF-D1001-AMS-002",
       source: "TVF-CCRS1-AMS-200",
       target: "TVF-D1001-AMS-002",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-AMS-200-TVF-D1004-UT-231",
       source: "TVF-CCRS1-AMS-200",
       target: "TVF-D1004-UT-231",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-AMS-200-TVF-D1001-UT-002",
       source: "TVF-CCRS1-AMS-200",
       target: "TVF-D1001-UT-002",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-AMS-200-TVF-D1002-HRL-001",
       source: "TVF-CCRS1-AMS-200",
       target: "TVF-D1002-HRL-001",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1001-AMS-002-TVF-CCRS1-UT-200",
       source: "TVF-D1001-AMS-002",
       target: "TVF-CCRS1-UT-200",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-UT-200-TVF-D1004-UT-231",
       source: "TVF-CCRS1-UT-200",
       target: "TVF-D1004-UT-231",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-UT-200-TVF-D1001-UT-001",
       source: "TVF-CCRS1-UT-200",
       target: "TVF-D1001-UT-001",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-UT-200-TVF-D1001-UT-002",
       source: "TVF-CCRS1-UT-200",
       target: "TVF-D1001-UT-002",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-UT-200-TVF-D1002-HRL-001",
       source: "TVF-CCRS1-UT-200",
       target: "TVF-D1002-HRL-001",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-CCRS1-UT-200-TVF-C9102-AMS-001",
       source: "TVF-CCRS1-UT-200",
       target: "TVF-C9102-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-ams-tr0021-gr101",
       source: "ams-dc0001-gr101",
       target: "ams-tr0021-gr101",
       label: ["100"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-NLSPL1PE01",
       source: "ams-dc0001-gr101",
       target: "NLSPL1PE01",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-ams-dc0001-dr109",
       source: "ams-dc0001-gr101",
       target: "ams-dc0001-dr109",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-TVF-C9910-AH-001",
       source: "ams-dc0001-gr101",
       target: "TVF-C9910-AH-001",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-TVF-C9910-EHV-001",
       source: "ams-dc0001-gr101",
       target: "TVF-C9910-EHV-001",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-slr-tr0004-gr103-new",
       source: "ams-dc0001-gr101",
       target: "slr-tr0004-gr103-new",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-ams-dc0001-dr149",
       source: "ams-dc0001-gr101",
       target: "ams-dc0001-dr149",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-nls-ams17b-rt1",
       source: "ams-dc0001-gr101",
       target: "nls-ams17b-rt1",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-nls-hlm01a-ra60",
       source: "ams-dc0001-gr101",
       target: "nls-hlm01a-ra60",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-zp-dc0100-gr101",
       source: "ams-dc0001-gr101",
       target: "zp-dc0100-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-ehv-dc0002-gr101",
       source: "ams-dc0001-gr101",
       target: "ehv-dc0002-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-ams-dc0001-gr103-new",
       source: "ams-dc0001-gr101",
       target: "ams-dc0001-gr103-new",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-nls-ams02e-ra60",
       source: "ams-dc0001-gr101",
       target: "nls-ams02e-ra60",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-ams-tr0021-gr103",
       source: "ams-dc0001-gr101",
       target: "ams-tr0021-gr103",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-hm-dc0100-gr101",
       source: "ams-dc0001-gr101",
       target: "hm-dc0100-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-rt-dc0172-gr101",
       source: "ams-dc0001-gr101",
       target: "rt-dc0172-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-lls-dc0100-gr101",
       source: "ams-dc0001-gr101",
       target: "lls-dc0100-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-hrv-dc0100-gr101",
       source: "ams-dc0001-gr101",
       target: "hrv-dc0100-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-nm-dc0100-gr101",
       source: "ams-dc0001-gr101",
       target: "nm-dc0100-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-nls-mnd01a-ra60",
       source: "ams-dc0001-gr101",
       target: "nls-mnd01a-ra60",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-rt-dc0173-gr101",
       source: "ams-dc0001-gr101",
       target: "rt-dc0173-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-nls-tbg01a-ra60",
       source: "ams-dc0001-gr101",
       target: "nls-tbg01a-ra60",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-re0-ams-tr0042-dr101",
       source: "ams-dc0001-gr101",
       target: "re0-ams-tr0042-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-asn-dc0002-gr101",
       source: "ams-dc0001-gr101",
       target: "asn-dc0002-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-dv-dc0001-gr101",
       source: "ams-dc0001-gr101",
       target: "dv-dc0001-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-tb-dc0001-gr101",
       source: "ams-dc0001-gr101",
       target: "tb-dc0001-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-weer-dc0002-gr101",
       source: "ams-dc0001-gr101",
       target: "weer-dc0002-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-vnn-dc0001-gr101",
       source: "ams-dc0001-gr101",
       target: "vnn-dc0001-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-mnd-dc0001-gr101",
       source: "ams-dc0001-gr101",
       target: "mnd-dc0001-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr101-gv-dc0010-gr101",
       source: "ams-dc0001-gr101",
       target: "gv-dc0010-gr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-ams-tr0021-dr109",
       source: "ams-tr0021-gr101",
       target: "ams-tr0021-dr109",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-TVF-C9910-AH-002",
       source: "ams-tr0021-gr101",
       target: "TVF-C9910-AH-002",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-slr-tr0004-gr104-new",
       source: "ams-tr0021-gr101",
       target: "slr-tr0004-gr104-new",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-ams-tr0021-gr104-new",
       source: "ams-tr0021-gr101",
       target: "ams-tr0021-gr104-new",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-nls-ams02e-ra50",
       source: "ams-tr0021-gr101",
       target: "nls-ams02e-ra50",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-nls-mnd01a-ra50",
       source: "ams-tr0021-gr101",
       target: "nls-mnd01a-ra50",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-re0-ams-tr0610-dr101",
       source: "ams-tr0021-gr101",
       target: "re0-ams-tr0610-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-hvs-dc0001-gr102",
       source: "ams-tr0021-gr101",
       target: "hvs-dc0001-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-gv-dc0052-gr102",
       source: "ams-tr0021-gr101",
       target: "gv-dc0052-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-NLSPL1PE02",
       source: "ams-tr0021-gr101",
       target: "NLSPL1PE02",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-TVF-C9910-EHV-002",
       source: "ams-tr0021-gr101",
       target: "TVF-C9910-EHV-002",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-ams-tr0021-dr149",
       source: "ams-tr0021-gr101",
       target: "ams-tr0021-dr149",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-nls-hlm01a-ra50",
       source: "ams-tr0021-gr101",
       target: "nls-hlm01a-ra50",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-zp-dc0100-gr102",
       source: "ams-tr0021-gr101",
       target: "zp-dc0100-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-ams-tr0021-gr104",
       source: "ams-tr0021-gr101",
       target: "ams-tr0021-gr104",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-hm-dc0100-gr102",
       source: "ams-tr0021-gr101",
       target: "hm-dc0100-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-rt-dc0172-gr102",
       source: "ams-tr0021-gr101",
       target: "rt-dc0172-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-lls-dc0100-gr102",
       source: "ams-tr0021-gr101",
       target: "lls-dc0100-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-hrv-dc0100-gr102",
       source: "ams-tr0021-gr101",
       target: "hrv-dc0100-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-nm-dc0100-gr102",
       source: "ams-tr0021-gr101",
       target: "nm-dc0100-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-rt-dc0173-gr102",
       source: "ams-tr0021-gr101",
       target: "rt-dc0173-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-nls-tbg01a-ra50",
       source: "ams-tr0021-gr101",
       target: "nls-tbg01a-ra50",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-gn-dc0002-gr102",
       source: "ams-tr0021-gr101",
       target: "gn-dc0002-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-zl-dc0001-gr102",
       source: "ams-tr0021-gr101",
       target: "zl-dc0001-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-ht-dc0001-gr102",
       source: "ams-tr0021-gr101",
       target: "ht-dc0001-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-venls-dc0003-gr102",
       source: "ams-tr0021-gr101",
       target: "venls-dc0003-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-amr-dc0010-gr102",
       source: "ams-tr0021-gr101",
       target: "amr-dc0010-gr102",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr101-TVF-C9102-AMS-001",
       source: "ams-tr0021-gr101",
       target: "TVF-C9102-AMS-001",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-NLSPL1PE01-NLSPL1PE02",
       source: "NLSPL1PE01",
       target: "NLSPL1PE02",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-tr0021-dr109",
       source: "ams-dc0001-dr109",
       target: "ams-tr0021-dr109",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-dc0001-dr101",
       source: "ams-dc0001-dr109",
       target: "ams-dc0001-dr101",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-dc0001-rr101",
       source: "ams-dc0001-dr109",
       target: "ams-dc0001-rr101",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-dc0001-rr102",
       source: "ams-dc0001-dr109",
       target: "ams-dc0001-rr102",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-dc0001-rr103",
       source: "ams-dc0001-dr109",
       target: "ams-dc0001-rr103",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-dc0001-rr104",
       source: "ams-dc0001-dr109",
       target: "ams-dc0001-rr104",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-dc0001-rr107",
       source: "ams-dc0001-dr109",
       target: "ams-dc0001-rr107",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-tr0021-rr101",
       source: "ams-dc0001-dr109",
       target: "ams-tr0021-rr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-tr0021-rr102",
       source: "ams-dc0001-dr109",
       target: "ams-tr0021-rr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-tr0021-rr103",
       source: "ams-dc0001-dr109",
       target: "ams-tr0021-rr103",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-tr0021-rr104",
       source: "ams-dc0001-dr109",
       target: "ams-tr0021-rr104",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr109-ams-tr0021-rr107",
       source: "ams-dc0001-dr109",
       target: "ams-tr0021-rr107",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-dc0001-rr101",
       source: "ams-tr0021-dr109",
       target: "ams-dc0001-rr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-dc0001-rr102",
       source: "ams-tr0021-dr109",
       target: "ams-dc0001-rr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-dc0001-rr103",
       source: "ams-tr0021-dr109",
       target: "ams-dc0001-rr103",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-dc0001-rr104",
       source: "ams-tr0021-dr109",
       target: "ams-dc0001-rr104",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-dc0001-rr107",
       source: "ams-tr0021-dr109",
       target: "ams-dc0001-rr107",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-tr0021-rr101",
       source: "ams-tr0021-dr109",
       target: "ams-tr0021-rr101",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-tr0021-rr102",
       source: "ams-tr0021-dr109",
       target: "ams-tr0021-rr102",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-tr0021-rr103",
       source: "ams-tr0021-dr109",
       target: "ams-tr0021-rr103",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-tr0021-rr104",
       source: "ams-tr0021-dr109",
       target: "ams-tr0021-rr104",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-dr109-ams-tr0021-rr107",
       source: "ams-tr0021-dr109",
       target: "ams-tr0021-rr107",
       label: ["1500"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-AH-001-TVF-C9910-AH-002",
       source: "TVF-C9910-AH-001",
       target: "TVF-C9910-AH-002",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-AH-001-AH-TR0009-DR101",
       source: "TVF-C9910-AH-001",
       target: "AH-TR0009-DR101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-AH-002-HTN-S03555-CR104",
       source: "TVF-C9910-AH-002",
       target: "HTN-S03555-CR104",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-AH-002-AH-TR0009-DR102",
       source: "TVF-C9910-AH-002",
       target: "AH-TR0009-DR102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-EHV-001-TVF-C9910-EHV-002",
       source: "TVF-C9910-EHV-001",
       target: "TVF-C9910-EHV-002",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-EHV-001-HTN-S03555-CR103",
       source: "TVF-C9910-EHV-001",
       target: "HTN-S03555-CR103",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-EHV-001-EHV-TR0001-DR101",
       source: "TVF-C9910-EHV-001",
       target: "EHV-TR0001-DR101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9910-EHV-002-EHV-TR0001-DR102",
       source: "TVF-C9910-EHV-002",
       target: "EHV-TR0001-DR102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr171-tb-dc0001-dr172",
       source: "tb-dc0001-dr171",
       target: "tb-dc0001-dr172",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr171-tb-dc0001-gr101",
       source: "tb-dc0001-dr171",
       target: "tb-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr172-ht-dc0001-gr102",
       source: "tb-dc0001-dr172",
       target: "ht-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr301-nls-hlm01a-ra50",
       source: "hm-dc0100-dr301",
       target: "nls-hlm01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr301-nls-hlm01a-ra60",
       source: "hm-dc0100-dr301",
       target: "nls-hlm01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr302-nls-hlm01a-ra50",
       source: "hm-dc0100-dr302",
       target: "nls-hlm01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr302-nls-hlm01a-ra60",
       source: "hm-dc0100-dr302",
       target: "nls-hlm01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr303-nls-hlm01a-ra50",
       source: "hm-dc0100-dr303",
       target: "nls-hlm01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr303-nls-hlm01a-ra60",
       source: "hm-dc0100-dr303",
       target: "nls-hlm01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr304-nls-hlm01a-ra50",
       source: "hm-dc0100-dr304",
       target: "nls-hlm01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr304-nls-hlm01a-ra60",
       source: "hm-dc0100-dr304",
       target: "nls-hlm01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr301-nls-tbg01a-ra50",
       source: "tb-dc0001-dr301",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr301-nls-tbg01a-ra60",
       source: "tb-dc0001-dr301",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr302-nls-tbg01a-ra50",
       source: "tb-dc0001-dr302",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr302-nls-tbg01a-ra60",
       source: "tb-dc0001-dr302",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr303-nls-tbg01a-ra50",
       source: "tb-dc0001-dr303",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr303-nls-tbg01a-ra60",
       source: "tb-dc0001-dr303",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr304-nls-tbg01a-ra50",
       source: "tb-dc0001-dr304",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr304-nls-tbg01a-ra60",
       source: "tb-dc0001-dr304",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr305-nls-tbg01a-ra50",
       source: "tb-dc0001-dr305",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr305-nls-tbg01a-ra60",
       source: "tb-dc0001-dr305",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr306-nls-tbg01a-ra50",
       source: "tb-dc0001-dr306",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr306-nls-tbg01a-ra60",
       source: "tb-dc0001-dr306",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr307-nls-tbg01a-ra50",
       source: "tb-dc0001-dr307",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr307-nls-tbg01a-ra60",
       source: "tb-dc0001-dr307",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr308-nls-tbg01a-ra50",
       source: "tb-dc0001-dr308",
       target: "nls-tbg01a-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr308-nls-tbg01a-ra60",
       source: "tb-dc0001-dr308",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0173-dr301-rt-dc0173-gr102",
       source: "rt-dc0173-dr301",
       target: "rt-dc0173-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0173-dr301-rt-dc0173-gr101",
       source: "rt-dc0173-dr301",
       target: "rt-dc0173-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0173-dr302-rt-dc0173-gr102",
       source: "rt-dc0173-dr302",
       target: "rt-dc0173-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0173-dr302-rt-dc0173-gr101",
       source: "rt-dc0173-dr302",
       target: "rt-dc0173-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr103-new-slr-tr0004-gr104-new",
       source: "slr-tr0004-gr103-new",
       target: "slr-tr0004-gr104-new",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr103-new-slr-tr0004-dr371",
       source: "slr-tr0004-gr103-new",
       target: "slr-tr0004-dr371",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr103-new-SLR-TR0004-DR101",
       source: "slr-tr0004-gr103-new",
       target: "SLR-TR0004-DR101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr103-new-slr-tr0004-gr303",
       source: "slr-tr0004-gr103-new",
       target: "slr-tr0004-gr303",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr104-new-slr-tr0004-dr372",
       source: "slr-tr0004-gr104-new",
       target: "slr-tr0004-dr372",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr104-new-SLR-TR0004-DR102",
       source: "slr-tr0004-gr104-new",
       target: "SLR-TR0004-DR102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr104-new-slr-tr0004-gr304",
       source: "slr-tr0004-gr104-new",
       target: "slr-tr0004-gr304",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-dr371-slr-tr0004-dr372",
       source: "slr-tr0004-dr371",
       target: "slr-tr0004-dr372",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-AMS-TR0021-DR107-ams-tr0021-gr104",
       source: "AMS-TR0021-DR107",
       target: "ams-tr0021-gr104",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-AMS-TR0021-DR107-ams-tr0021-gr103",
       source: "AMS-TR0021-DR107",
       target: "ams-tr0021-gr103",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-RT-RC0173-DR107-rt-dc0173-gr102",
       source: "RT-RC0173-DR107",
       target: "rt-dc0173-gr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-RT-RC0173-DR107-rt-dc0173-gr101",
       source: "RT-RC0173-DR107",
       target: "rt-dc0173-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-HTN-S03555-CR103-HTN-S03555-CR103",
       source: "HTN-S03555-CR103",
       target: "HTN-S03555-CR103",
       label: ["10000"],
       edgeId: "1",
       type: "loop",
   },
   {
       id: "edge-HTN-S03555-CR103-HTN-S03555-CR104",
       source: "HTN-S03555-CR103",
       target: "HTN-S03555-CR104",
       label: ["0"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-AMS-TR0021-DR103-ams-tr0021-gr104-new",
       source: "AMS-TR0021-DR103",
       target: "ams-tr0021-gr104-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-AMS-TR0021-DR103-ams-tr0021-gr103",
       source: "AMS-TR0021-DR103",
       target: "ams-tr0021-gr103",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0006-dr102-ams-dc0001-gr103-new",
       source: "ams-tr0006-dr102",
       target: "ams-dc0001-gr103-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0006-dr102-ams-tr0021-gr104-new",
       source: "ams-tr0006-dr102",
       target: "ams-tr0021-gr104-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0409-dr102-ams-dc0001-gr103-new",
       source: "ams-tr0409-dr102",
       target: "ams-dc0001-gr103-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0409-dr102-ams-tr0021-gr104-new",
       source: "ams-tr0409-dr102",
       target: "ams-tr0021-gr104-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0610-dr102-ams-dc0001-gr103-new",
       source: "ams-tr0610-dr102",
       target: "ams-dc0001-gr103-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0610-dr102-ams-tr0021-gr104-new",
       source: "ams-tr0610-dr102",
       target: "ams-tr0021-gr104-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0042-dr102-ams-dc0001-gr103-new",
       source: "ams-tr0042-dr102",
       target: "ams-dc0001-gr103-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0042-dr102-ams-tr0021-gr104-new",
       source: "ams-tr0042-dr102",
       target: "ams-tr0021-gr104-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-SLR-TR0004-DR101-SLR-TR0004-DR102",
       source: "SLR-TR0004-DR101",
       target: "SLR-TR0004-DR102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-AH-TR0009-DR101-AH-TR0009-DR102",
       source: "AH-TR0009-DR101",
       target: "AH-TR0009-DR102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-EHV-TR0001-DR101-EHV-TR0001-DR102",
       source: "EHV-TR0001-DR101",
       target: "EHV-TR0001-DR102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr102-ams-dc0001-gr103-new",
       source: "ams-dc0001-dr102",
       target: "ams-dc0001-gr103-new",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr102-ams-tr0021-dr102",
       source: "ams-dc0001-dr102",
       target: "ams-tr0021-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-slr-tr0004-gr303-slr-tr0004-gr304",
       source: "slr-tr0004-gr303",
       target: "slr-tr0004-gr304",
       label: ["2200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr303-ams-tr0021-gr304",
       source: "ams-tr0021-gr303",
       target: "ams-tr0021-gr304",
       label: ["2200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr303-nls-ams02e-ra50",
       source: "ams-tr0021-gr303",
       target: "nls-ams02e-ra50",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr304-nls-ams02e-ra60",
       source: "ams-tr0021-gr304",
       target: "nls-ams02e-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr303-tb-dc0001-gr304",
       source: "tb-dc0001-gr303",
       target: "tb-dc0001-gr304",
       label: ["2200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr303-nls-tbg01a-ra50",
       source: "tb-dc0001-gr303",
       target: "nls-tbg01a-ra50",
       label: ["1999"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr304-nls-tbg01a-ra60",
       source: "tb-dc0001-gr304",
       target: "nls-tbg01a-ra60",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0002-dr171-mnd-dc0002-dr172",
       source: "mnd-dc0002-dr171",
       target: "mnd-dc0002-dr172",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0002-dr171-mnd-dc0001-gr101",
       source: "mnd-dc0002-dr171",
       target: "mnd-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0002-dr172-hvs-dc0001-gr102",
       source: "mnd-dc0002-dr172",
       target: "hvs-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-dr149-ams-tr0021-dr149",
       source: "ams-dc0001-dr149",
       target: "ams-tr0021-dr149",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-HM-RC0100-DR105-HM-RC0100-DR106",
       source: "HM-RC0100-DR105",
       target: "HM-RC0100-DR106",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-HM-RC0100-DR105-hm-dc0100-gr101",
       source: "HM-RC0100-DR105",
       target: "hm-dc0100-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-HM-RC0100-DR106-hm-dc0100-gr102",
       source: "HM-RC0100-DR106",
       target: "hm-dc0100-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-RT-RC0173-DR105-RT-RC0173-DR106",
       source: "RT-RC0173-DR105",
       target: "RT-RC0173-DR106",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-RT-RC0173-DR105-rt-dc0173-gr102",
       source: "RT-RC0173-DR105",
       target: "rt-dc0173-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-RT-RC0173-DR106-rt-dc0173-gr101",
       source: "RT-RC0173-DR106",
       target: "rt-dc0173-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-mnd01a-ra2-nls-mnd01a-ra60",
       source: "nls-mnd01a-ra2",
       target: "nls-mnd01a-ra60",
       label: ["327691"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-hlm01a-ra50-nls-hlm01a-ra60",
       source: "nls-hlm01a-ra50",
       target: "nls-hlm01a-ra60",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-ams02a-rb3-nls-ams02a-rb4",
       source: "nls-ams02a-rb3",
       target: "nls-ams02a-rb4",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-ams02a-rb3-ams-tr0021-gr104",
       source: "nls-ams02a-rb3",
       target: "ams-tr0021-gr104",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-ams02a-rb4-ams-tr0021-gr103",
       source: "nls-ams02a-rb4",
       target: "ams-tr0021-gr103",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr101-zp-dc0100-gr102",
       source: "zp-dc0100-gr101",
       target: "zp-dc0100-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr101-nls-zut01a-rb1",
       source: "zp-dc0100-gr101",
       target: "nls-zut01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr101-nls-zut01a-rb2",
       source: "zp-dc0100-gr101",
       target: "nls-zut01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr101-zp-dc0100-dr101",
       source: "zp-dc0100-gr101",
       target: "zp-dc0100-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr102-nls-zut01a-rb1",
       source: "zp-dc0100-gr102",
       target: "nls-zut01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr102-nls-zut01a-rb2",
       source: "zp-dc0100-gr102",
       target: "nls-zut01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-gr102-zp-dc0100-dr102",
       source: "zp-dc0100-gr102",
       target: "zp-dc0100-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ehv-dc0002-gr101-hm-dc0100-gr102",
       source: "ehv-dc0002-gr101",
       target: "hm-dc0100-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ehv-dc0002-gr101-ehv-dc0002-dr102",
       source: "ehv-dc0002-gr101",
       target: "ehv-dc0002-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr103-new-ams-tr0021-gr104-new",
       source: "ams-dc0001-gr103-new",
       target: "ams-tr0021-gr104-new",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-dc0001-gr103-new-ams-tr0410-dr106",
       source: "ams-dc0001-gr103-new",
       target: "ams-tr0410-dr106",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr104-new-ams-tr0410-dr106",
       source: "ams-tr0021-gr104-new",
       target: "ams-tr0410-dr106",
       label: ["1000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr104-new-ams-tr0021-dr102",
       source: "ams-tr0021-gr104-new",
       target: "ams-tr0021-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-ams02e-ra50-nls-ams02e-ra60",
       source: "nls-ams02e-ra50",
       target: "nls-ams02e-ra60",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr104-ams-tr0021-gr103",
       source: "ams-tr0021-gr104",
       target: "ams-tr0021-gr103",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr104-nls-ams02a-rb1",
       source: "ams-tr0021-gr104",
       target: "nls-ams02a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr104-nls-ams02a-rb2",
       source: "ams-tr0021-gr104",
       target: "nls-ams02a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr103-nls-ams02a-rb1",
       source: "ams-tr0021-gr103",
       target: "nls-ams02a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ams-tr0021-gr103-nls-ams02a-rb2",
       source: "ams-tr0021-gr103",
       target: "nls-ams02a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr102-hm-dc0100-gr101",
       source: "hm-dc0100-gr102",
       target: "hm-dc0100-gr101",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr102-nls-hlm01a-rb1",
       source: "hm-dc0100-gr102",
       target: "nls-hlm01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr102-nls-hlm01a-rb2",
       source: "hm-dc0100-gr102",
       target: "nls-hlm01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr102-hm-dc0100-dr102",
       source: "hm-dc0100-gr102",
       target: "hm-dc0100-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr102-hm-dc0100-dr104",
       source: "hm-dc0100-gr102",
       target: "hm-dc0100-dr104",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr101-nls-hlm01a-rb1",
       source: "hm-dc0100-gr101",
       target: "nls-hlm01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr101-nls-hlm01a-rb2",
       source: "hm-dc0100-gr101",
       target: "nls-hlm01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-gr101-hm-dc0100-dr103",
       source: "hm-dc0100-gr101",
       target: "hm-dc0100-dr103",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0172-gr102-rt-dc0172-gr101",
       source: "rt-dc0172-gr102",
       target: "rt-dc0172-gr101",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0172-gr102-nls-rtm02a-rb1",
       source: "rt-dc0172-gr102",
       target: "nls-rtm02a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0172-gr102-nls-rtm02a-rb2",
       source: "rt-dc0172-gr102",
       target: "nls-rtm02a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0172-gr101-nls-rtm02a-rb1",
       source: "rt-dc0172-gr101",
       target: "nls-rtm02a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0172-gr101-nls-rtm02a-rb2",
       source: "rt-dc0172-gr101",
       target: "nls-rtm02a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0172-gr101-rt-lc0100-dr102",
       source: "rt-dc0172-gr101",
       target: "rt-lc0100-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr102-lls-dc0100-gr101",
       source: "lls-dc0100-gr102",
       target: "lls-dc0100-gr101",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr102-nls-ley01a-rb1",
       source: "lls-dc0100-gr102",
       target: "nls-ley01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr102-nls-ley01a-rb2",
       source: "lls-dc0100-gr102",
       target: "nls-ley01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr102-lls-dc0100-dr101",
       source: "lls-dc0100-gr102",
       target: "lls-dc0100-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr101-nls-ley01a-rb1",
       source: "lls-dc0100-gr101",
       target: "nls-ley01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr101-nls-ley01a-rb2",
       source: "lls-dc0100-gr101",
       target: "nls-ley01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-gr101-lls-dc0100-dr102",
       source: "lls-dc0100-gr101",
       target: "lls-dc0100-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hrv-dc0100-gr102-hrv-dc0100-gr101",
       source: "hrv-dc0100-gr102",
       target: "hrv-dc0100-gr101",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hrv-dc0100-gr102-nls-hrv01a-rb1",
       source: "hrv-dc0100-gr102",
       target: "nls-hrv01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hrv-dc0100-gr102-nls-hrv01a-rb2",
       source: "hrv-dc0100-gr102",
       target: "nls-hrv01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hrv-dc0100-gr101-nls-hrv01a-rb1",
       source: "hrv-dc0100-gr101",
       target: "nls-hrv01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hrv-dc0100-gr101-nls-hrv01a-rb2",
       source: "hrv-dc0100-gr101",
       target: "nls-hrv01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr102-nm-dc0100-gr101",
       source: "nm-dc0100-gr102",
       target: "nm-dc0100-gr101",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr102-nls-nij01a-rb1",
       source: "nm-dc0100-gr102",
       target: "nls-nij01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr102-nls-nij01a-rb2",
       source: "nm-dc0100-gr102",
       target: "nls-nij01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr102-nm-dc0100-dr102",
       source: "nm-dc0100-gr102",
       target: "nm-dc0100-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr101-nls-nij01a-rb1",
       source: "nm-dc0100-gr101",
       target: "nls-nij01a-rb1",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr101-nls-nij01a-rb2",
       source: "nm-dc0100-gr101",
       target: "nls-nij01a-rb2",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-gr101-nm-dc0100-dr101",
       source: "nm-dc0100-gr101",
       target: "nm-dc0100-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-rtm03a-rb1-rt-dc0173-gr102",
       source: "nls-rtm03a-rb1",
       target: "rt-dc0173-gr102",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-rtm03a-rb1-rt-dc0173-gr101",
       source: "nls-rtm03a-rb1",
       target: "rt-dc0173-gr101",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-rtm03a-rb2-rt-dc0173-gr102",
       source: "nls-rtm03a-rb2",
       target: "rt-dc0173-gr102",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-rtm03a-rb2-rt-dc0173-gr101",
       source: "nls-rtm03a-rb2",
       target: "rt-dc0173-gr101",
       label: ["5000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-mnd01a-ra50-nls-mnd01a-ra60",
       source: "nls-mnd01a-ra50",
       target: "nls-mnd01a-ra60",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0173-gr102-rt-dc0173-gr101",
       source: "rt-dc0173-gr102",
       target: "rt-dc0173-gr101",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-dc0173-gr102-rt-dc0173-dr102",
       source: "rt-dc0173-gr102",
       target: "rt-dc0173-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nls-tbg01a-ra50-nls-tbg01a-ra60",
       source: "nls-tbg01a-ra50",
       target: "nls-tbg01a-ra60",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-rt-lc0100-dr102-rt-dc0173-dr102",
       source: "rt-lc0100-dr102",
       target: "rt-dc0173-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zp-dc0100-dr101-zp-dc0100-dr102",
       source: "zp-dc0100-dr101",
       target: "zp-dc0100-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-lls-dc0100-dr101-lls-dc0100-dr102",
       source: "lls-dc0100-dr101",
       target: "lls-dc0100-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hm-dc0100-dr102-hm-dc0100-dr103",
       source: "hm-dc0100-dr102",
       target: "hm-dc0100-dr103",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ehv-dc0002-dr102-hm-dc0100-dr104",
       source: "ehv-dc0002-dr102",
       target: "hm-dc0100-dr104",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-nm-dc0100-dr101-nm-dc0100-dr102",
       source: "nm-dc0100-dr101",
       target: "nm-dc0100-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-weer-dc0002-dr102-venls-dc0003-dr102",
       source: "weer-dc0002-dr102",
       target: "venls-dc0003-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-weer-dc0002-dr102-weer-dc0002-gr101",
       source: "weer-dc0002-dr102",
       target: "weer-dc0002-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-venls-dc0003-dr102-venls-dc0003-gr102",
       source: "venls-dc0003-dr102",
       target: "venls-dc0003-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-asn-dc0002-dr102-gn-dc0002-dr102",
       source: "asn-dc0002-dr102",
       target: "gn-dc0002-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-asn-dc0002-dr102-asn-dc0002-gr101",
       source: "asn-dc0002-dr102",
       target: "asn-dc0002-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gn-dc0002-dr102-gn-dc0002-gr102",
       source: "gn-dc0002-dr102",
       target: "gn-dc0002-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0010-dr102-gv-dc0052-dr102",
       source: "gv-dc0010-dr102",
       target: "gv-dc0052-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0010-dr102-gv-dc0010-gr101",
       source: "gv-dc0010-dr102",
       target: "gv-dc0010-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0052-dr102-gv-dc0052-gr102",
       source: "gv-dc0052-dr102",
       target: "gv-dc0052-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-vnn-dc0001-dr102-amr-dc0010-dr102",
       source: "vnn-dc0001-dr102",
       target: "amr-dc0010-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-vnn-dc0001-dr102-vnn-dc0001-gr101",
       source: "vnn-dc0001-dr102",
       target: "vnn-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-amr-dc0010-dr102-amr-dc0010-gr102",
       source: "amr-dc0010-dr102",
       target: "amr-dc0010-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0001-dr102-hvs-dc0002-dr102",
       source: "mnd-dc0001-dr102",
       target: "hvs-dc0002-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0001-dr102-mnd-dc0001-gr101",
       source: "mnd-dc0001-dr102",
       target: "mnd-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hvs-dc0002-dr102-hvs-dc0001-gr102",
       source: "hvs-dc0002-dr102",
       target: "hvs-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-dv-dc0001-dr102-zl-dc0001-dr102",
       source: "dv-dc0001-dr102",
       target: "zl-dc0001-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-dv-dc0001-dr102-dv-dc0001-gr101",
       source: "dv-dc0001-dr102",
       target: "dv-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zl-dc0001-dr102-zl-dc0001-gr102",
       source: "zl-dc0001-dr102",
       target: "zl-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr102-ht-dc0001-dr102",
       source: "tb-dc0001-dr102",
       target: "ht-dc0001-dr102",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-dr102-tb-dc0001-gr101",
       source: "tb-dc0001-dr102",
       target: "tb-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ht-dc0001-dr102-ht-dc0001-gr102",
       source: "ht-dc0001-dr102",
       target: "ht-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-mnd-dc0002-gr103-re0-mnd-dc0002-gr104",
       source: "re0-mnd-dc0002-gr103",
       target: "re0-mnd-dc0002-gr104",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-mnd-dc0002-gr103-mnd-dc0001-gr101",
       source: "re0-mnd-dc0002-gr103",
       target: "mnd-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-mnd-dc0002-gr104-hvs-dc0001-gr102",
       source: "re0-mnd-dc0002-gr104",
       target: "hvs-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-tb-dc0001-gr103-re0-tb-dc0001-gr104",
       source: "re0-tb-dc0001-gr103",
       target: "re0-tb-dc0001-gr104",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-tb-dc0001-gr103-tb-dc0001-gr101",
       source: "re0-tb-dc0001-gr103",
       target: "tb-dc0001-gr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-tb-dc0001-gr104-ht-dc0001-gr102",
       source: "re0-tb-dc0001-gr104",
       target: "ht-dc0001-gr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-ams-tr0610-dr101-re0-ams-tr0042-dr101",
       source: "re0-ams-tr0610-dr101",
       target: "re0-ams-tr0042-dr101",
       label: ["400"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-ams-tr0610-dr101-re0-ams-tr0409-dr101",
       source: "re0-ams-tr0610-dr101",
       target: "re0-ams-tr0409-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-ams-tr0610-dr101-re0-ams-tr0410-dr102",
       source: "re0-ams-tr0610-dr101",
       target: "re0-ams-tr0410-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-ams-tr0042-dr101-re0-ams-tr0409-dr101",
       source: "re0-ams-tr0042-dr101",
       target: "re0-ams-tr0409-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-re0-ams-tr0042-dr101-re0-ams-tr0410-dr102",
       source: "re0-ams-tr0042-dr101",
       target: "re0-ams-tr0410-dr102",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-asn-dc0002-gr101-gn-dc0002-gr102",
       source: "asn-dc0002-gr101",
       target: "gn-dc0002-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-asn-dc0002-gr101-re0-gn-dc0002-dr101",
       source: "asn-dc0002-gr101",
       target: "re0-gn-dc0002-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-asn-dc0002-gr101-re0-emn-dc0001-dr101",
       source: "asn-dc0002-gr101",
       target: "re0-emn-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gn-dc0002-gr102-re0-gn-dc0002-dr101",
       source: "gn-dc0002-gr102",
       target: "re0-gn-dc0002-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gn-dc0002-gr102-re0-emn-dc0001-dr101",
       source: "gn-dc0002-gr102",
       target: "re0-emn-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-dv-dc0001-gr101-zl-dc0001-gr102",
       source: "dv-dc0001-gr101",
       target: "zl-dc0001-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-dv-dc0001-gr101-re0-zl-dc0001-dr101",
       source: "dv-dc0001-gr101",
       target: "re0-zl-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-zl-dc0001-gr102-re0-zl-dc0001-dr101",
       source: "zl-dc0001-gr102",
       target: "re0-zl-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr101-ht-dc0001-gr102",
       source: "tb-dc0001-gr101",
       target: "ht-dc0001-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr101-re0-ht-dc0001-dr101",
       source: "tb-dc0001-gr101",
       target: "re0-ht-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr101-re0-tb-dc0001-dr101",
       source: "tb-dc0001-gr101",
       target: "re0-tb-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-tb-dc0001-gr101-re0-bd-dc0002-dr101",
       source: "tb-dc0001-gr101",
       target: "re0-bd-dc0002-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ht-dc0001-gr102-re0-ht-dc0001-dr101",
       source: "ht-dc0001-gr102",
       target: "re0-ht-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ht-dc0001-gr102-re0-tb-dc0001-dr101",
       source: "ht-dc0001-gr102",
       target: "re0-tb-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-ht-dc0001-gr102-re0-bd-dc0002-dr101",
       source: "ht-dc0001-gr102",
       target: "re0-bd-dc0002-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-weer-dc0002-gr101-venls-dc0003-gr102",
       source: "weer-dc0002-gr101",
       target: "venls-dc0003-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-weer-dc0002-gr101-re0-ah-tr0002-dr108",
       source: "weer-dc0002-gr101",
       target: "re0-ah-tr0002-dr108",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-venls-dc0003-gr102-re0-ah-tr0002-dr108",
       source: "venls-dc0003-gr102",
       target: "re0-ah-tr0002-dr108",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-vnn-dc0001-gr101-amr-dc0010-gr102",
       source: "vnn-dc0001-gr101",
       target: "amr-dc0010-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-vnn-dc0001-gr101-re0-vnn-dc0001-dr101",
       source: "vnn-dc0001-gr101",
       target: "re0-vnn-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-amr-dc0010-gr102-re0-vnn-dc0001-dr101",
       source: "amr-dc0010-gr102",
       target: "re0-vnn-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0001-gr101-hvs-dc0001-gr102",
       source: "mnd-dc0001-gr101",
       target: "hvs-dc0001-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-mnd-dc0001-gr101-re0-mnd-dc0001-dr101",
       source: "mnd-dc0001-gr101",
       target: "re0-mnd-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-hvs-dc0001-gr102-re0-mnd-dc0001-dr101",
       source: "hvs-dc0001-gr102",
       target: "re0-mnd-dc0001-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0010-gr101-gv-dc0052-gr102",
       source: "gv-dc0010-gr101",
       target: "gv-dc0052-gr102",
       label: ["200"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0010-gr101-re0-gv-dc0010-dr101",
       source: "gv-dc0010-gr101",
       target: "re0-gv-dc0010-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0010-gr101-re0-rt-tr0006-dr108",
       source: "gv-dc0010-gr101",
       target: "re0-rt-tr0006-dr108",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0052-gr102-re0-gv-dc0010-dr101",
       source: "gv-dc0052-gr102",
       target: "re0-gv-dc0010-dr101",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-gv-dc0052-gr102-re0-rt-tr0006-dr108",
       source: "gv-dc0052-gr102",
       target: "re0-rt-tr0006-dr108",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9001-HM-001-TVF-C9001-HM-002",
       source: "TVF-C9001-HM-001",
       target: "TVF-C9001-HM-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9001-HM-001-TVF-C9102-AMS-001",
       source: "TVF-C9001-HM-001",
       target: "TVF-C9102-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1002-AMS-003-TVF-C9102-AMS-001",
       source: "TVF-D1002-AMS-003",
       target: "TVF-C9102-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-D1002-AMS-005-TVF-C9102-AMS-001",
       source: "TVF-D1002-AMS-005",
       target: "TVF-C9102-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-001-TVF-C9006-AMS-003",
       source: "TVF-C9102-AMS-001",
       target: "TVF-C9006-AMS-003",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-001-TVF-C9901-AMS-002",
       source: "TVF-C9102-AMS-001",
       target: "TVF-C9901-AMS-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-001-TVF-C9001-AMS-002",
       source: "TVF-C9102-AMS-001",
       target: "TVF-C9001-AMS-002",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9102-AMS-001-TVF-C9006-AMS-001",
       source: "TVF-C9102-AMS-001",
       target: "TVF-C9006-AMS-001",
       label: ["2000"],
       edgeId: "1",
       type: "quadratic",
   },
   {
       id: "edge-TVF-C9001-MT-001-TVF-C9001-MT-002",
       source: "TVF-C9001-MT-001",
       target: "TVF-C9001-MT-002",
       label: ["4000"],
       edgeId: "1",
       type: "quadratic",
   }
   
 
   ]
 }

 const data1 = {
  nodes: [
    { id: 'TVF-D1002-AMS-001', label: 'TVF-D1002-AMS-001', region: 'Cluster1' },
    { id: 'TVF-C9102-AMS-002', label: 'TVF-C9102-AMS-002', region: 'Cluster1' },
    { id: 'TVF-C9102-AMS-001', label: 'TVF-C9102-AMS-001', region: 'Cluster1' },
    { id: 'TVF-D1002-AMS-002', label: 'TVF-D1002-AMS-002', region: 'Cluster2'},//
    { id: 'TVF-C9102-AMS-003', label: 'TVF-C9102-AMS-003',region:'Cluster2'  },//
    { id: 'TVF-C9102-AMS-004', label: 'TVF-C9102-AMS-004', region: 'Cluster2'},//
{ id: 'TVF-CSR1000-AMS-001', label: 'TVF-CSR1000-AMS-001', region: 'Cluster1' },
{ id: 'TVF-CSR1000-AMS-002', label: 'TVF-CSR1000-AMS-002', region: 'Cluster2'},//
    { id: 'TVF-D1001-AMS-005', label: 'TVF-D1001-AMS-005', region: 'Cluster1' },
    { id: 'TVF-C9006-AH-001', label: 'TVF-C9006-AH-001', region: 'Cluster1'   },
    { id: 'TVF-CCRS1-AMS-200', label: 'TVF-CCRS1-AMS-200', region: 'Cluster1' },
    { id: 'ams-dc0001-gr101', label: 'ams-dc0001-gr101', region: 'Cluster1'  },
    { id: 'TVF-D1002-AMS-005', label: 'TVF-D1002-AMS-005', region: 'Cluster1' },
    { id: 'TVF-C9001-MT-001', label: 'TVF-C9001-MT-001', region: 'Cluster1'   },
    { id: 'TVF-C9001-AMS-002', label: 'TVF-C9001-AMS-002', region: 'Cluster1' }
  ],
  edges: [
    { source: 'TVF-D1002-AMS-001', target: 'TVF-C9102-AMS-002', value: 2000 },
    { source: 'TVF-D1002-AMS-001', target: 'TVF-C9102-AMS-001', value: 2000 },
    { source: 'TVF-D1002-AMS-002', target: 'TVF-C9102-AMS-003', value: 2000 },
    { source: 'TVF-D1002-AMS-002', target: 'TVF-C9102-AMS-004', value: 2000 },
    { source: 'TVF-CSR1000-AMS-001', target: 'TVF-C9102-AMS-002', value: 16777214 },
    { source: 'TVF-CSR1000-AMS-001', target: 'TVF-C9102-AMS-001', value: 2000 },
    { source: 'TVF-CSR1000-AMS-002', target: 'TVF-C9102-AMS-003', value: 2000 },
    { source: 'TVF-CSR1000-AMS-002', target: 'TVF-C9102-AMS-004', value: 2000 },
    { source: 'TVF-D1001-AMS-005', target: 'TVF-C9102-AMS-002', value: 2000 },
    { source: 'TVF-D1001-AMS-005', target: 'TVF-C9102-AMS-001', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9006-AH-001', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-CCRS1-AMS-200', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'ams-dc0001-gr101', value: 1000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-D1002-AMS-005', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9102-AMS-001', value: 1000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9001-MT-001', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9001-AMS-002', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9006-AMS-001', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-C9102-AMS-004', value: 1000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-D1006-AMS-004', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-C9901-AMS-001', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-CCRS1-UT-200', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'ams-dc0001-gr101', value: 1000 }
  ]
}

const animateCfg = { duration: 200, easing: "easeCubic" };

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

const GraphComponent = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    const graphDiv = graphRef.current;
    const width = graphDiv.scrollWidth;
    const height = graphDiv.scrollHeight - 30;

    const colors = ['#f5222d', '#faad14', '#a0d911', '#13c2c2', '#1890ff', '#b37feb', '#000'];
    const beginColor = '#5b8c00'; // green
    const endColor = '#ff4d4f'; // red

    // Generate large dummy data
    const regions = ['ClusterA', 'ClusterB', 'ClusterC', 'ClusterD', 'ClusterE', 'ClusterF','ClusterG'];


    const data1 = {
  nodes: [
    { id: 'TVF-D1002-AMS-001', label: 'TVF-D1002-AMS-001', region: 'Cluster1' },
    { id: 'TVF-C9102-AMS-002', label: 'TVF-C9102-AMS-002', region: 'Cluster2' },
    { id: 'TVF-C9102-AMS-001', label: 'TVF-C9102-AMS-001', region: 'Cluster1' },
    { id: 'TVF-D1002-AMS-002', label: 'TVF-D1002-AMS-002', region: 'Cluster2'},
    { id: 'TVF-C9102-AMS-003', label: 'TVF-C9102-AMS-003',region:'Cluster2'  },
    { id: 'TVF-C9102-AMS-004', label: 'TVF-C9102-AMS-004', region: 'Cluster2'},
{ id: 'TVF-CSR1000-AMS-001', label: 'TVF-CSR1000-AMS-001', region: 'Cluster1' },
{ id: 'TVF-CSR1000-AMS-002', label: 'TVF-CSR1000-AMS-002', region: 'Cluster2'},
    { id: 'TVF-D1001-AMS-005', label: 'TVF-D1001-AMS-005', region: 'Cluster1' },
    { id: 'TVF-C9006-AH-001', label: 'TVF-C9006-AH-001', region: 'Cluster1'   },
    { id: 'TVF-CCRS1-AMS-200', label: 'TVF-CCRS1-AMS-200', region: 'Cluster1' },
    { id: 'ams-dc0001-gr101', label: 'ams-dc0001-gr101', region: 'Cluster1'  },
    { id: 'TVF-D1002-AMS-005', label: 'TVF-D1002-AMS-005', region: 'Cluster1' },
    { id: 'TVF-C9001-MT-001', label: 'TVF-C9001-MT-001', region: 'Cluster1'   },
    { id: 'TVF-C9001-AMS-002', label: 'TVF-C9001-AMS-002', region: 'Cluster1' }
  ],
  edges: [
    { source: 'TVF-D1002-AMS-001', target: 'TVF-C9102-AMS-002', value: 2000 },
    { source: 'TVF-D1002-AMS-001', target: 'TVF-C9102-AMS-001', value: 2000 },
    { source: 'TVF-D1002-AMS-002', target: 'TVF-C9102-AMS-003', value: 2000 },
    { source: 'TVF-D1002-AMS-002', target: 'TVF-C9102-AMS-004', value: 2000 },
    { source: 'TVF-CSR1000-AMS-001', target: 'TVF-C9102-AMS-002', value: 16777214 },
    { source: 'TVF-CSR1000-AMS-001', target: 'TVF-C9102-AMS-001', value: 2000 },
    { source: 'TVF-CSR1000-AMS-002', target: 'TVF-C9102-AMS-003', value: 2000 },
    { source: 'TVF-CSR1000-AMS-002', target: 'TVF-C9102-AMS-004', value: 2000 },
    { source: 'TVF-D1001-AMS-005', target: 'TVF-C9102-AMS-002', value: 2000 },
    { source: 'TVF-D1001-AMS-005', target: 'TVF-C9102-AMS-001', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9006-AH-001', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-CCRS1-AMS-200', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'ams-dc0001-gr101', value: 1000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-D1002-AMS-005', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9102-AMS-001', value: 1000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9001-MT-001', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9001-AMS-002', value: 2000 },
    { source: 'TVF-C9102-AMS-002', target: 'TVF-C9006-AMS-001', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-C9102-AMS-004', value: 1000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-D1006-AMS-004', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-C9901-AMS-001', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'TVF-CCRS1-UT-200', value: 2000 },
    { source: 'TVF-C9102-AMS-003', target: 'ams-dc0001-gr101', value: 1000 }
  ]
}



const data2 =  {
  nodes: [
    { id: 'TVF-D1002-AMS-001', isLeaf: false, region: 'Cluster1' },
    { id: 'TVF-C9102-AMS-002', isLeaf: true, region: 'Cluster1' },
    { id: 'TVF-C9102-AMS-001', isLeaf: true, region: 'Cluster1' },
    { id: 'TVF-D1002-AMS-002', isLeaf: false },
    { id: 'TVF-C9102-AMS-003', isLeaf: true },
    { id: 'TVF-C9102-AMS-004', isLeaf: true },
    { id: 'TVF-CSR1000-AMS-001', isLeaf: false, region: 'Cluster1' },
    { id: 'TVF-CSR1000-AMS-002', isLeaf: false },
    { id: 'TVF-D1001-AMS-005', isLeaf: false, region: 'Cluster1' },
    { id: 'TVF-C9006-AH-001', isLeaf: true, region: 'Cluster1' },
    { id: 'TVF-CCRS1-AMS-200', isLeaf: true, region: 'Cluster1' },
    { id: 'ams-dc0001-gr101', isLeaf: true, region: 'Cluster1' },
    { id: 'TVF-D1002-AMS-005', isLeaf: true, region: 'Cluster1' },
    { id: 'TVF-C9001-MT-001', isLeaf: true, region: 'Cluster1' },
    { id: 'TVF-C9001-AMS-002', isLeaf: true, region: 'Cluster1' }
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
}


    
const nodes = data.nodes;
const edges = data.edges;

const nodeMap = new Map();
const clusterMap = new Map();
const clusterConnections = new Map(); 
let cidx = 0;

// Initialize node and cluster information
nodes.forEach(function(n) {
  nodeMap.set(n.id, n);
  let region = '';
  if (n.region) {
    let regionParts = n.region.split(' ');
    region = regionParts[regionParts.length - 1];
  }

  if (clusterMap.get(region) === undefined) {
    clusterMap.set(region, cidx);
    cidx++;
  }
  const clusterId = clusterMap.get(region);
  const color = colors[clusterId % colors.length];
  n.style = {
    color,
    fill: color,
    stroke: '#666',
    lineWidth: 3,
  };
  n.style.size = 70;
  n.cluster = clusterId;
  // n.importValue = 0;
  // n.exportValue = 0;
});

// Calculate import and export values for nodes
edges.forEach(function (e) {
  if (e.value === '') e.value = 0;
  const v = parseFloat(e.value);
  const sourceNode = nodeMap.get(e.source);
  const targetNode = nodeMap.get(e.target);

  if (sourceNode && targetNode) { // Add this check
    sourceNode.exportValue += v;
    targetNode.importValue += v;

    const sourceCluster = sourceNode.cluster;
    const targetCluster = targetNode.cluster;

    if (sourceCluster !== targetCluster) {
      const key = `${Math.min(sourceCluster, targetCluster)}-${Math.max(sourceCluster, targetCluster)}`;
      if (!clusterConnections.has(key)) {
        clusterConnections.set(key, { sourceCluster, targetCluster, value: 0 });
      }
      clusterConnections.get(key).value += v;
    }
  }
});


// Utility function to map values to a specific property
function mapValueToProp(items, valueName, propName, range) {
  const valueRange = [ 9999999999, -9999999999 ];
  items.forEach(function(n) {
    if (n[valueName] > valueRange[1]) valueRange[1] = n[valueName];
    if (n[valueName] < valueRange[0]) valueRange[0] = n[valueName];
  });
  const valueLength = valueRange[1] - valueRange[0];
  const rLength = range[1] - range[0];
  const propNameStrs = propName.split('.');
  if (propNameStrs[0] === 'style' && propNameStrs.length > 1) {
    items.forEach(function(n) {
      if (n.style === undefined) n.style = {};
      n.style[propNameStrs[1]] = rLength * (n[valueName] - valueRange[0]) / valueLength + range[0];
    });
  } else {
    items.forEach(function(n) {
      n[propNameStrs[0]] = rLength * (n[valueName] - valueRange[0]) / valueLength + range[0];
    });
  }
}


mapValueToProp(nodes, 'exportValue', 'sizee', [2, 12]);

const graph = new G6.Graph({
  container: graphDiv,
  width,
  height,
  linkCenter: true,
  pixelRatio: 2,
  fitView: true,
  layout: {
    type: 'force',
    maxIteration: 8000,
    gravity: 10,
    nodeSpacing:600,
    clustering: true,
    clusterGravity: 30,
    workerEnabled: false,
    linkDistance: 100,
    animate: true,
    animation:true,
    preventOverlap: true,
    nodeSize: 200,
  },
  defaultNode: {
     type: "image",
  size: [270, 270],
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
  modes: {
    default: [
      'drag-node',
      'drag-canvas',
      'zoom-canvas',
      {
        type: 'tooltips',
        formatText: function formatText(model) {
          let name = '';
          let countries = '';
          if (model.name) name = model.name + '<br/>';
          if (model.countries) countries = '<br/>Number of Countries: ' + model.countries;
          const text = `${name} Export Value: ${model.exportValue}(1000USD)<br/>Region: ${model.region}<br/>Cluster: ${model.cluster} ${countries}`;
          return text;
        },
        shouldUpdate: function shouldUpdate() {
          return true;
        },
      },
    ],
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

graph.on('afterlayout', function () {
  const graphDiv = document.getElementById('description');
  if (graphDiv) {
    graphDiv.innerHTML = 'Done!';
  }
});

graph.data({
  nodes: data.nodes,
  edges: modifiedEdges,
});
graph.render();

function clearAllStats() {
  graph.setAutoPaint(false);
  graph.getNodes().forEach(function (node) {
    graph.clearItemStates(node);
  });
  graph.getEdges().forEach(function (edge) {
    graph.clearItemStates(edge);
  });
  graph.getEdges().forEach(function (edge) {
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

  graph.paint();
  graph.setAutoPaint(true);
}

// graph.on("node:mouseenter", function (e) {
//   const item = e.item;
//   const connectedNodes = new Set();
//   const connectedEdges = new Set();

//   graph.getEdges().forEach(function (edge) {
//     if (edge.getSource() === item || edge.getTarget() === item) {
//       connectedEdges.add(edge);
//       if (edge.getSource() === item) {
//         connectedNodes.add(edge.getTarget());
//       } else {
//         connectedNodes.add(edge.getSource());
//       }
//     }
//   });

//   graph.getNodes().forEach(function (node) {
//     if (node === item || connectedNodes.has(node)) {
//       graph.setItemState(node, "dark", false);
//       graph.setItemState(node, "highlight", true);
//       const labelElements = node
//         .getContainer()
//         .findAll((element) => element.get("className") === "node-label");
//       if (labelElements) {
//         labelElements.forEach((label) => {
//           label.attr("fillOpacity", 1); // Display node labels
//           label.attr("stroke-opacity", 1); // Adjust opacity as needed
//         });
//       }
//     } else {
//       graph.setItemState(node, "dark", true);
//       const labelElements = node
//         .getContainer()
//         .findAll((element) => element.get("className") === "node-label");
//       if (labelElements) {
//         labelElements.forEach((label) => {
//           label.attr("fillOpacity", 0); // Dim node labels
//           label.attr("stroke-opacity", 0); // Adjust opacity as needed
//         });
//       }
//     }
//   });

//   graph.getEdges().forEach(function (edge) {
//     if (connectedEdges.has(edge)) {
//       graph.setItemState(edge, "dark", false);
//       graph.setItemState(edge, "highlight", true);
//       edge.toFront();
//       const labelElement = edge
//         .getContainer()
//         .findAll((element) => element.get("className") === "edge-label");
//       if (labelElement) {
//         labelElement.forEach((label) => {
//           label.attr("fillOpacity", 1); // Display edge labels
//           label.attr("stroke-opacity", 1); // Adjust opacity as needed
//         });
//       }
//     } else {
//       graph.setItemState(edge, "dark", true);
//       const labelElement = edge
//         .getContainer()
//         .findAll((element) => element.get("className") === "edge-label");
//       if (labelElement) {
//         labelElement.forEach((label) => {
//           label.attr("fillOpacity", 0); // Dim edge labels
//           label.attr("stroke-opacity", 0); // Adjust opacity as needed
//         });
//       }
//     }
//   });

//   graph.paint();
// });
// graph.on("node:mouseleave", clearAllStats);
// graph.on("canvas:click", clearAllStats);

// Update edge styles after rendering



const edgeItems = graph.getEdges();
edgeItems.forEach(function (e) {
  const lineWidth = 20;
  const strokeOpacity = 2;
  let stroke = 'l(0) 0:' + beginColor + ' 1:' + endColor;
  const sourceModel = e.getSource().getModel();
  const targetModel = e.getTarget().getModel();
  if (sourceModel.x > targetModel.x) {
    stroke = 'l(0) 0:' + endColor + ' 1:' + beginColor;
  }
  e.update({
    style: {
      lineWidth,
      strokeOpacity,
      stroke,
    },
  });
});
graph.paint();

// Handle node clicks to expand/collapse clusters
// Handle node clicks to expand/collapse clusters
graph.on('node:click', function (e) {
  const targetItem = e.item;
  const model = targetItem.getModel();
  const graphEdges = graph.getEdges();
  const graphNodes = graph.getNodes();

  if (model.id.startsWith('cluster')) {
    // Expand cluster nodes (same as before)
    graphNodes.forEach(function (gn) {
      const gnModel = gn.getModel();
      if (gnModel.cluster === model.cluster && !gnModel.id.startsWith('cluster')) {
        gn.show();
      }
      if (gnModel.id === model.id) graph.removeItem(gn);
    });

    graphEdges.forEach(function (ge) {
      const sourceModel = ge.get('sourceNode').getModel();
      const targetModel = ge.get('targetNode').getModel();
      if (
        (sourceModel.cluster === model.cluster && !sourceModel.id.startsWith('cluster')) ||
        (targetModel.cluster === model.cluster && !targetModel.id.startsWith('cluster'))
      ) {
        ge.show();
        if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) {
          ge.hide();
        }
      }
      if (sourceModel.id === model.id || targetModel.id === model.id) {
        graph.removeItem(ge);
      }
    });
  } else {
    // Collapse cluster nodes
    const center = { x: 0, y: 0, count: 0, exportValue: 0 };
    nodes.forEach(function (n) {
      if (n.cluster === model.cluster) {
        center.x += n.x;
        center.y += n.y;
        center.count++;
        center.exportValue += n.exportValue;
      }
    });
    center.x /= center.count;
    center.y /= center.count;
    const size = center.count * 1;
    const clusterNodeId = 'cluster' + model.cluster;
    const color = colors[model.cluster % colors.length];
    const regionStrs = model.region.split(' ');
    let region = regionStrs[regionStrs.length - 1];
    if (model.region === 'East Asia') region = model.region;

    graph.addItem('node', {
      id: clusterNodeId,
      x: center.x,
      y: center.y,
      size:1700,
      label: region,
      labelCfg: {
        style: {
          fontSize: 300,
        },
        position: 'center',
      },
      style: {
        fill: color,
        stroke: '#666',
        lineWidth: 20,
      },
      cluster: model.cluster,
      exportValue: center.exportValue,
      region,
      countries: center.count,
    });

    // Add edges between clusters and non-cluster nodes
    graphEdges.forEach(function (ge) {
      const sourceModel = ge.get('sourceNode').getModel();
      const targetModel = ge.get('targetNode').getModel();
      if (
        (sourceModel.cluster === model.cluster && !sourceModel.id.startsWith('cluster')) ||
        (targetModel.cluster === model.cluster && !targetModel.id.startsWith('cluster'))
      ) {
        const sourceId = sourceModel.cluster === model.cluster ? clusterNodeId : sourceModel.id;
        const targetId = targetModel.cluster === model.cluster ? clusterNodeId : targetModel.id;
        const stroke = 'l(0) 0:' + beginColor + ' 1:' + endColor;
        graph.addItem('edge', {
          source: sourceId,
          target: targetId,
          id: 'cluster-edge-' + sourceId + '-' + targetId,
          style: {
            stroke,
            lineWidth:40,
            strokeOpacity: 1,
          },
        });
        if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) {
          ge.hide();
        }
      }
    });

    // Hide the common nodes in the cluster
    graphNodes.forEach(function (gn) {
      if (gn.getModel().cluster === model.cluster && gn.getModel().id.substr(0, 7) !== 'cluster') gn.hide();
    });
    // Hide the common edges about cluster
    graphEdges.forEach(function (ge) {
      if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) ge.hide();
    });
  }
});




    

    return () => {
      graph.destroy();
    };
  }, []);

  return (
    <div>
      <div id="description">Reading data & Doing layout......</div>
      <div ref={graphRef} style={{ width: '1430px', height: '700px' }}></div>
    </div>
  );
};

export default GraphComponent;
