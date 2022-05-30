//const options = [...document.querySelectorAll(".question__option")];

export const scrollToNextQuestion = (options, questionObjects) => {
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      let optionParentQuestion = `${e.target.parentNode.parentNode.id}`;
      let lastIndex = Array.from(optionParentQuestion).filter(
        (element) =>
          typeof parseInt(element) === "number" &&
          (parseInt(element) === 0 || Boolean(parseInt(element)))
      );
      lastIndex = parseInt(lastIndex.join(""));
      if (lastIndex < questionObjects.length) {
        lastIndex++;
      } else {
        return;
      }
      let newId = `question${lastIndex}`;
      const nextQuestion = document.getElementById(`${newId}`);
      const yOffset = -220;
      const scrollPoint =
        nextQuestion.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: scrollPoint, behavior: "smooth" });
    });
  });
};
