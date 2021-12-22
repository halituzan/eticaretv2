fetch('./product.json')
    .then(response => response.json())
    .then((productData) => {
        let karar = document.querySelector("#karar");
        karar.addEventListener('submit', formSubmit);
        function formSubmit(event) {
            event.preventDefault()
            productStructure = (cins, ys, kons) => {
                for (i = 0; i < productTicketTitle(cins, ys, kons).length; i++) {
                    const urunAlani = document.getElementById("urunAlani");
                    urunAlani.innerHTML += `
                    <div class="col-12 col-md-3 col-lg-4 p-0 d-flex flex-column justify-content-between align-items-baseline" style="min-height:650px" >
                    <div class="choice-card card border border-success mb-3 me-3 d-flex flex-column justify-content-between">
                        <a href="#" class="text-decoration-none"><h5 class="card-header bg-success text-light">${productTicketTitle(cins, ys, kons)[i]}</h5></a>
                        <div class="image"><a href="#" class="text-decoration-none">
                        <img src="${productTicketImage(cins, ys, kons)[i]}" alt="${productTicketTitle(cins, ys, kons)[i]}" style="width:100%;"></a>

                            <div class="card-body price d-flex justify-content-between fs-5">
                            <a href="#"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 text-success" width="30px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></a>
                                <p class="fs-5 m-0 fw-bold text-success">${productTicketPrice(cins, ys, kons)[i]}${productData.products[0].currency} 
                                <span class="text-decoration-line-through h3-w50 fs-4 m-0 fst-normal text-secondary"> ${productTicketPriceUp(cins, ys, kons)[i]}${productData.products[0].currency} </span>
                                </p>
                               
                            </div>
                        </div> 
                        </div>
                    </div>`}
                return;
            }
            productTicketTitle = (cins, ys, kons) => {
                const titles = productData.products.reduce((ttl, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? ttl + prdct.title + "," : ttl, "");
                let titleArr = titles.split(",");
                titleArr.pop();
                return titleArr;
            }

            productTicketImage = (cins, ys, kons) => {
                const images = productData.products.reduce((img, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? img + prdct.images + "," : img, "");
                let imageArr = images.split(",");
                imageArr.pop();
                return imageArr;
            }
            productTicketPrice = (cins, ys, kons) => {
                const _price = productData.products.reduce((prc, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? prc + prdct.price + "," : prc, "");
                let priceArr = _price.split(",");
                priceArr.pop();
                return priceArr;
            }
            productTicketPriceUp = (cins, ys, kons) => {
                const _priceUp = productData.products.reduce((prcup, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? prcup + prdct.upPrice + "," : prcup, "");
                let priceUpArr = _priceUp.split(",");
                priceUpArr.pop();
                return priceUpArr;
            }

            deliveryGender = () => {
                const erkekButonu = document.getElementById("erkekButonu").checked;
                const kadinButonu = document.getElementById("kadinButonu").checked;
                if (erkekButonu) {
                    return { cx: "erkek", cy: erkekButonu, };
                } else if (kadinButonu) {
                    return { cx: "kadin", cy: kadinButonu, };
                } else {
                    return alert("Cinsiyet seçmediniz.");
                }
            }
            deliveryAge = () => {
                const yas16_20 = document.getElementById("yas16-20").checked;
                const yas20_30 = document.getElementById("yas20-30").checked;
                const yas30_45 = document.getElementById("yas30-45").checked;
                const yas45ustu = document.getElementById("yas45ustu").checked;
                if (yas16_20) {
                    return { yx: "yas16-20", yy: yas16_20, };
                } else if (yas20_30) {
                    return { yx: "yas20-30", yy: yas20_30, };
                } else if (yas30_45) {
                    return { yx: "yas30-45", yy: yas30_45, };
                } else if (yas45ustu) {
                    return { yx: "yas45ustu", yy: yas45ustu, };
                } else {
                    return alert("Yaş seçmediniz.");
                }
            }
            deliveryConsept = () => {
                const yilbasi = document.getElementById("yilbasi").checked;
                const sevgili = document.getElementById("sevgili").checked;
                const dogum = document.getElementById("dogum").checked;
                const evlilik = document.getElementById("evlilik").checked;
                if (yilbasi) {
                    return { kx: "yilbasi", ky: yilbasi, };
                } else if (sevgili) {
                    return { kx: "sevgili", ky: sevgili, };
                } else if (dogum) {
                    return { kx: "dogum", ky: dogum, };
                } else if (evlilik) {
                    return { kx: "evlilik", ky: evlilik, };
                } else {
                    return alert("Konsept seçmediniz.");
                }
            }
            productCondition = (check1, check2, check3, cins, ys, kons) => {
                const start = document.getElementById("kararButonu");
                const startDiv = document.getElementById("start");
                const cinsiyetDiv = document.getElementById("cinsiyet");
                const yasAraligiDiv = document.getElementById("yasAraligi");
                const konseptDiv = document.getElementById("konsept");
                const urunler = document.getElementById("urunler");
                if (check1 && check2 && check3) {
                    start.style.display = "none";
                    cinsiyetDiv.style.display = "none";
                    yasAraligiDiv.style.display = "none";
                    konseptDiv.style.display = "none";
                    urunler.style.display = "flex";
                    startDiv.style.display = "none";
                    return productStructure(cins, ys, kons)
                } else {
                    return null;
                }
            }
            let gender = deliveryGender();
            let age = deliveryAge();
            let consept = deliveryConsept();
            productCondition(gender.cy, age.yy, consept.ky, gender.cx, age.yx, consept.kx);
        }
    })
    .catch((err) => console.log("Error"));

// const st = {};

// st.flap = document.querySelector('#flap');
// st.toggle = document.querySelector('.toggle');

// st.choice1 = document.getElementById('erkekButonu');
// st.choice2 = document.getElementById('kadinButonu');

// st.flap.addEventListener('transitionend', () => {

//     if (st.choice1.checked) {
//         st.toggle.style.transform = 'rotateY(-15deg)';
//         setTimeout(() => st.toggle.style.transform = '', 400);
//     } else {
//         st.toggle.style.transform = 'rotateY(15deg)';
//         setTimeout(() => st.toggle.style.transform = '', 400);
//     }

// })

// st.clickHandler = (e) => {

//     if (e.target.tagName === 'LABEL') {
//         setTimeout(() => {
//             st.flap.children[0].textContent = e.target.textContent;
//         }, 250);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
// });

// document.addEventListener('click', (e) => st.clickHandler(e));
