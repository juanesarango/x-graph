import cytoscape from 'cytoscape';

import elements from 'elements';

cy = window.cy = cytoscape({

  // Commonly used container/elements/layout/styles

  container: document.getElementById('cy'),
  elements,

  style: [
    {
      "selector": "core",
      "style": {
        "selection-box-color": "#AAD8FF",
        "selection-box-border-color": "#8BB0D0",
        "selection-box-opacity": "0.5"
      }
    }, {
      "selector": "node",
      "style": {
        "width": "mapData(score, 0, 1, 40, 100)",
        "height": "mapData(score, 0, 1, 40, 100)",
        "label": "data(name)",
        "font-size": "10px",
        "text-valign": "top",
        "text-halign": "center",
        "background-image": "data(img)",
        "background-fit": "cover",
        "text-outline-color": "#555",
        "text-outline-width": "2px",
        "color": "#fff",
        "overlay-padding": "0px",
        "z-index": "10"
      }
    }, {
      "selector": "edge",
      "style": {
        "curve-style": "haystack",
        "haystack-radius": "0.5",
        "opacity": "0.4",
        "line-color": "#bbb",
        "width": "mapData(weight, 0, 5, 1, 8)"
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  },

  // Initial viewport State
  zoom: 1,
  pan: { x:0, y: 0 },


  // interaction options
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  boxSelectionEnabled: false,
  selectionType: 'single',
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,


  // rendering options
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  hideLabelsOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: 'auto'

});

document.getElementById('add-item').onclick = function () { 

  const id = document.getElementById('id').value;
  const source = document.getElementById('source').value;
  const target = document.getElementById('target').value;
  const weight = Number(document.getElementById('weight').value);

  const group = document.getElementById('radio-edges').checked ? 'edges' : 'nodes';
  
  if (id && weight && source && target) {
    const newItem = { 
      data: { 
        id, 
        source, 
        target, 
        weight 
      },
      group
    };
    cy.add(newItem);
    console.log(newItem);

  }

};
