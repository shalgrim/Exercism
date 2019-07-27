var resistor_color = require('../resistor-color/resistor-color.js');

export const value = (color_list) => {
  var colors = resistor_color.COLORS;
  var total_value = 0;

  for (var i = 0; i < color_list.length; i++) {
    var color_value = colors.indexOf(color_list[i]);
    var multiplier = Math.pow(10, color_list.length - 1 - i);
    total_value += color_value * multiplier;
  }

  return total_value;
};
