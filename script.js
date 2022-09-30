const button = document.querySelector(".btn");
const text_adivce = document.querySelector(".advice");
const text_id = document.querySelector(".id_advice");
const advice_url = "https://api.adviceslip.com/advice";

const get_advice = () => {
  fetch(advice_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let advice = data.slip.advice;
      let id_adivce = data.slip.id;
      text_id.textContent = `Advice # ${id_adivce}`;
      text_adivce.textContent = `"${advice}"`;
    })
    .catch(function () {
      console.log("Something went wrong :(");
    });
};

button.addEventListener("click", () => {
  get_advice();
});

get_advice();
