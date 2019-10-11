const ORBITAL_RATIOS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

const SECONDS_IN_EARTH_YEAR = 31557600;

export const age = (planet, age_in_seconds) => {
  return parseFloat(((ORBITAL_RATIOS[planet] * age_in_seconds) / SECONDS_IN_EARTH_YEAR).toFixed(2));
};
