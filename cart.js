let products = [
    {
      createdAt: "2022-10-04T05:59:30.426Z",
      name: "Elegant Wooden Cheese",
      price: 213.00,
      id: 1,
      img: "https://i.pinimg.com/474x/95/57/fc/9557fc97354886e2aa15e49c16245282.jpg",
    },
    {
      createdAt: "2022-10-04T05:16:49.660Z",
      name: "Modern Steel Keyboard",
      price: 326.00,
      img: "https://i.pinimg.com/474x/d0/c9/13/d0c91395dbff1cbfc7e413f2cf6a6ba4.jpg",
      id: 2,
    },
    {
      createdAt: "2022-10-03T18:06:44.613Z",
      name: "Awesome Soft Towels",
      price: 762.00,
      img: "https://i.pinimg.com/474x/49/26/f7/4926f725f01c7defd463e4f2a0025c8c.jpg",
      id: 3,
    },
    {
      createdAt: "2022-10-04T05:16:49.660Z",
      name: "Modern Steel Keyboard",
      price: "326.00",
      img: "https://i.pinimg.com/474x/04/92/00/0492004f859cb32f8e239057d53acf99.jpg",
      id: "4",
    },
    {
      createdAt: "2022-10-03T18:06:44.613Z",
      name: "Awesome Soft Towels",
      price: 762.00,
      img: "https://i.pinimg.com/474x/c4/23/fa/c423fa18b973474c66f74c52b50a2427.jpg",
      id: 5,
  },
  ];
  // ======================
  //spead 
  //rest
  let cart =  JSON.parse(localStorage.getItem('cart'))?.length ? JSON.parse(localStorage.getItem('cart')) : []; // tao gio hang
  let count = JSON.parse(localStorage.getItem('cart'))?.length ? JSON.parse(localStorage.getItem('cart')).length : 0
  document.getElementById('quantity-item').innerHTML = `(${count})`;
  
  
  const listCart = document.querySelector("#product-row");
  
  
  
  const getListProductCart = (products) => {
    if (!Array.isArray(products)) return false;
    return products
    .map((item) => {
          console.log(item);
        return `
        <div class="product-col">
        <div class="product-img">
        <a href="">
        <img
        srcset=${item.img}
                      alt=""
                      class="img-fluid"
                      />
                  </a>
              </div>
              <div class="product-info">
              <h3 class="product-name">
              <a href="" class="product-link"> ${item.name} </a>
                  </h3>
                  <p class="product-price">${item.price}$</p>
              </div>
              <button  onclick = addToCart(${item.id})  id="add-to-cart" >Add to cart</button>
              </div> 
              `;
          })
      };
      
      listCart.innerHTML = getListProductCart(products).join('');
      
  
      // JSON -> JSON.stringify(): chuyen 1 object ve dang json
           //  -> JSON.parse(); chuyen tu string hoac json ve object
      function addToCart(productId){  
          
          const productExist = cart.find(item=> Number(item.id) === Number(productId))
          console.log(productExist);
          if(productExist){
             
  
              newCart = cart.map(item=>{
                  if(Number(item.id) === Number(productExist.id)){
                       item.quantity = item.quantity + 1; 
                  }
                  return item; 
              })
               
             
      
              //console.log('aaa',cart);
              localStorage.setItem('cart',JSON.stringify(newCart))
          }else{
              const product = products.find(item=>Number(item.id)===Number(productId));
              product.quantity = 1; 
              cart.push(product);
              localStorage.setItem('cart',JSON.stringify(cart))
              count = JSON.parse(localStorage.getItem('cart')).length; 
              document.getElementById('quantity-item').innerHTML = count;  
          }
  
      }   
      
  
  
  
  