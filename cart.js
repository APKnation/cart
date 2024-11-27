let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(basket);

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket.map((x) => {
      let { id, item } = x;
      let search = shopItemData.find((y) => y.id === id) || [];
      return `
        <div class="cart-item">
          <img width="150" src="${search.img}" alt="">
          <div class="details">
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
            <h3>$${item * search.price}</h3>
          </div>
        </div>`;
    }).join('');
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
      <h2>Cart is empty</h2>
      <a href="index.html">
        <button class="HomeBtn">Back Home</button>
      </a>`;
  }
};

generateCartItems();

let increment = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search) {
    search.item += 1;
  } else {
    basket.push({ id: id, item: 1 });
  }
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  update(id);
  console.log("Incremented item with id:", id);
};

let decrement = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search && search.item > 1) {
    search.item -= 1;
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    update(id);
    console.log("Decremented item with id:", id);
  }
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search) {
    document.getElementById(id).innerHTML = search.item;
  }
  calculation();
};

let removeItem = (id) => {
  basket = basket.filter((x) => x.id !== id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  calculation();
  console.log("Removed item with id:", id);
};

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let { item, id } = x;
      let search = shopItemData.find((y) => y.id === id) || [];
      return item * search.price;
    }).reduce((x, y) => x + y, 0);

    console.log("Total amount:", amount);
    return amount;
  } else {
    return 0;
  }
};

totalAmount();
