let products = [
    {
      createdAt: "2022-10-04T05:59:30.426Z",
      name: "Elegant Wooden Cheese",
      price: "213.00",
      img:"https://i.pinimg.com/474x/95/57/fc/9557fc97354886e2aa15e49c16245282.jpg",
      id: "1",
    },
    {
      createdAt: "2022-10-04T05:16:49.660Z",
      name: "Modern Steel Keyboard",
      price: "326.00",
      img:"https://i.pinimg.com/474x/d0/c9/13/d0c91395dbff1cbfc7e413f2cf6a6ba4.jpg",
      id: "2",
    },
    {
      createdAt: "2022-10-03T18:06:44.613Z",
      name: "Awesome Soft Towels",
      price: "762.00",
      img:"https://i.pinimg.com/474x/95/57/fc/9557fc97354886e2aa15e49c16245282.jpg",
      id: "3",
    },
  ];
  
  // function addField() {
  //   products = products.map((item) => {
  //     return {
  //       ...item,
  //       image:
  //         "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/310146640_1250812672161101_1666791329989817683_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_FX8DFbg7TsAX934jSj&tn=-0U_6tF1riwcReJ2&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-f2bo9L00rLmULZOJr20FDneQ6D--7TyoAlEKQb-AuPQ&oe=634596DD",
  //     };
  //   });
  // }
  
  // addField();
  // ================
  const tableProducts = document.querySelector("#products");
  const createProduct = document.querySelector("#create");
  const btnUpdate = document.querySelector("#update");
  const formAdd = document.querySelector("#form-add");
  const formEdit = document.querySelector("#form-edit");
  
  const getListProductsTable = (productList) => {
    if (!Array.isArray(productList)) return false;
  
    return productList
      .map((item) => {
        return `
              <tr class="product-column">
                  <td>${item.name}</td>
                  <td>${item.price}</td>
                  <td><img width="90px" src=${item.img} /></td>
                  <td width="200">
                      <div class="btn">
                          <button onclick="updateItem(${item.id})">Edit</button>
                          <button onclick="removeItem(${item.id})">Remove</button>
                      </div>
                  </td>
                  
              </tr>           
          `;
      })
      .join("");
  };
  //  xoá
  // thêm: tạo form hiện ra, thêm một trường<td>, thêm một product, tạo xog thì gọi lại tableProducts
  
  const removeItem = (id) => {
    products = products.filter((item) => Number(item.id) != Number(id));
    showProducts(products);
  };
  
  // add product
  formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    products.push({
      id: Date.now(),
      name: document.querySelector("#form-add #name").value,
      price: document.querySelector("#form-add #price").value,
      img: document.querySelector("#form-add #img").value,
    });
    showProducts(products);
    formAdd.reset();
  });
  
  const showProducts = (products) => {
    tableProducts.innerHTML = getListProductsTable(products);
  };
  // ==========
  
  // let elementId;
  // 
  
  let _id;
  
  const updateItem = (id) => {
    // fill thong tin vao form update
    _id = id; 
    const currentProduct = products.find((item) => item.id == id);
    document.querySelector("#form-edit #name").value = currentProduct.name;
    document.querySelector("#form-edit #price").value = currentProduct.price;
    console.log();
    // submit edit
  
    //   products = products.map((item) => (item.id == id ? product : item));
    //   console.log(products);
    //   const form = document.querySelector("#form-edit");
    //   form.style.display = "block";
    //   elementId = id;
  };
  
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProduct = {
      name: document.querySelector("#form-edit #name").value,
      price: document.querySelector("#form-edit #price").value,
      _id
    };
  
    
    products = products.map(item=>{
      if(Number(item.id) === Number(newProduct._id)){
          item.name = newProduct.name; 
          item.price = newProduct.price;
      }
      return item; 
    })
  
    showProducts(products); 
  
  
  
    // cap nhat san pham moi
    // tim san pham vua submit co trong mang khong? neu co thi cap nhat mang co san pham moi
    // nguoc lai thi giu nguyen mang cu khonog cap nhat san pham
  //   const newProducts = products.map((item) =>
  //     item.id == newProduct._id ? newProduct : item
  //   );
  
  
  
    //console.log(newProduct);
  });
  // ==================
  
  // =================
  // e.preventDefault();
  