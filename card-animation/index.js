const button = document.getElementById("main-button");
const overlayCard = document.getElementById("secondary-card");
const buttonIcon = document.getElementById("button-icon");
button.addEventListener("click", () => {
  overlayCard.classList.toggle("toggle-card");
  buttonIcon.classList.toggle("button-icon-toggle");
});
