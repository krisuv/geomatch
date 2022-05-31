import countries from "./countries.js";
import { resultSection, resultSectionExtended } from "./result.js";
import {
  generateQuestions,
  generateAnswers,
  generateSubmitButton,
} from "./createQuestions.js";
import { generateRandomSubheading } from "./randomText.js";
import { scrollToNextQuestion } from "./scroll.js";

const results = document.querySelector(".results");

const allAnswers = generateAnswers();
generateRandomSubheading();
generateQuestions();

console.log(countries);

const submitButtonObjects = generateSubmitButton();
const submitButton = submitButtonObjects[0];
const alertMessage = submitButtonObjects[1];

const countPoints = (checkedAnswers) => {
  let filterAnswers = [];
  allAnswers.filter((answer) => {
    checkedAnswers.forEach((checkedAnswer) => {
      if (answer.id === checkedAnswer) {
        filterAnswers.push(answer);
      }
    });
  });
  filterAnswers.forEach((answer) => {
    answer.countries.forEach((country) => {
      country.points++;
    });
  });

  const maxPoints = (countries) => {
    return countries.reduce((acc, val) => {
      return acc.points >= val.points ? acc : val;
    });
  };

  const winnerCountry = maxPoints(countries);
  let winnerCountries = countries.filter(
    (country) => country.points === winnerCountry.points
  );

  return showResults(winnerCountries);
};

const showResults = (winnerCountries) => {
  const resultHeaderCountries = [];
  winnerCountries.forEach((country) => {
    const winnerCountryName = document.createElement("span");
    winnerCountryName.textContent = `${country.name}`;
    winnerCountryName.style.color = country.color;
    resultHeaderCountries.push(winnerCountryName);
  });
  return resultHeaderCountries;
};

const checkRequiredAnswers = (event) => {
  event.preventDefault();
  let totalResult = true;
  const checkedAnswers = [];

  questionsAnswers.forEach((answer) => {
    const options = [...answer.querySelectorAll(".question__option")];
    const result = options.find((option) => option.checked);

    if (result) {
      const answerId = parseInt(result.id);
      checkedAnswers.push(answerId);
    } else {
      totalResult = false;
    }
  });

  if (totalResult) {
    const winnerCountries = countPoints(checkedAnswers);

    const blockButtonsAfterSubmit = (() => {
      questionsAnswers.forEach(
        (questionAnswer) => (questionAnswer.style.pointerEvents = `none`)
      );
    })();

    submitButton.style.display = `none`;
    alertMessage.textContent = `⚙️`;
    alertMessage.classList.add("waiting");

    const waitForResults = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          alertMessage.textContent = ``;
          alertMessage.classList.remove("waiting");
          resolve();
        }, 2000);
      });
    };

    const gearWheelAnimation = (async () => {
      await waitForResults();
      if (winnerCountries.length === 1) {
        results.innerHTML += resultSection;
      } else {
        results.innerHTML += resultSectionExtended;
      }
      results.style.minHeight = `60vh`;

      const resultHeader = document.querySelector(".result__header");
      winnerCountries.forEach((country) => resultHeader.appendChild(country));
      console.log(countries);
    })();
  } else {
    alertMessage.textContent = `Answer every question!`;
  }
};

const blockButtons = () => {
  questionObjects
    .slice(1)
    .forEach((questionObject) => (questionObject.style.filter = `blur(4px)`));
  questionsAnswers
    .slice(1)
    .forEach((questionAnswer) => (questionAnswer.style.pointerEvents = `none`));
};

const unblockButton = (index) => {
  if (index < questionObjects.length) {
    questionObjects[index].style.filter = `none`;
    questionsAnswers[index].style.pointerEvents = `auto`;
  }
};

const activateQuestions = () => {
  let currentQuestion = 1;
  questionsAnswers.forEach((answer) => {
    const options = [...answer.querySelectorAll(".question__option")];
    const result = options.find((option) => option.checked);

    if (result) {
      unblockButton(currentQuestion++);
    }
  });
};

const questionObjects = [...document.querySelectorAll(".question")];
const questionsAnswers = [...document.querySelectorAll(".question__answers")];
const options = [...document.querySelectorAll(".question__option")];
submitButton.addEventListener("click", checkRequiredAnswers);
questionsAnswers.forEach((questionsAnswer) =>
  questionsAnswer.addEventListener("click", activateQuestions)
);
scrollToNextQuestion(options, questionObjects);
blockButtons();
