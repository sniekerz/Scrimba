const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const popForm = document.getElementById("pop-form");
const modalText = document.getElementById("modal-text");

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

popForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const popFormData = new FormData(popForm);
  const name = popFormData.get("fullName");
  const email = popFormData.get("email");

  console.log(name, email);
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
  }, 3000);
});
