document.addEventListener("DOMContentLoaded", () => {
  const startQuizButton = document.querySelector(".content-button");
  const guidelinesSection = document.querySelector(".guidelines");
  const exitButton = document.querySelector("#exit-btn");
  const continueButton = document.querySelector("#continue-btn");
  const quizSelectionSection = document.querySelector(".quiz-selection");
  const contentSection = document.querySelector(".content");
  const homebtn = document.querySelector(".homebtn")
  

  guidelinesSection.style.display = "none";
  quizSelectionSection.style.display = "none";

  startQuizButton.addEventListener("click", () => {
    contentSection.style.display = "none";
    guidelinesSection.style.display = "block"; 
  });

  exitButton.addEventListener("click", () => {
    guidelinesSection.style.display = "none"; 
    contentSection.style.display = "flex";
  });


  continueButton.addEventListener("click", () => {
    guidelinesSection.style.display = "none"; 
    quizSelectionSection.style.display = "flex"; 
  });
  homebtn.addEventListener("click",() => {
    location.reload()
  })
});
