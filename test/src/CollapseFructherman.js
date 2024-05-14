import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import insertCss from 'insert-css';

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

const colors = ['#f5222d', '#faad14', '#a0d911', '#13c2c2', '#1890ff', '#b37feb', '#eb2f96'];
const beginColor = '#5b8c00'; // green
const endColor = '#ff4d4f'; // red

// Generate large dummy data
const regions = ['East Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'];
const data = {
    nodes: [
      { id: 'node1', label: 'Node 1', region: 'East Asia', importValue: 1000, exportValue: 1500 },
      { id: 'node2', label: 'Node 2', region: 'Europe', importValue: 1200, exportValue: 1600 },
      { id: 'node3', label: 'Node 3', region: 'North America', importValue: 800, exportValue: 900 },
      { id: 'node4', label: 'Node 4', region: 'South America', importValue: 950, exportValue: 700 },
      { id: 'node5', label: 'Node 5', region: 'Africa', importValue: 400, exportValue: 600 },
      { id: 'node6', label: 'Node 6', region: 'Oceania', importValue: 300, exportValue: 500 },
      { id: 'node7', label: 'Node 7', region: 'East Asia', importValue: 1100, exportValue: 1300 },
      { id: 'node8', label: 'Node 8', region: 'Europe', importValue: 1000, exportValue: 1700 },
      { id: 'node9', label: 'Node 9', region: 'North America', importValue: 900, exportValue: 1000 },
      { id: 'node10', label: 'Node 10', region: 'South America', importValue: 950, exportValue: 1100 },
  ],
    edges: [
      { source: 'node1', target: 'node2', value: 300 },
      { source: 'node2', target: 'node3', value: 200 },
      { source: 'node3', target: 'node4', value: 100 },
      { source: 'node4', target: 'node5', value: 400 },
      { source: 'node5', target: 'node6', value: 500 },
      { source: 'node6', target: 'node7', value: 600 },
      { source: 'node7', target: 'node8', value: 700 },
      { source: 'node8', target: 'node9', value: 800 },
      { source: 'node9', target: 'node10', value: 900 },
      { source: 'node10', target: 'node1', value: 1000 },
      ],
  };
  
  const nodes = data.nodes;
  const edges = data.edges;
const nodeMap = new Map();
const clusterMap = new Map();
let cidx = 0;
nodes.forEach(function (n) {
  nodeMap.set(n.id, n);
  let region = n.region.split(' ');
  if (n.region === 'East Asia') region = n.region;
  else region = region[region.length - 1];

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
    lineWidth: 0.6,
  };
  n.cluster = clusterId;
  n.importValue = 0;
  n.exportValue = 0;
});
// Map the value of
edges.forEach(function (e) {
  if (e.value === '') e.value = 0;
  const v = parseFloat(e.value);
  nodeMap.get(e.source).exportValue += v;
  nodeMap.get(e.target).importValue += v;
});

function mapValueToProp(items, valueName, propName, range) {
  const valueRange = [9999999999, -9999999999];
  items.forEach(function (n) {
    if (n[valueName] > valueRange[1]) valueRange[1] = n[valueName];
    if (n[valueName] < valueRange[0]) valueRange[0] = n[valueName];
  });
  const valueLength = valueRange[1] - valueRange[0];
  const rLength = range[1] - range[0];
  const propNameStrs = propName.split('.');
  if (propNameStrs[0] === 'style' && propNameStrs.length > 1) {
    items.forEach(function (n) {
      if (n.style === undefined) n.style = {};
      n.style[propNameStrs[1]] = (rLength * (n[valueName] - valueRange[0])) / valueLength + range[0];
    });
  } else {
    items.forEach(function (n) {
      n[propNameStrs[0]] = (rLength * (n[valueName] - valueRange[0])) / valueLength + range[0];
    });
  }
}

mapValueToProp(nodes, 'exportValue', 'size', [2, 12]);

export default function CollapseForce() {
  const graphRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.scrollWidth;
    const height = container.scrollHeight - 30;

    if (!graphRef.current) {
      graphRef.current = new G6.Graph({
        container: container,
        width,
        height,
        layout: {
          type: 'force',
          preventOverlap: true,
          nodeStrength: -30,
          edgeStrength: 0.1,
          clustering: true,
          clusterNodeStrength: 30,
          nodeSpacing: 50,
          clusterGravity: 100,
          maxIteration: 8000,
          workerEnabled: true,
        },
        fitView: true,
        linkCenter: true,
        defaultNode: {
          shape: 'circle',
          size: 5,
        },
        defaultEdge: {
          shape: 'quadratic',
        },
        modes: {
          default: [
            'drag-node',
            'drag-canvas',
            'zoom-canvas',
            {
              type: 'tooltip',
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
      });

      graphRef.current.on('afterlayout', function () {
        container.innerHTML = 'Done!';
      });

      graphRef.current.data(data);
      graphRef.current.render();

      const edgeItems = graphRef.current.getEdges();
      edgeItems.forEach(function (e) {
        const lineWidth = 0.4;
        const strokeOpacity = 0.2;
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
      graphRef.current.paint();

      graphRef.current.on('node:click', function (e) {
        const targetItem = e.item;
        const model = targetItem.getModel();
        const graphEdges = graphRef.current.getEdges();
        const graphNodes = graphRef.current.getNodes();
        // click on the cluster node
        if (model.id.substr(0, 7) === 'cluster') {
          graphNodes.forEach(function (gn) {
            const gnModel = gn.getModel();
            // show the common nodes
            if (gnModel.cluster === model.cluster && gnModel.id.substr(0, 7) !== 'cluster') {
              gn.show();
            }
            // remove the cluster nodes
            if (gnModel.id === model.id) graphRef.current.removeItem(gn);
          });

          graphEdges.forEach(function (ge) {
            const sourceModel = ge.get('sourceNode').getModel();
            const targetModel = ge.get('targetNode').getModel();
            // show the common edges
            if (
              (sourceModel.cluster === model.cluster && sourceModel.id.substr(0, 7) !== 'cluster') ||
              (targetModel.cluster === model.cluster && targetModel.id.substr(0, 7) !== 'cluster')
            ) {
              ge.show();
              // add the edges to other cluster nodes
              if (!ge.get('sourceNode').get('visible') && sourceModel.cluster !== model.cluster) {
                let c1 = beginColor,
                  c2 = endColor;
                if (model.x > targetModel.x) {
                  c1 = endColor;
                  c2 = beginColor;
                }
                graphRef.current.addItem('edge', {
                  source: 'cluster' + sourceModel.cluster,
                  target: targetModel.id,
                  id: 'cluster-edge-' + ge.id,
                  style: {
                    stroke: 'l(0) 0:' + c1 + ' 1:' + c2,
                    lineWidth: 0.4,
                    strokeOpacity: 0.2,
                  },
                });
              } else if (ge.get('targetNode').get('visible') && targetModel.cluster !== model.cluster) {
                let _c = beginColor,
                  _c2 = endColor;
                if (sourceModel.x > model.x) {
                  _c = endColor;
                  _c2 = beginColor;
                }
                graphRef.current.addItem('edge', {
                  source: sourceModel.id,
                  target: 'cluster' + targetModel.id,
                  id: 'cluster-edge-' + ge.id,
                  style: {
                    stroke: 'l(0) 0:' + _c + ' 1:' + _c2,
                    lineWidth: 0.4,
                    strokeOpacity: 0.2,
                  },
                });
              }
              // hide the edges to the common nodes in other clusters
              if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) {
                ge.hide();
              }
            }
            // remove the cluster edges
            if (sourceModel.id === model.id || targetModel.id === model.id) {
              graphRef.current.removeItem(ge);
            }
          });
        } else {
          // click on the common node, collapse them
          // calculate the cluster center
          const center = {
            x: 0,
            y: 0,
            count: 0,
            exportValue: 0,
          };
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
          // add cluster node on the center
          const size = center.count * 1;
          const clusterNodeId = 'cluster' + model.cluster;
          const color = colors[model.cluster % colors.length];
          const regionStrs = model.region.split(' ');
          let region = regionStrs[regionStrs.length - 1];
          if (model.region === 'East Asia') region = model.region;
          let labelPosition = 'center';
          if (region.length > size) labelPosition = 'left';
          graphRef.current.addItem('node', {
            x: center.x,
            y: center.y,
            id: clusterNodeId,
            cluster: model.cluster,
            region,
            countries: center.count,
            exportValue: center.exportValue,
            style: {
              color,
              fill: color,
              stroke: '#666',
              lineWidth: 0.6,
            },
            size,
            label: region,
            labelCfg: {
              style: {
                fontSize: 8.5,
              },
              position: labelPosition,
            },
          });

          // add edges about the cluster
          graphEdges.forEach(function (ge) {
            const sourceModel = ge.get('sourceNode').getModel();
            const targetModel = ge.get('targetNode').getModel();
            if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) return;
            if (sourceModel.cluster === model.cluster && targetModel.cluster !== model.cluster) {
              let c1 = beginColor,
                c2 = endColor;
              if (center.x > targetModel.x) {
                c1 = endColor;
                c2 = beginColor;
              }
              graphRef.current.addItem('edge', {
                source: clusterNodeId,
                target: targetModel.id,
                id: 'cluster-edge-' + ge.id,
                style: {
                  stroke: 'l(0) 0:' + c1 + ' 1:' + c2,
                  lineWidth: 0.4,
                  strokeOpacity: 0.2,
                },
              });
            } else if (targetModel.cluster === model.cluster && sourceModel.cluster !== model.cluster) {
              let _c3 = beginColor,
                _c4 = endColor;
              if (sourceModel.x > center.x) {
                _c3 = endColor;
                _c4 = beginColor;
              }
              graphRef.current.addItem('edge', {
                source: sourceModel.id,
                target: clusterNodeId,
                id: 'cluster-edge-' + ge.id,
                style: {
                  stroke: 'l(0) 0:' + _c3 + ' 1:' + _c4,
                  lineWidth: 0.4,
                  strokeOpacity: 0.2,
                },
              });
            }
          });

          // hide the common nodes in the cluster
          graphNodes.forEach(function (gn) {
            if (gn.getModel().cluster === model.cluster && gn.getModel().id.substr(0, 7) !== 'cluster') gn.hide();
          });
          // hide the common edges about cluster
          graphEdges.forEach(function (ge) {
            if (!ge.get('sourceNode').get('visible') || !ge.get('targetNode').get('visible')) ge.hide();
          });
        }
      });

      // Cleanup function
      return () => {
        graphRef.current?.destroy();
        graphRef.current = null;
      };
    }

    if (typeof window !== 'undefined') {
      window.onresize = () => {
        if (!graphRef.current || graphRef.current.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graphRef.current.changeSize(container.scrollWidth, container.scrollHeight);
      };
    }
  }, []);

  return <div ref={containerRef} id="App" style={{ width: '100%', height: '100vh' }}></div>;
}
