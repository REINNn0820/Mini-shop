let products = [
  { name: "Сүү", price: 4000, category: "Хүнс", rating: 4.6 },
  { name: "Дэвтэр", price: 2000, category: "Бусад", rating: 4.2 },
  { name: "Чихэр", price: 500, category: "Хүнс", rating: 3.9 },
  { name: "Ус", price: 1500, category: "Хүнс", rating: 5 },
  { name: "Шоколад", price: 6000, category: "Хүнс", rating: 4.2 },
  { name: "Алчуур", price: 2500, category: "Ариун цэвэр", rating: 3.5 },
  { name: "Ногоо", price: 1500, category: "Хүнс", rating: 4.7 },
  { name: "Саван", price: 2000, category: "Ариун цэвэр", rating: 3 },
];
//const container = document.getElementById("productList");

function discount(product) {
  const discountedPrice = product;
  const difference = (discountedPrice.price * 15) / 100;
  return product.price - difference;
}

function calculateDiscount(price) {}

function getStarRating(product) {
  if (product.rating > 4) {
    return "star";
  } else {
    return "starless";
  }
}

function renderProductList() {}
const newArray = products.map(discount);
console.log(newArray);
const stars = products.map(getStarRating);
console.log(stars);
// function render() {
//   const cards = (document.createElement("li").className = "cards");

//   const ulEL = document.getElementById("productList");
//   cards.appendChild(newArray);
//   ulEL.appendChild(cards);
// }
// render();
