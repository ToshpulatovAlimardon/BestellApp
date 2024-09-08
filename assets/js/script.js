let myDishes = [
  {
    name: "Klassischer Döner",
    price: 5.99,
    amount: 0,
    description:
      "Traditioneller Döner mit gewürztem Rindfleisch, frischem Salat, Tomaten und Zwiebeln, serviert im warmen Fladenbrot.",
  },
  {
    name: "Durum Döner",
    price: 6.49,
    amount: 0,
    description:
      "Gerollter Döner mit saftigem Fleisch, knackigem Gemüse und einer Auswahl an Saucen, gewickelt in weiches Fladenbrot.",
  },
  {
    name: "Vegetarischer Döner",
    price: 5.49,
    amount: 0,
    description:
      "Eine gesunde Option mit gegrilltem Gemüse, Hummus und einer Mischung aus frischem Grünzeug, eingewickelt in weiches Fladenbrot.",
  },
  {
    name: "Scharfer Lamm-Döner",
    price: 7.29,
    amount: 0,
    description:
      "Zartes Lammfleisch, perfekt gewürzt, kombiniert mit frischem Gemüse und einer würzigen Joghurtsauce.",
  },
  {
    name: "Kartafon  Lamm-Döner",
    price: 7.29,
    amount: 0,
    description:
      "Zartes Lammfleisch, perfekt gewürzt, kombiniert mit frischem Gemüse und einer würzigen Joghurtsauce.",
  },
];

function init() {
  let dishContainer = document.querySelector(".dish-content");
  dishContainer.innerHTML = "";
  myDishes.forEach((dish, index) => {
    dishContainer.innerHTML += ` 
        <div class="dish-item">
         <h3>${dish.name}</h3>
         <p>${dish.description}</p>
         <div class="dish-price">
            <h4>€${dish.price.toFixed(2)}</h4>
            <button onclick="addtoBasket(${index})">
              <img src="assets/images/Header/cart.svg" alt="" />
            </button>
        </div>
        </div>   `;
  });
}

function addtoBasket(index) {
  myDishes[index].amount++;
  updateBasket();
}

function updateBasket() {
  let cartItems = document.querySelector(".cart-item");
  let totalPrice = document.querySelector(".total-price");
  let cartCount = document.getElementById("cartCount");
  cartItems.innerHTML = "";

  let total = 0;
  let itemCount = 0;

  myDishes.forEach((dish, index) => {
    if (dish.amount > 0) {
      cartItems.innerHTML += `
        <p>${dish.name} (${dish.amount}x) - €${(
        dish.price * dish.amount
      ).toFixed(2)}</p>    
        <button onclick="removeFromBasket(${index})">
          <img src="assets/images/Header/trash.svg" alt="" />
        </button>
        `;
      total += dish.price * dish.amount;
      itemCount += dish.amount;
    }
  });
  (totalPrice.innerHTML = `Total: €${total.toFixed(2)}`),
    (cartCount.textContent = itemCount);
}

function removeFromBasket(index) {
  if (myDishes[index].amount > 0) {
    myDishes[index].amount--;
  }
  updateBasket();
}

function orderDish() {
  document.getElementById("basket").classList.add("displayNone");
  document.getElementById("thanksMessage").classList.remove("displayNone");
  myDishes.forEach((dish) => (dish.amount = 0));
  updateBasket();
}

function openBasket() {
  document.getElementById("basket").classList.remove("displayNone");
}
function closeBasket() {
  document.getElementById("basket").classList.add("displayNone");
}

init();

const poppupEl = document.querySelector("#poppup");
const thanksMessageEl = document.querySelector("#thanksMessage");
const thanksMessageImage = document.querySelector("#thanksMessage img");

poppupEl.addEventListener("click", () => {
  thanksMessageEl.style.display = "flex";
});

thanksMessageImage.addEventListener("click", () => {
  thanksMessageEl.style.display = "none";
});
