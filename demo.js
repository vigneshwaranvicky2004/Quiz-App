document.addEventListener("DOMContentLoaded", () => {
  const startQuizButton = document.querySelector(".content-button");
  const guidelinesSection = document.querySelector(".guidelines");
  const exitButton = document.querySelector("#exit-btn");
  const continueButton = document.querySelector("#continue-btn");
  const quizSelectionSection = document.querySelector(".quiz-selection");
  const contentSection = document.querySelector(".content");
  const homebtn = document.querySelector(".homebtn")

  // Initially hide the guidelines and quiz selection sections
  guidelinesSection.style.display = "none";
  quizSelectionSection.style.display = "none";

  // Show guidelines when "Start Quiz" button is clicked
  startQuizButton.addEventListener("click", () => {
    contentSection.style.display = "none"; // Hide content
    guidelinesSection.style.display = "block"; // Show guidelines
  });

  // Exit the guidelines and return to the main content when "Exit" button is clicked
  exitButton.addEventListener("click", () => {
    guidelinesSection.style.display = "none"; // Hide guidelines
    contentSection.style.display = "flex"; // Show content again
  });

  // Proceed to quiz selection when the "Continue" button is clicked
  continueButton.addEventListener("click", () => {
    guidelinesSection.style.display = "none"; // Hide guidelines
    quizSelectionSection.style.display = "flex"; // Show quiz selection
  });
  homebtn.addEventListener("click",() => {
    location.reload()
  })
});

