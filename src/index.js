const dscc = require("@google/dscc");
const local = require("./localMessage.js");

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// create a title element
var titleElement = document.createElement("div");
titleElement.id = "myVizTitle";
document.body.appendChild(titleElement);

// write viz code here
const drawViz = (data) => {
  let rowData = data.tables.DEFAULT;
  let fields = data.fields;
  // const allFields = fields.dimID.concat(fields.metricID);

  // set margins + canvas size
  const margin = { top: 10, bottom: 50, right: 10, left: 10 };
  const height = dscc.getHeight() - margin.top - margin.bottom;
  const width = dscc.getWidth() - margin.left - margin.right;

  // remove the svg if it already exists
  if (document.querySelector("svg")) {
    let oldSvg = document.querySelector("svg");
    oldSvg.parentNode.removeChild(oldSvg);
  }

  let dimensions = [];

  fields["dimID"].forEach(function (row, i) {
    dimensions.push(row["name"]);
  });

  let measures = [];
  fields["metricID"].forEach(function (row, i) {
    measures.push(row["name"]);
  });

  let div = document.createElement("div");
  let text = document.createTextNode(dimensions.concat(measures));
  div.appendChild(text);
  document.body.appendChild(div);

  rowData.forEach(function (row) {
    let div = document.createElement("div");
    let text = document.createTextNode(row["dimID"] + "," + row["metricID"]);
    div.appendChild(text);
    document.body.appendChild(div);
  });
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
