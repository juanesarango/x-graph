import cytoscape from 'cytoscape';
import { red1, red2, red3, red4 } from './elements';
import style from './style';

function renderGraph(elements) {
  return cytoscape({
    // Commonly used container/elements/layout/styles
    container: document.getElementById('cy'),
    elements,
    style,
    layout: {
      name: 'breadthfirst',
      fit: true, // whether to fit the viewport to the graph
      directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
      padding: 30, // padding on fit
      circle: false, // put depths in concentric circles if true, put depths top down if false
      spacingFactor: 1, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
      roots: undefined, // the roots of the trees
      maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
      animate: false, // whether to transition the node positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled
      ready: undefined, // callback on layoutready
      stop: undefined // callback on layoutstop
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
}

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

cy1 = window.cy1 = renderGraph(red1);

cy1.getElementById('invi').on('click', (event) => {
  cy2 = window.cy2 = renderGraph(red2);
  cy2.getElementById('inve').on('click', (event) => {
    cy3 = window.cy3 = renderGraph(red3);
    cy3.getElementById('sebo').on('click', (event) => {
      cy4 = window.cy4 = renderGraph(red4);
    });
  });
});

