import { tint, shade } from "tint-shade-color";

export const mappingColors = (color) => {
  return [
    shade(color, 0.4),
    shade(color, 0.2),
    color,
    tint(color, 0.3),
    tint(tint(color, 0.5), 0.5),
    tint(tint(tint(color, 0.5), 0.5), 0.5),
    tint(tint(tint(tint(color, 0.5), 0.5), 0.5), 0.5),
  ];
};
console.log(mappingColors("#81f542"));
