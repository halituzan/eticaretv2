

fetch('./users.json')
    .then(response => response.json())
    .then((data) => {

        data.forEach((userlist) => {
            let sellersDetails = document.getElementById("top-main");

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
    .catch((error) => console.log("Error"));



fetch('./product.json')
    .then(response => response.json())
    .then((productData) => {

        productData.forEach((productList) => {
            let productDetails = document.getElementById("encoksatanlar");
            productDetails.innerHTML += `<div class="article h3-align-c h3-flex-jc-se">
       <div class="article-img">
           <img src="${productList.images}" alt="${productList.title}">
       </div>
       <div class="article-details h3-flexd-jc-se">
           <h3 class="article-h3">${productList.title}</h3>
       </div>
   </div>`});
        productData.forEach((productList1) => {
            let newProductDetails = document.getElementById("enyeniler");
            newProductDetails.innerHTML += `
       <div class="icerik">
                                <figure>
                                    <img src="${productList1.images}" alt="${productList1.title}">
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
                                <h3>${productList1.title}</h3>
                                <span class="h3-flex h3-flex-jc-sp" style="font-weight:bold;color:black;font-size:1.5rem">
                                    <p>Fiyat: <a href="#">${productList1.price} ${productList1.currency}</a></p>
                                    <p class="h3-w50"><span style="text-decoration:line-through;color:grey;">${productList1.upPrice} ${productList1.currency}</span></p>
                                </span>
      </div>
       `;
        })
    })
    .catch((error) => console.log("Error"));