import countries from "./countries.js";
import { questions } from "./questions.js";
//export let winnerCountry
//import countries from "./countries.js";

const resultSection = `
    <section class="results" aria-label="quiz results">
        <div class="welcome-text">            
            <p class="welcome-text__subheading welcome-text__subheading--quiz-subheading">It seems you should be born
                in...</p>
            <div class="result">
                <h2 class="result__header">Poland!</h2>
                <p class="result__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut commodi
                    consectetur ea earum facilis ipsam laborum laudantium, natus necessitatibus neque odio optio quae
                    quam qui quia sapiente sint sit tempora ut! Autem beatae consectetur fugit iusto quae similique,
                    voluptates.</p>

                <div class="buttons">
                    <a class="quiz-link" href="./quiz.html"><button class="button button--play"
                            aria-label="play again">play again</button></a>
                    <a class="quiz-link" href="./index.html"><button class="button button--play"
                            aria-label="go back to main page">back to main page</button></a>
                </div>
            </div>
        </div>
    </section>`
    document.querySelector('.results').innerHTML += resultSection

const options = [...document.querySelectorAll('.question__option')]
const quizSubheading = document.querySelector('.welcome-text__subheading--quiz-subheading')
const quizForm = document.querySelector('.questions-form')


const showResult = () => {
    const resultSection = document.querySelector('.results')
    resultSection.innerHTML += resultSection
}

// all answers
let allAnswers = []
questions.forEach(question => {
    allAnswers.push(question.answers)
})
allAnswers = allAnswers.flat()
console.log(allAnswers)


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


questions.forEach(question => createQuestion(question))

// console.log(questions[0])
// console.log(questions[19])

const submitButton = document.createElement('button')
submitButton.textContent = 'submit'
submitButton.classList.add('button')
submitButton.classList.add('button--quiz')
quizForm.appendChild(submitButton)

// jest problem z totalResult- zawsze na początku ma wartośc true



const requiredAnswers = (event) => {    
    event.preventDefault();
    let totalResult = true
    const checkedAnswers = []

    questionsAnswers.forEach(answer => {
        const options = [...answer.querySelectorAll('.question__option')]
        const result = options.find(option => option.checked)
        
        if(result){
            const answerId = (parseInt(result.id))
            checkedAnswers.push(answerId)
            //let choosenAnswer = null

            // questions.forEach( question => {
            //     const correctAnswer = question.answers.find( answer => answer.id === answerId)
            //     if(correctAnswer && totalResult){
            //         choosenAnswer = correctAnswer
            //         console.log(choosenAnswer)
            //         choosenAnswer.countries.forEach( country => {
            //             ++country.points
            //         })
            //     }
            // })
            
        } else {
            event.preventDefault()
            //countries.forEach(country => country.points = 0)
            totalResult = false
        }
    })

    
    if(!totalResult){
        console.warn(`You must have forgotten to check the answer in one of the questions 🧿`)
    } else {
        //console.log(checkedAnswers)

        let xD = []
        allAnswers.filter( answer => {
            checkedAnswers.forEach( checkedAnswer => {
                if(answer.id === checkedAnswer){
                    xD.push(answer)
                }
            })
        })
        //console.log(xD)

        xD.forEach( answer => {
            answer.countries.forEach(country => {
                country.points++
            })
        })
        //console.log(countries)

        // function maxValue(...args) {
        //     const max= args.reduce((acc, val) => {
        //         return acc > val ? acc : val;
        //     });
        //     return max;
        // }
        const maxPoints = (countries) => {
            let maxCountries = []
            const max = countries.reduce((acc, val) => {
                if(acc.points === val.points) maxCountries.push(val) 
                return acc.points >= val.points ? acc : val
            })
            if(maxCountries.length){
                return maxCountries
            }
            return max
        }

        const winnerCountry = maxPoints(countries)

        console.log(winnerCountry)
    }

    console.log(countries)
    showResult()

}

const questionsAnswers = [...document.querySelectorAll('.question__answers')]
submitButton.addEventListener('click', requiredAnswers)