import countries from "./countries.js";
import {questions} from "./questions.js";
import {generateRandomSubheading} from "./randomText.js";

const resultSection = `
    <section class="results" aria-label="quiz results">
        <div class="welcome-text">            
            <p class="welcome-text__subheading welcome-text__subheading--quiz-subheading">It seems you should be born
                in...</p>
            <div class="result">
                <h2 class="result__header"></h2>
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

const quizForm = document.querySelector('.questions-form')
const results = document.querySelector('.results')

let allAnswers = []
questions.forEach(question => {
    allAnswers.push(question.answers)
})
allAnswers = allAnswers.flat()
console.log(allAnswers)


let inputName = 1
let id = 1
let questionId = 1

generateRandomSubheading()

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

    quizForm.appendChild(question)

}


questions.forEach(question => createQuestion(question))

const submitButton = document.createElement('button')
const alertMessage = document.createElement('p')
submitButton.textContent = 'submit'
submitButton.classList.add('button')
submitButton.classList.add('button--quiz')
alertMessage.classList.add('alert-message')
quizForm.appendChild(submitButton)
quizForm.appendChild(alertMessage)

const countPoints = (checkedAnswers) => {
    let filterAnswers = []
    allAnswers.filter( answer => {
        checkedAnswers.forEach( checkedAnswer => {
            if(answer.id === checkedAnswer){
                filterAnswers.push(answer)
            }
        })
    })
    filterAnswers.forEach( answer => {
        answer.countries.forEach(country => {
            country.points++
        })
    })

    const maxPoints = (countries) => {
        return countries.reduce((acc, val) => {
            return acc.points >= val.points ? acc : val
        })
    }

    const winnerCountry = maxPoints(countries)
    let winnerCountries = []
    winnerCountries = countries.filter(country => country.points === winnerCountry.points)
    winnerCountries.forEach(winner => console.log(winner))
    return showResults(winnerCountries)
}

const showResults = (winnerCountries) => {
    const resultHeaderCountries = []
    winnerCountries.forEach((country) => {
        const winnerCountryName = document.createElement('span')
        winnerCountryName.textContent = `${country.name}`
        winnerCountryName.style.color = country.color
        resultHeaderCountries.push(winnerCountryName)
        console.log(country.name)
    })
    return resultHeaderCountries
}

const checkRequiredAnswers = (event) => {
    event.preventDefault();
    let totalResult = true
    const checkedAnswers = []

    questionsAnswers.forEach(answer => {
        const options = [...answer.querySelectorAll('.question__option')]
        const result = options.find(option => option.checked)

        if(result){
            const answerId = (parseInt(result.id))
            checkedAnswers.push(answerId)
        } else {
            totalResult = false
        }
    })


    if(totalResult){

        const winnerCountries = countPoints(checkedAnswers)
        console.log(countries)

        submitButton.style.display = `none`
        alertMessage.textContent = `⚙️`
        alertMessage.classList.add('waiting')

        const waitForResults = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    alertMessage.textContent = ``
                    alertMessage.classList.remove('waiting')
                    resolve()
                }, 2000)
            })
        }

        const gearWheelAnimation = (async () => {
            await waitForResults()
            results.innerHTML += resultSection
            results.style.minHeight = `60vh`

            const resultHeader = document.querySelector('.result__header')
            winnerCountries.forEach(country =>  resultHeader.appendChild(country))
        })()



    } else {
        alertMessage.textContent = `Answer every question!`
    }

}

const blockButtons = () => {
    questionObjects.slice(1).forEach(questionObject => questionObject.style.filter = `blur(4px)`)
    questionsAnswers.slice(1).forEach(questionAnswer => questionAnswer.style.pointerEvents = `none`)
}

const unblockButton = (index) => {
    if(index < questionObjects.length){
        questionObjects[index].style.filter = `none`
        questionsAnswers[index].style.pointerEvents = `auto`
    }
}

const activateQuestions = () => {
    let currentQuestion = 1
    questionsAnswers.forEach(answer => {
        const options = [...answer.querySelectorAll('.question__option')]
        const result = options.find(option => option.checked)

        if(result){
            unblockButton(currentQuestion++)
        }
    })
}

const questionObjects = [...document.querySelectorAll('.question')]
const questionsAnswers = [...document.querySelectorAll('.question__answers')]
submitButton.addEventListener('click', checkRequiredAnswers)
questionsAnswers.forEach(questionsAnswer => questionsAnswer.addEventListener('click', activateQuestions))
blockButtons()
console.log(questionsAnswers)