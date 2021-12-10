var sellersDetails = document.getElementById("top-main");

fetch('./users.json')
  .then(response => response.json())
  .then((data) => {
    
    data.forEach((userlist) => {
      
       sellersDetails.innerHTML += `
       <div class='sellers h3-flex-jc-se h3-align-fs'>
       <div style="text-align:center">
       <img src='${userlist.images}' alt=''>
       

       <div class="h3-flexd-jc-sp h3-h100 h3-flex-jc-fe">
       <p class="mb-0">
       <a href='./sellers.html#encoksatanlar'>${userlist.orders} Satış</a></p>
       <p class="mb-0 h3-flex-jc-c">
       <a href='./sellers.html'>${userlist.name}</a>
       </p>
       
       </div>
       </div>
       
       
       </div>`;
    });
})
.catch ((error) => console.log("Error"));


var productDetails = document.getElementById("encoksatanlar");
let newProductDetails = document.getElementById("enyeniler");

fetch('./product.json')
  .then(response => response.json())
  .then((productData) => {
    
    productData.forEach((productList) => {
      
       productDetails.innerHTML += `<div class="article h3-align-c h3-flex-jc-se">
       <div class="article-img">
           <img src="${productList.images}" alt="${productList.title}">
       </div>
       <div class="article-details h3-flexd-jc-se">
           <h3 class="article-h3">${productList.title}</h3>
       </div>
   </div>`;
       newProductDetails.innerHTML += `
       <div class="icerik">
                                <figure>
                                    <img src="${productList.images}" alt="${productList.title}">
                                </figure>
                                <div class="sepet yeni-urunler">
                                    <a href="#">
                                        <span class="material-icons">favorite</span>
                                    </a>
                                    <a href="#">
                                        <span class="material-icons">shopping_cart_checkout</span>
                                    </a>
                                    <a href="#">
                                        <span class="material-icons">checklist</span>
                                    </a>
                                </div>
                                <h3>${productList.title}</h3>
                                <span class="h3-flex h3-flex-jc-sp" style="font-weight:bold;color:black;font-size:1.5rem">
                                    <p>Fiyat: <a href="#">${productList.price} ${productList.currency}</a></p>
                                    <p class="h3-w50"><span style="text-decoration:line-through;color:grey;">${productList.upPrice} ${productList.currency}</span></p>
                                </span>
      </div>
       `;
    });
})
.catch ((error) => console.log("Error"));