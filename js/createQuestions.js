import { questions } from "./questions.js";

const quizForm = document.querySelector(".questions-form");

let inputName = 1;
let id = 1;
let questionId = 1;

const createQuestion = ({ description, avatar, answers }) => {
  const question = document.createElement("article");
  question.setAttribute("id", `question${questionId}`);
  question.classList.add("question");

  const questionTitle = document.createElement("h3");
  questionTitle.classList.add("question__title");
  questionTitle.textContent = description;

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question__answers");

  answers.forEach((answer) => {
    const questionOption = document.createElement("input");
    questionOption.classList.add("question__option");
    questionOption.setAttribute("id", `${id}`);
    questionOption.setAttribute("type", "radio");
    questionOption.setAttribute("name", `answer${inputName}`);

    const questionLabel = document.createElement("label");
    questionLabel.setAttribute("for", `${id}`);
    questionLabel.classList.add("question__label");
    questionLabel.textContent = answer.name;

    questionAnswers.appendChild(questionOption);
    questionAnswers.appendChild(questionLabel);

    id++;
  });

  questionId++;
  inputName++;

  const questionIcon = document.createElement("span");
  questionIcon.classList.add("question__icon");

  questionIcon.textContent = `${avatar}`;

  question.appendChild(questionIcon);
  question.appendChild(questionTitle);
  question.appendChild(questionAnswers);

  quizForm.appendChild(question);
};

export const generateAnswers = () => {
  let allAnswers = [];
  questions.forEach((question) => {
    allAnswers.push(question.answers);
  });
  return allAnswers.flat();
};

export const generateQuestions = () => {
  questions.forEach((question) => createQuestion(question));
};

export const generateSubmitButton = () => {
  const submitButton = document.createElement("button");
  const alertMessage = document.createElement("p");
  submitButton.textContent = "submit";
  submitButton.classList.add("button");
  submitButton.classList.add("button--quiz");
  alertMessage.classList.add("alert-message");
  quizForm.appendChild(submitButton);
  quizForm.appendChild(alertMessage);

  return [submitButton, alertMessage];
};
