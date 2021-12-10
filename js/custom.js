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





// var article = document.getElementsByClassName("sellers-article");
// var showCart = document.getElementsByClassName("sepet");

// // for(i=0;i<=article.length;i++){
// //     article[i].addEventListener("mouseover", ()=>{
// //         showCart.style.display="flex";
// //         })
// //     article[i].addEventListener("mouseout", ()=>{
// //         showCart.style.display="none";
// //         })
// // }

// function show(){
    
//     var showCart = document.getElementsByClassName("sepet");  
//     for (i=0;i<=showCart.length;i++){
//         showCart[i].style.display="flex";
//     }  
    
// }
// function hide(){
//     var showCart = document.getElementsByClassName("sepet");  
//     for (j=0;j<=showCart.length;j++){
//         showCart[j].style.display="none";
//     }  
// }
// show();
// hide();