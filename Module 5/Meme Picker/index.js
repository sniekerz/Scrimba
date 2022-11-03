import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

emotionRadios.addEventListener("change", highlightCheckedOption);

getImageBtn.addEventListener("click", getMatchingCatsArray);

function getMatchingCatsArray() {
  const isChecked = gifsOnlyOption.checked;

  if (document.querySelector(`input[type="radio"]:checked`)) {
    const selectedEmotion = document.querySelector(
      `input[type="radio"]:checked`
    ).value;
    console.log(selectedEmotion);
  }
}

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getEmotionsArray(cats) {
  let emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionRadios(cats) {
  let radioItems = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `
      <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio" id="${emotion}" value="${emotion}" name="emotions">
      </div>`;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionRadios(catsData);
