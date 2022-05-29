const countries = [];

class Country {
  constructor(name, points, color) {
    this.name = name;
    this.points = points;
    this.color = color;
  }
}

const countryNames = [
  "Poland",
  "Czech Republic",
  "Germany",
  "Finland",
  "UK",
  "Italy",
  "Greece",
  "Russia",
  "Egypt",
  "Uganda",
  "Israel",
  "UAE",
  "India",
  "China",
  "Japan",
  "Indonesia",
  "USA",
  "Canada",
  "Mexico",
  "Brazil",
  "Australia",
];

const colors = [
  "crimson",
  "royalblue",
  "gold",
  "skyblue",
  "red",
  "forestgreen",
  "olive",
  "lightseagreen",
  "goldenrod",
  "black",
  "honeydew",
  "yellowgreen",
  "orange",
  "firebrick",
  "hotpink",
  "lightpink",
  "deepskyblue",
  "tomato",
  "chartreuse",
  "limegreen",
  "yellow",
];

countryNames.forEach((country, index) =>
  countries.push(new Country(country, 0, colors[index]))
);

export default countries;
