let shop = document.getElementById('shop');
let shopItemsData = [
  {
    id: "ata",
    name: "shirt",
    desc: "affordable price",
    img: "images/shirt2.jpeg",
    price: "Tsh 5000"
  },
  {
    id: "a",
    name: "computer",
    desc: "affordable price",
    img: "images/Computer.jpeg",
    price: "Tsh 20000"
  },
  {
    id: "at",
    name: "SHIRT",
    desc: "affordable price",
    img: "images/shirt2.jpeg",
    price: "Tsh 5000"
  },
  {
    id: "atan",
    name: "Computer",
    desc: "affordable price",
    img: "images/Computer.jpeg",
    price: "Tsh 20000"
  }
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(shop);

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((item) => {
    return `
      <div id="product-id-${item.id}" class="item">
        <img width="220" src="${item.img}" alt="${item.name}">
        <div class="details">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price-quantity">
            <h2>${item.price}</h2>
            <div class="buttons">
              <i onclick="decrement('${item.id}')" class="bi bi-dash-lg"></i>
              <div id="quantity-${item.id}" class="quantity">0</div>
              <i onclick="increment('${item.id}')" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

let increment = (id) => {
  let selectedItem = shopItemsData.find((item) => item.id === id);
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if (search) {
    search.item += 1;
  } else {
    basket.push({ id: selectedItem.id, item: 1 });
  }
  
  localStorage.setItem("data", JSON.stringify(basket));
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = shopItemsData.find((item) => item.id === id);
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if (search && search.item > 0) {
    search.item -= 1;
  }

  localStorage.setItem("data", JSON.stringify(basket));
  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  let quantityElement = document.getElementById(`quantity-${id}`);
  
  if (search) {
    quantityElement.innerHTML = search.item;
  }

  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

generateShop();
calculation();
