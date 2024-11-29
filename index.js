/*=============================================
=               Welcome Message               =
=============================================*/
let greetingMessage = "Hi ";
let customer = "Nuk";
// let customer = prompt("Enter your name?");
let message = ", please check your order:";
const welcome = greetingMessage + customer + message;

/*=============================================
=                Sign Details                 =
=============================================*/
let sign = "Montague House";
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

/*=============================================
=                 Elements                    =
=============================================*/
const el = document.querySelector("#greeting-message");
el.textContent = welcome;

const elSign = document.querySelector("#userSign");
elSign.textContent = sign;

const elTiles = document.querySelector("#tiles");
elTiles.textContent = tiles;

const elSubTotal = document.querySelector("#subTotal");
elSubTotal.textContent = `${subTotal}`;

const elShipping = document.querySelector("#shipping");
elShipping.textContent = `${shipping}`;

const elGrandTotal = document.querySelector("#grandTotal");
elGrandTotal.textContent = `${grandTotal}`;

const payNowBtn = document.querySelector(".action__btn");

/*=============================================
=               Event Listeners               =
=============================================*/

payNowBtn.addEventListener("click", () => {
  alert(`Your purchase ${customer} has been confirmed`);
});
