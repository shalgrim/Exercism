export const steps = (i) => {
  if (i <= 0) {
      throw new Error('Only positive numbers are allowed');
  }
  var x = i;
  var num_steps = 0;

  while (x != 1) {
    num_steps++;
    if (x % 2 == 0) {
      x = x / 2;
    } else {
      x = 3*x + 1;
    }
  }
  return num_steps;
};
