var resistor_color = require('../resistor-color/resistor-color.js');

export const value = (color_list) => {
  var color_values = color_list.map(resistor_color.colorCode)
  return Number(color_values.join(''))
};
