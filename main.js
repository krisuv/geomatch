
const quizForm = document.querySelector('.questions-form')

let inputName = 4
let id = 11

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

const Question3 = new Question(
    'Let`s drink something!',
    '🍻',
    new Answer('beer',czechia, germany, uk, usa),
    new Answer('vodka',poland,russia,finland),
    new Answer('wine', greece, italy),
    new Answer('something different', japan),
    new Answer('I don`t drink ;-;',uae, egypt, indonesia),
)

const leftistCountries = Question2.answers.find(({name}) => name == 'left').countries
leftistCountries.forEach(country => {

})

const thisOne = countriesX.find(countryEx => countryEx.name === 'Brazil')


const createQuestionTemplate = (avatar,description) => (
    `<article class="question" id="fourth">
              <span class = "question__icon">${avatar}</span>
            <h3 class="question__title">${description}</h3>
            <div class="question__answers">
                
            </div>
          </article>`
)



const createQuestion = ({description, avatar, answers}) => {


    const question = document.createElement('article')
    question.setAttribute('id', `${id}question`)
    question.classList.add('question')

    const questionTitle = document.createElement('h3')
    questionTitle.classList.add('question__title')
    questionTitle.textContent = description

    const questionAnswers = document.createElement('div')
    questionAnswers.classList.add('question__answers')

    answers.forEach(answer => {
        const questionOption = document.createElement('input')
        questionOption.classList.add('question__option')
        questionOption.setAttribute('id',`${id}`)
        questionOption.setAttribute('type','radio')
        questionOption.setAttribute('name',`answer${inputName}`)

        const questionLabel = document.createElement('label')
        questionLabel.setAttribute('for',`${id}`)
        questionLabel.classList.add('question__label')
        questionLabel.textContent = answer.name

        questionAnswers.appendChild(questionOption)
        questionAnswers.appendChild(questionLabel)

        id++
    })

    inputName++

    const questionIcon = document.createElement('span')
    questionIcon.classList.add('question__icon')

    questionIcon.textContent = `${avatar}`

    question.appendChild(questionIcon)
    question.appendChild(questionTitle)
    question.appendChild(questionAnswers)

    //const form = document.querySelector('form.questions-form')
    quizForm.appendChild(question)


}


//konkretny przycisk
// if(document.getElementById('1').checked == true) {
//     console.log("radio button is selected");
// } else {
//     console.log("radio button is not selected");
// // }

//jakiś przycisk w grupie
// var getSelectedValue = document.querySelector( 'input[name="season"]:checked');
// if(getSelectedValue != null) {
//     document.write("Radio button is selected");
// else {
//         document.write("Nothing has been selected");

//wartość przycisku
// if(document.getElementById('summer').checked) {
//     var selectedValue = document.getElementById('summer').value;
//     alert("Selected Radio Button is: " + selectedValue);
// }

// <html>
// <body>
// <br><b> Choose your favroite season: </b><br>
//     <input type="radio" id="summer" value="Summer">Summer<br>
//         <input type="radio" id="winter" value="Winter">Winter<br>
//             <input type="radio" id="rainy" value="Rainy">Rainy<br>
//                 <input type="radio" id="autumn" value="Autumn">Autumn<br><br>
//
//                     <button type="button" onClick=" checkButton()"> Submit</button>
//
//                     <h3 id="disp" style="color:green"></h3>
//                     <h4 id="error" style="color:red"></h4>
// </body>
//
// <script>
//     function checkButton() {
//     if(document.getElementById('summer').checked) {
//     document.getElementById("disp").innerHTML
//     = document.getElementById("summer").value
//     + " radio button is checked";
// }
//     else if(document.getElementById('winter').checked) {
//     document.getElementById("disp").innerHTML
//     = document.getElementById("winter").value
//     + " radio button is checked";
// }
//     else if(document.getElementById('rainy').checked) {
//     document.getElementById("disp").innerHTML
//     = document.getElementById("rainy").value
//     + " radio button is checked";
// }
//     else if(document.getElementById('autumn').checked) {
//     document.getElementById("disp").innerHTML
//     = document.getElementById("autumn").value
//     + " radio button is checked";
// }
//     else {
//     document.getElementById("error").innerHTML
//     = "You have not selected any season";
// }
// }
// </script>
// </html>




createQuestion(Question1)
createQuestion(Question2)
//createQuestionSimple(Question1)
const submitButton = document.createElement('button')
submitButton.textContent = 'submit'
submitButton.classList.add('button')
submitButton.classList.add('button--quiz')
quizForm.appendChild(submitButton)


//const optionButtons = [...document.querySelectorAll('.question__option')]
//const questions = [...document.querySelectorAll('.question__answers')]

const requiredAnswers = (event) => {
    //debugger;
    let resultTotal = true
    const questions = [...document.querySelectorAll('.question__answers')]
    questions.forEach(question => {
        const options = [...question.querySelectorAll('.question__option')]
        const result = options.find(option => option.checked)
        if(!result){
            event.preventDefault();
            resultTotal = false
        }
    })
    if(!resultTotal){
        console.warn(`You must have forgotten to check the answer in one of the questions 🧿`)
    }
}


submitButton.addEventListener('click', requiredAnswers)
















// const userCity = document.querySelector('.welcome-text__city')
//
// //GEOLOCATION
// const success = (position) => {
//     console.log(position)
// }
// const error = (error) => {
//     console.error(error)
//     console.info("I can't check your location 😞")
//     const userOwnLocation = prompt("What's your location then?")
//     if(!userOwnLocation){
//         userCity.textContent = 'somewhere'
//     } else {
//         userCity.textContent = userOwnLocation
//     }
//
// }
// const userLocation = navigator.geolocation.getCurrentPosition(success,error, {enableHighAccuracy: true})