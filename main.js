const answerButtons = document.querySelectorAll('.question__label')
const submitButton = [...document.querySelector('.submit')]


class Country {
    constructor(name, points, color) {
        this.name = name;
        this.points = points;
        this.color = color;
    }
}

const countriesX = []

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
    "Brazil"
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
    "limegreen"
]

countryNames.forEach((country,index) => countriesX.push(new Country(country,0,colors[index])))
const [poland, czechia, germany, finland, uk, italy, greece, russia, egypt, uganda, israel, uae, india, china, japan, indonesia, usa, canada, mexico, brazil] = [...countriesX]
console.log(brazil)
console.log(israel)
console.log(uganda)
console.log(czechia)



const descriptions = [
    "Poland",
    "True lager enjoyer 🍻. Dont's forget to visit Prague.",
    "Germany",
    "Your Sanuna is ready! Or we can drink vodka as well.",
    "You could be a Londoner",
    "Pizza is in the oven!",
    "Why not having more than a thousand islands? And why not to eat souvlaki?",
    "Access denied by FSB.",
    "Egypt"
]

const thisCountry = countriesX.find(country => country.name === 'Brazil')
//console.log(thisCountry.color)


class Answer {
    constructor(name, ...countries) {
        this.name = name;
        this.countries = [...countries]
    }
}

const Answer1 = new Answer("tea", "UK", "Japan", "China")
//console.log(Answer1.countries)

class Question {
    constructor(description, avatar, ...answers) {
        this.description = description;
        this.avatar = avatar;
        this.answers = [...answers];
    }
}

const Question1 = new Question(
    'tea or coffee?',
    '☕',
    new Answer("tea", "UK", "Japan", "China"),
    new Answer("coffee", "Greece", "Italy", "USA")
)


const Question2 = new Question(
    'right or left?',
    '↔️',
    new Answer("left", "UK", "Japan", "India"),
    new Answer("right", "USA", "Poland", "Czech Republic")
)

const leftistCountries = Question2.answers.find(({name}) => name == 'left').countries
leftistCountries.forEach(country => {

})

//console.log(...countriesExtended)
// console.log(leftistCountries)
// leftistCountries.forEach(country => {
//     const thisCountry = countriesExtended.find(countryEx => countryEx.name === country)
//     thisCountry
//     thisCountry.points++
//     console.log(thisCountry)
// })

const thisOne = countriesX.find(countryEx => countryEx.name === 'Brazil')
//thisOne


// for (let [key, value] of Object.entries(countries)) {
//     if (Question1.answers[0].countries.includes(key)) {
//         value++;
//         console.log(`${key}: ${value}`);
//     }
// }

//console.log(Question1.answers)
//console.log((Question1.answers[0]))


// GEOLOCATION
// const success = (position) => {
//     console.log(position)
// }
// const error = (error) => {
//     console.error(error)
// }
// const userLocation = navigator.geolocation.getCurrentPosition(success,error, {enableHighAccuracy: true})