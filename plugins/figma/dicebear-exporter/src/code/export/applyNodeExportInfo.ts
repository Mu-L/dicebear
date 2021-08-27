import { parse, stringify } from "svgson";

import { readNodeExportInfo } from "../utils/readNodeExportInfo";
import { writeNodeExportInfo } from "../utils/writeNodeExportInfo";
import { mapSvgsonNodes } from "../utils/mapSvgsonNodes";

export async function applyNodeExportInfo(svg: string) {
  const svgNode = mapSvgsonNodes(await parse(svg), (node) => {
    let resultNode = node;

    const nodeExportInfo = readNodeExportInfo(node);

    writeNodeExportInfo(resultNode, null);

    if (nodeExportInfo.componentGroup) {
      resultNode = {
        name: "",
        type: "text",
        value: `component::${nodeExportInfo.componentGroup}`,
        attributes: {},
        children: [],
      };
    }

    if (nodeExportInfo.fillColorGroup) {
      resultNode.attributes.fill = `color::${nodeExportInfo.fillColorGroup}`;
    }

    if (nodeExportInfo.strokeColorGroup) {
      resultNode.attributes.stroke = `color::${nodeExportInfo.strokeColorGroup}`;
    }

    if (nodeExportInfo.scale) {
      resultNode = {
        name: "g",
        type: "element",
        value: "",
        attributes: {
          transform: `scale(${nodeExportInfo.scale.x} ${nodeExportInfo.scale.y})`,
        },
        children: [resultNode],
      };
    }

    if (nodeExportInfo.matrix) {
      const matrix = nodeExportInfo.matrix;

      resultNode = {
        name: "g",
        type: "element",
        value: "",
        attributes: {
          transform: `matrix(${matrix.a} ${matrix.b} ${matrix.c} ${matrix.d} ${matrix.tx} ${matrix.ty})`,
        },
        children: [resultNode],
      };
    }

    return resultNode;
  });

  return stringify(svgNode);
}
