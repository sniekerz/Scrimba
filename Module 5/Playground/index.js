const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const quantityDisplay = document.getElementById("quantity-display");
const cartBtn = document.getElementById("cartBtn");

let quantity = 0;

decrement.addEventListener("click", function () {
  quantity--;
  quantityDisplay.innerText = quantity;
  if (quantity < 1) {
    decrement.disabled = true;
    cartBtn.disabled = true;
  }
});

increment.addEventListener("click", function () {
  quantity++;
  quantityDisplay.innerText = quantity;
  decrement.disabled = false;
  cartBtn.disabled = false;
});

cartBtn.addEventListener("click", function () {
  console.log(`Your order for ${quantity} pairs of shoes is being processed`);

  /*
Challenge:
1. Disable the 'Add to Cart' button when 
   quantity is at zero. Remember: quantity
   will be at zero when the page loads!
*/
});
