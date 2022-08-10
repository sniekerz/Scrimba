/* Challenge: Give a textual code review.
Provide feedback using code comments. */

// To increase readability, use camelCase: getDiscount
function getdiscount(code) {
  let promo = promos.find((promo) => promo.code === code);
  console.log(promo);

  if (promo !== undefined && promo.isActive) {
    console.log(`You get a ${promo.amount}% discount!`);
    return promo.amount / 100;
  }
  return 0;
}

// To increase readability, use camelCase: calculateFinalPrice
function calculatefinalprice(basePrice, userCode) {
  if (userCode) {
    const discount = getdiscount(userCode);
    const finalPrice = basePrice - basePrice * discount;
    return finalPrice;
  } else {
    return basePrice;
  }
}

const promos = [
  { code: "TOTALLY10", amount: 10, isActive: true },
  { code: "PLENTY20", amount: 20, isActive: false },
  { code: "NIFTY50", amount: 50, isActive: true },
  { code: "WHOPPING75", amount: 75, isActive: true },
  { code: "YOLOFREE", amount: 100, isActive: false },
];

console.log(calculatefinalprice(500, "WHOPPING75"));
