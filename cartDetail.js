const listCartDetail = document.getElementsByClassName("cartdt-row")[0];

//Chaining block JS

let carts = JSON.parse(localStorage.getItem("cart"))?.length
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const total = document.getElementsByClassName("result")[0];

const sum = carts.length
  ? carts.reduce((curent, next) => {
      return (curent += next.price * next.quantity);
    }, 0)
  : 0;

console.log(sum);

total.innerHTML = `Tổng tiền: ${sum}` ;

const getListProductCart = (carts) => {
  if (!Array.isArray(carts)) return false;
  return carts
    .map((item) => {
      console.log(item);
      return `
        
    <div class="cartdt-item">
        <div class="item">
            <div class="cartdt-img">
                <a href="">
                <img
                    srcset=${item.img}
                    alt=""
                    class="img-fluid"
                />
                </a>
            </div>
            <div class="cartdt-info">
                    <h3 class="cartdt-name">
                        <a href="" class="cartdt-link">${item.name} </a>
                    </h3>
                    <p class="cartdt-price">${item.price}$</p>
            </div>
        </div>
        <div class="quantity">
            <button  onclick = decrement(${item.id}) ><i class="fa-solid fa-minus"></i></button>
            <p class="quantity-item">${item.quantity}</p>
            <button  onclick = increment(${item.id}) ><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="total">
            <span>Thành tiền: ${item.price * item.quantity}$</span>
        </div>
    </div>
 `;
    })
    .join("");
};
listCartDetail.innerHTML = getListProductCart(carts);

function decrement(id) {
  const productExist = carts.find((item) => Number(item.id) === Number(id));
  if (productExist && productExist.quantity === 1) return;
  const new_carts = carts.map((item) => {
    if (Number(item.id) === Number(id)) {
      item.quantity = item.quantity - 1;
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(new_carts));
  location.reload();
}

function increment(id) {
  const new_carts = carts.map((item) => {
    if (Number(item.id) === Number(id)) {
      item.quantity = item.quantity + 1;
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(new_carts));
  location.reload();
}
