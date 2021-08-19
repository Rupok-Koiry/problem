/*============= All Element =============*/
const phoneTotal = document.getElementById("phone-total");
const caseTotal = document.getElementById("case-total");
const tax = document.getElementById("tax");
const total = document.getElementById("total");
const counterContainer = document.querySelector(".cart");

/*============= Counter =============*/
const counter = (isIncreased, type, price) => {
  const productInput = document.getElementById(`${type}-count`);
  const productNumber = +productInput.value;
  //prettier-ignore
  productInput.value = isIncreased ? productNumber + 1  : productNumber > 0 ? productNumber - 1 : 0;
  const productPrice = document.getElementById(`${type}-total`);
  productPrice.textContent = +productInput.value * price;
  totalCost();
};
/*============= Total Cost =============*/
const totalCost = function () {
  const price = +phoneTotal.textContent + +caseTotal.textContent;
  document.querySelector("#sub-total").textContent = "$" + price;
  const taxAmount = price / 10;
  tax.textContent = "$" + taxAmount;
  total.textContent = taxAmount + price;
};
/*============= Event Handler =============*/

counterContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("increment-btn")) incrementCount(event);
  if (event.target.classList.contains("decrement-btn")) decrementCount(event);
});
const incrementCount = function (event) {
  counter(true, event.target.dataset.type, event.target.dataset.price);
};
const decrementCount = function (event) {
  counter(false, event.target.dataset.type, event.target.dataset.price);
};
