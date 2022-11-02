const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const popForm = document.getElementById("pop-form");
const modalText = document.getElementById("modal-text");
const acceptBtn = document.getElementById("accept-btn");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("reverse");
});

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

popForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const popFormData = new FormData(popForm);
  const name = popFormData.get("fullName");
  modalText.innerHTML = `
  <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">Uploading your data to the dark web...</p>
  </div>`;
  setTimeout(function () {
    document.getElementById("upload-text").innerText = "Making the sale...";
  }, 1500);
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks you <span class="modal-display-name">${name}</span>, you cocksucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});
