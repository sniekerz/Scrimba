// Hook an event listener up with the button, and log out the input field's value when it's clicked
let myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent += myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
  }
});

// Make the unshift button work just as the push button (but with unshifting instead of pushing)
unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
  }
});

// Make the pop and shift buttons work as well
popBtn.addEventListener("click", function () {
  myEmojis.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", function () {
  console.log("clicked");
  myEmojis.shift();
  renderEmojis();
});
