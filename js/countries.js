
const countries = []

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
    "Australia"
]

const colors = [
    "crimson",
    "royalblue",
    "gold",
    "skyblue",
    "red",
    "forestgreen",
    "olive",
    "midnightblue",
    "goldenrod",
    "black",
    "honeydew",
    "darkgreen",
    "orange",
    "firebrick",
    "hotpink",
    "lightpink",
    "navy",
    "tomato",
    "chartreuse",
    "limegreen",
    "yellow"
]

countryNames.forEach((country,index) => countries.push(new Country(country,0,colors[index])))

// const [poland, czechia, germany, finland, uk, italy, greece, russia, egypt, uganda, israel, uae, india, china, japan, indonesia, usa, canada, mexico, brazil, australia] = [...countries]

export default countries