const numberButtons = document.querySelectorAll(".number-of-rating");
const submitButton = document.querySelector(".submit-button");
const headerHero = document.querySelector(".header-hero");
const mainTexts = document.querySelector(".main-texts");
const ratingNumbers = document.querySelector(".rating-numbers-wrapper");
const mainComponent = document.querySelector(".rating-component");

/* This is for iterating over buttons when clicked and changing style for only the selected button */
/* Also taking the value of selected button for using it later */

let selectedValue = 1;

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.currentTarget;
    numberButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    clickedButton.classList.add("selected");
    selectedValue = clickedButton.textContent;
    updateThanksSelection();
  });
});

/* That is the part for creating an image element */

const imgElement = document.createElement("img");
imgElement.src = "./images/illustration-thank-you.svg";
imgElement.classList.add("thanks-img");

/* That is the part for creating an div element and appending the image to it */

const imgElementWrapper = document.createElement("div");
imgElementWrapper.classList.add("thanks-img-wrapper");
imgElementWrapper.appendChild(imgElement);

const thanksSelection = document.createElement("span");
thanksSelection.classList.add("thanks-selection");
function updateThanksSelection() {
  thanksSelection.textContent = `You selected ${selectedValue} out of 5`;
}

const thanksSelectionWrapper = document.createElement("div");
thanksSelectionWrapper.classList.add("thanks-selection-wrapper");
thanksSelectionWrapper.appendChild(thanksSelection);

/* That is the part for creating a header element */

const thanksHeader = document.createElement("h1");
thanksHeader.textContent = "Thank you!";
thanksHeader.classList.add("thanks-header");

/* That is the part for creating a body element */

const thanksBody = document.createElement("span");
thanksBody.textContent =
  "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
thanksBody.classList.add("thanks-body");

/* That is the part for creating a text wrapper div and appending the text elemets above to this div */

const thanksTextWrapper = document.createElement("div");
thanksTextWrapper.classList.add("thanks-text-wrapper");
thanksTextWrapper.appendChild(thanksSelectionWrapper);
thanksTextWrapper.appendChild(thanksHeader);
thanksTextWrapper.appendChild(thanksBody);

/* This is the main wrapper of all elements created by the help of JS*/

const thanksWrapper = document.createElement("div");
thanksWrapper.classList.add("thanks-wrapper");
thanksWrapper.appendChild(imgElementWrapper);
thanksWrapper.appendChild(thanksTextWrapper);

/* Here we are adding an event listener for the Submit button, which will remove initial elements and append new ones*/

submitButton.addEventListener("click", () => {
  headerHero.remove();
  mainTexts.remove();
  ratingNumbers.remove();
  submitButton.remove();
  mainComponent.appendChild(thanksWrapper);
});
