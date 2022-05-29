export const generateRandomSubheading = () => {
  const quizSubheading = document.querySelector(
    ".welcome-text__subheading--quiz-subheading"
  );

  const subheadingTexts = [
    "Let's kick off with it!",
    "Let's gooooo!",
    "Can't wait to see the result!",
    "Answear honestly!",
    "Looking forward to seeing the result!",
    "All you have to do is answering truthgully!",
  ];

  quizSubheading.textContent =
    subheadingTexts[Math.floor(Math.random() * subheadingTexts.length)];
};
