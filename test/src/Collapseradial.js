import React, { useEffect, useState, useRef } from "react";
import G6 from "@antv/g6";

const dummyData = {
    "id": "Modeling Methods",
    "children": [
      {
        "id": "Classification",
        "children": [
          {
            "id": "Logistic regression"
          },
          {
            "id": "Linear discriminant analysis"
          },
          {
            "id": "Rules"
          },
          {
            "id": "Decision trees"
          },
          {
            "id": "Naive Bayes"
          },
          {
            "id": "K nearest neighbor"
          },
          {
            "id": "Probabilistic neural network"
          },
          {
            "id": "Support vector machine"
          }
        ]
      },
      {
        "id": "Consensus",
        "children": [
          {
            "id": "Models diversity",
            "children": [
              {
                "id": "Different initializations"
              },
              {
                "id": "Different parameter choices"
              },
              {
                "id": "Different architectures"
              },
              {
                "id": "Different modeling methods"
              },
              {
                "id": "Different training sets"
              },
              {
                "id": "Different feature sets"
              }
            ]
          },
          {
            "id": "Methods",
            "children": [
              {
                "id": "Classifier selection"
              },
              {
                "id": "Classifier fusion"
              }
            ]
          },
          {
            "id": "Common",
            "children": [
              {
                "id": "Bagging"
              },
              {
                "id": "Boosting"
              },
              {
                "id": "AdaBoost"
              }
            ]
          }
        ]
      },
      {
        "id": "Regression",
        "children": [
          {
            "id": "Multiple linear regression"
          },
          {
            "id": "Partial least squares"
          },
          {
            "id": "Multi-layer feedforward neural network"
          },
          {
            "id": "General regression neural network"
          },
          {
            "id": "Support vector regression"
          }
        ]
      }
    ]
  };


export default function Collapse() {

    const graphRef = React.createRef(null);

    useEffect(() => {
    
const container = document.getElementById('App');
const width = container.scrollWidth;
const height = container.scrollHeight || 700;
if (!graphRef.current) {
    graphRef.current = new G6.TreeGraph({
  container: container,
  width,
  height,
  linkCenter: true,
  modes: {
    default: [
      {
        type: 'collapse-expand',
        onChange: function onChange(item, collapsed) {
          const data = item.get('model');
          data.collapsed = collapsed;
          return true;
        },
      },
      'drag-canvas',
      'zoom-canvas',
    ],
  },
  defaultNode: {
    size: 26,
  },
  layout: {
    type: 'compactBox',
    direction: 'RL',
    getId: function getId(d) {
      return d.id;
    },
    getHeight: () => {
      return 26;
    },
    getWidth: () => {
      return 26;
    },
    getVGap: () => {
      return 20;
    },
    getHGap: () => {
      return 30;
    },
    radial: true,
  },
});

graphRef.current .node(function (node) {
  return {
    label: node.id,
  };
});

graphRef.current .data(dummyData);
graphRef.current .render();
graphRef.current .fitView();
}

if (typeof window !== 'undefined')
  window.onresize = () => {
    if (!graphRef.current  || graphRef.current .get('destroyed')) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graphRef.current .changeSize(container.scrollWidth, container.scrollHeight);
  };
    
  return () => {
    graphRef.current?.destroy();
    graphRef.current = null;
  };
    },[graphRef]);

    return (
        <div id="App"></div>
    )



}

