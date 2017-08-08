const style = [
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
      "z-index": "10",
      "border-width": "0.5",
      "border-color": "#666",
      "border-opacity": "0.5"
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
];

export default style;