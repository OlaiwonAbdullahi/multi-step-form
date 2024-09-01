const steps = document.querySelectorAll(".stp");
const circleSteps = document.querySelectorAll(".step");
const formInputs = document.querySelectorAll(".step-1 form input");
const plans = document.querySelectorAll(".plan-card");
const switcher = document.querySelector(".switch");
const addons = document.querySelectorAll(".box");
const total = document.querySelectorAll(".total b");
const planPrice = document.querySelector(".plan-price");
let time;
let currentStep = 1;
let currentCircle = 0;

const obj = {
  plan: null,
  kind: null,
  price: null,
};

steps.forEach((step) => {
  const nextBtn = document.querySelector(".next-stp");
  const prevBtn = document.querySelector(".prev-stp");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none";
      currentStep--;
      document.getElementById(`.step-${currentStep}`).style.display = "flex";
    });
  }
});
