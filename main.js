
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

const countries = []

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
const [poland, czechia, germany, finland, uk, italy, greece, russia, egypt, uganda, israel, uae, india, china, japan, indonesia, usa, canada, mexico, brazil, australia] = [...countries]
console.log(brazil)
console.log(israel)
console.log(uganda)
console.log(czechia)
console.log(australia)

const thisCountry = countries.find(country => country.name === 'Brazil')
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
    new Answer("tea", uk, japan, poland, russia, china, indonesia, india, egypt),
    new Answer("coffee", czechia, germany, finland, italy, greece,  israel, uae, usa, canada, mexico, brazil, australia, uganda)
)


const Question2 = new Question(
    'right or left side of the road?',
    '↔️',
    new Answer("left", uk, japan, india, indonesia, australia, uganda),
    new Answer("right", poland, czechia, germany, finland, italy, greece, russia, egypt, israel, uae, china, usa, canada, mexico, brazil)
)

const Question3 = new Question(
    'Let`s drink something!',
    '🍻',
    new Answer('beer',czechia, germany, uganda, australia),
    new Answer('vodka',poland,russia,finland),
    new Answer('wine', greece, italy, israel),
    new Answer('strong, but not vodka', japan, india, china, usa, canada, mexico, brazil, uk),
    new Answer('nope',uae, egypt, indonesia)
)

const Question4 = new Question(
    `What's your favourite spiritual activity?`,
    '⛪',
    new Answer('meditation', india, japan),
    new Answer('reading Bible', poland, italy, greece, uganda, canada, mexico, brazil, australia, israel, usa),
    new Answer('ramadan', egypt, uae, indonesia),
    new Answer('hating religion', czechia, germany, finland, uk, russia, china)
)

const Question5 = new Question(
    `Pick one means of transport to get to your work place:`,
    '🚗',
    new Answer('car', germany, finland, uae, usa, canada, australia),
    new Answer('bus', uk, egypt, indonesia, india, mexico, brazil),
    new Answer('motor scooter', italy, greece, uganda),
    new Answer('train', russia, israel, czechia, poland, china, japan)
)

const Question6 = new Question(
    'is it better to live on an island than on mainland?',
    '🏝️',
    new Answer("yes", uk, japan,  indonesia, australia, greece),
    new Answer("no", uganda, india, poland, czechia, germany, finland, italy, russia, egypt, israel, uae, china, usa, canada, mexico, brazil)
)

const Question7 = new Question(
    'Choose the best city:',
    '🌇',
    new Answer('Prague', germany, finland, uk, italy, russia, czechia, poland),
    new Answer('New York',australia, canada, usa, uae),
    new Answer('Rio de Janeiro',brazil, mexico, india, indonesia, egypt, greece, uganda, israel),
    new Answer('Tokio', china, japan)
)

const Question8 = new Question(
    'Is it OK to be gay?',
    '👬',
    new Answer('OK', germany, finland, uk, czechia, brazil, usa, canada, australia),
    new Answer('yes, but...', greece, poland, israel, italy, mexico, japan),
    new Answer('no', russia, india, indonesia, egypt, uganda, uae, china)
)


// skończyć
const Question9 = new Question(
    'Best movie to watch is:',
    '📺',
    new Answer('anime', japan),
    new Answer('drama', greece, poland, israel, italy, mexico),
    new Answer('action movie', russia, india, indonesia, egypt, uae, china),
    new Answer('telenovela',uganda, russia, india, indonesia, egypt, uae)
)

const Question10 = new Question(
    'I follow:',
    '👑',
    new Answer("tradition", japan,  indonesia, greece, uganda, india, italy, poland,  russia, egypt, israel, china, mexico, brazil),
    new Answer("modernity", australia, uk, czechia, germany, finland, uae, usa, canada)
)

const Question11 = new Question(
    'I like people who:',
    '🤌',
    new Answer('are crazy and loud', israel, greece, brazil, usa, australia, italy, mexico, uganda, egypt, indonesia, india),
    new Answer('calm and quiet', finland, japan),
    new Answer('something between',poland, canada, czechia, uk, germany, russia, uae, china)
)

const Question12 = new Question(
    'For my earnings I can:',
    '💸',
    new Answer('rent an apartment', israel, usa, australia, uae, canada, uk, germany, finland, japan, italy),
    new Answer('buy myself new shoes',czechia, poland, greece, china),
    new Answer('eat big brand chocolate',mexico, uganda, egypt, indonesia, india, brazil, russia)
)

const Question13 = new Question(
    'Is latin script the best one?',
    '📜',
    new Answer("definitely", usa, canada, australia, uk, czechia, germany, finland, indonesia, uganda, italy, poland, mexico, brazil),
    new Answer("I know a better one", japan, greece, uae, india, russia, egypt, israel, china)
)

const Question14 = new Question(
    'Imagine you are just about to die. What is your last meal like?',
    '🍝',
    new Answer('hot and spicy dish', mexico, indonesia, india),
    new Answer('juicy piece of meat', russia, usa, poland, brazil, australia, germany, uganda, czechia, uk),
    new Answer('gourmet pasta with sauce',italy, china, canada),
    new Answer('seafood or sth vegan', israel, japan, egypt, uae, greece, finland)
)

// dokończyć
const Question15 = new Question(
    'Pick the martial art which is most suitable for you:',
    '🥊',
    new Answer('ground fighting', japan, mexico, indonesia, india),
    new Answer('using fists and elbows', russia, usa, poland, brazil, australia, germany, uganda, czechia, uk),
    new Answer('MMA',italy, china, canada),
    new Answer('fight with equipment', israel, egypt, uae, greece, finland)
)

const Question16 = new Question(
    `I am like a kid in a candy store when weather's like:`,
    '⛅️',
    new Answer('hot and sunny all the time',australia, uganda, brazil, mexico, india, indonesia, egypt, uae),
    new Answer('mediterranean', usa, israel, italy, greece, china, japan),
    new Answer('temperate', uk, germany, czechia, poland),
    new Answer('snowing', russia, canada, finland)
)

const Question17 = new Question(
    'Wanna smoke a cigarette?',
    '🚬',
    new Answer("sure", czechia, germany, indonesia, italy, poland, japan, greece, russia, egypt, israel, china),
    new Answer("get lost",mexico, brazil, uganda, finland, usa, canada, australia, uk, uae, india)
)

const Question18 = new Question(
    `Pick sport that gives you most fun:`,
    '🏀',
    new Answer('football',australia, uganda, brazil, mexico, india, indonesia, egypt, uae),
    new Answer('swimming', usa, israel, italy, greece, china, japan),
    new Answer('basketball', uk, germany, czechia, poland),
    new Answer('ping pong', russia, canada, finland)
)

const Question19 = new Question(
    'I eat:',
    '🥪',
    new Answer("walking", czechia, germany, indonesia, italy, poland, japan, greece, russia, egypt, israel, china),
    new Answer("sitting",mexico, brazil, uganda, finland, usa, canada, australia, uk, uae, india)
)

const Question20 = new Question(
    'How can be your character described in one world?',
    '🤪',
    new Answer('depressive', israel, usa, australia, uae, canada, uk, germany, finland, japan, italy),
    new Answer('melancholic',czechia, poland, greece, china),
    new Answer('euphoric',mexico, uganda, egypt, indonesia, india, brazil, russia)
)

// "Poland",
//     "Czech Republic",
//     "Germany",
//     "Finland",
//     "UK",
//     "Italy",
//     "Greece",
//     "Russia",
//     "Egypt",
//     "Uganda",
//     "Israel",
//     "UAE",
//     "India",
//     "China",
//     "Japan",
//     "Indonesia",
//     "USA",
//     "Canada",
//     "Mexico",
//     "Brazil",
//     "Australia"

const leftistCountries = Question2.answers.find(({name}) => name == 'left').countries
leftistCountries.forEach(country => {

})

const thisOne = countries.find(countryEx => countryEx.name === 'Brazil')


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
createQuestion(Question3)
createQuestion(Question4)
createQuestion(Question5)
createQuestion(Question6)
createQuestion(Question7)
createQuestion(Question8)
createQuestion(Question9)
createQuestion(Question10)
createQuestion(Question11)
createQuestion(Question12)
createQuestion(Question13)
createQuestion(Question14)
createQuestion(Question15)
createQuestion(Question16)
createQuestion(Question17)
createQuestion(Question18)
createQuestion(Question19)
createQuestion(Question20)
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



// const checkAnswer = () => {
//     const thisQuestion = [...document.querySelectorAll('.question__option')]
//     Question1.answers[0].countries
// }