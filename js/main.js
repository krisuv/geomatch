import { questions } from "./questions.js";

const options = [...document.querySelectorAll('.question__option')]
const quizSubheading = document.querySelector('.welcome-text__subheading--quiz-subheading')
const quizForm = document.querySelector('.questions-form')


let inputName = 1
let id = 1
let questionId = 1

const generateRandomSubheading = (() => {

    const subheadingTexts = ["Let's kick off with it!", "Let's gooooo!", "Can't wait to see the result!", "Answear honestly!", "Looking forward to seeing the result!", "All you have to do is answering truthgully!"]

    const randomText = subheadingTexts[Math.floor(Math.random()* subheadingTexts.length)]
    quizSubheading.textContent = randomText
})()

//generateRandomSubheading(subheadingTexts)


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
    question.setAttribute('id', `question${questionId}`)
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

    questionId++
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

questions.forEach(question => createQuestion(question))

console.log(questions[0])
console.log(questions[19])

const submitButton = document.createElement('button')
submitButton.textContent = 'submit'
submitButton.classList.add('button')
submitButton.classList.add('button--quiz')
quizForm.appendChild(submitButton)


//const optionButtons = [...document.querySelectorAll('.question__option')]
//const questions = [...document.querySelectorAll('.question__answers')]

const requiredAnswers = (event) => {
    //debugger;
    let totalResult = true
    //const questions = [...document.querySelectorAll('.question__answers')]
    questionsAnswers.forEach(answer => {
        const options = [...answer.querySelectorAll('.question__option')]
        const result = options.find(option => option.checked)
        if(result){
            //TUTAJ FUNKCJA
            //będzie liczyć punkty dopiero na koniec, przy kliknięciu przycisku SUBMIT. nie będzie trzeba sprawdzać i odejmować punktów przy zmianie przycisku
            let answerId = (parseInt(result.id))
            console.log(answerId)
            //questions.find( question.answers =>  )
        } else {
            event.preventDefault();
            totalResult = false
        }

    })

    if(!totalResult){
        console.warn(`You must have forgotten to check the answer in one of the questions 🧿`)
    }
}

const questionsAnswers = [...document.querySelectorAll('.question__answers')]
submitButton.addEventListener('click', requiredAnswers)



// const checkAnswer = () => {
//     const thisQuestion = [...document.querySelectorAll('.question__option')]
//     Question1.answers[0].countries
// }