export const NODE_SHAPES: any = {
  round: (text: String): String => `(${text})`,
  circle: (text: String): String => `((${text}))`,
  stadium: (text: String): String => `([${text}])`,
  rhombus: (text: String): String => `{${text}}`,
  hexagon: (text: String): String => `{{${text}}}`,
  trapezoid: (text: String): String => `[/${text}/]`,
  subroutine: (text: String): String => `[[${text}]]`,
  asymmetric: (text: String): String => `>${text}]`,
  cylindrical: (text: String): String => `[(${text})]`,
  rectangular: (text: String): String => `[${text}]`,
  parallelogram: (text: String): String => `[/${text}/]`,
};
