    fetch('./product.json')
    .then(response => response.json())
    .then((productData) => {
        let karar = document.querySelector("#karar");
        karar.addEventListener('submit', formSubmit);

        function formSubmit(event) {
            event.preventDefault()
            const start = document.getElementById("kararButonu");
            const startDiv = document.getElementById("start");
            const cinsiyetDiv = document.getElementById("cinsiyet");
            const yasAraligiDiv = document.getElementById("yasAraligi");
            const konseptDiv = document.getElementById("konsept");
            const urunler = document.getElementById("urunler");

            const erkekButonu = document.getElementById("erkekButonu").checked;
            const kadinButonu = document.getElementById("kadinButonu").checked;

            const yas16_20 = document.getElementById("yas16-20").checked;
            const yas20_30 = document.getElementById("yas20-30").checked;
            const yas30_45 = document.getElementById("yas30-45").checked;
            const yas45ustu = document.getElementById("yas45ustu").checked;

            const yilbasi = document.getElementById("yilbasi").checked;
            const sevgili = document.getElementById("sevgili").checked;
            const dogum = document.getElementById("dogum").checked;
            const evlilik = document.getElementById("evlilik").checked;

            console.log(productData);

            function productTicketTitle(cins,ys,kons) {
                const titles = productData.reduce((ttl, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? ttl + prdct.title + "," : ttl, "");
                console.log(titles);
                let titleArr = titles.split(",");
                titleArr.pop();
                return titleArr;
            }
            function productTicketImage(cins,ys,kons) {
                const images = productData.reduce((img, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? img + prdct.images + "," : img, "");
                let imageArr = images.split(",");
                imageArr.pop();
                return imageArr;
            }
            function productTicketPrice(cins,ys,kons) {
                const _price = productData.reduce((prc, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? prc + prdct.price + "," : prc, "");
                let priceArr = _price.split(",");
                priceArr.pop();
                return priceArr;
            }
            function productTicketPriceUp(cins,ys,kons) {
                const _priceUp = productData.reduce((prcup, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? prcup + prdct.upPrice + "," : prcup, "");
                let priceUpArr = _priceUp.split(",");
                priceUpArr.pop();
                return priceUpArr;
            }

            function productStructure(cins,ys,kons) {
                let structure = urunAlani;
                for (i = 0; i< productTicketTitle(cins,ys,kons).length; i++){
                    const urunAlani = document.getElementById("urunAlani");
                    urunAlani.innerHTML +=`
                    <div class="col-12 col-md-3 col-lg-4 d-flex flex-column justify-content-between" style="min-height:500px">
                        <div class="mb-1 pt-5">${productTicketTitle(cins,ys,kons)[i]}</div>
                        <div class="image">
                        <img src="${productTicketImage(cins,ys,kons)[i]}" alt="${productTicketTitle(cins,ys,kons)[i]}" style="width:100%;">
                            <div class="price d-flex justify-content-evenly fs-5 my-3">
                                <p class="fs-5">${productTicketPrice(cins,ys,kons)[i]}</p>
                                <p class="text-decoration-line-through h3-w50 fs-4"> ${productTicketPriceUp(cins,ys,kons)[i]} </p>
                            </div>
                        </div> 
                    </div>

                    `
                }
                return structure;
                
            }

            
            if (erkekButonu && yas16_20 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas16-20";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)
               

            } else if (erkekButonu && yas16_20 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "erkek";
                let yx = "yas16-20";
                let kx = "sevgili";
                productStructure(cx,yx,kx)
               
              
            } else if (erkekButonu && yas16_20 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                
                let cx = "erkek";
                let yx = "yas16-20";
                let kx = "dogum";
                productStructure(cx,yx,kx)

            } else if (erkekButonu && yas16_20 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
               
                let cx = "erkek";
                let yx = "yas16-20";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

            } else if (erkekButonu && yas20_30 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "erkek";
                let yx = "yas20-30";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas20-30";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas20-30";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas20-30";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "erkek";
                let yx = "yas30-45";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas30-45";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas30-45";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas30-45";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "erkek";
                let yx = "yas45ustu";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas45ustu";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas45ustu";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas45ustu";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "kadin";
                let yx = "yas16-20";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas16-20";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "kadin";
                let yx = "yas16-20";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas16-20";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas20-30";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas20-30";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "kadin";
                let yx = "yas20-30";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "kadin";
                let yx = "yas20-30";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                let cx = "kadin";
                let yx = "yas30-45";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas30-45";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas30-45";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas30-45";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas45ustu";
                let kx = "yilbasi";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas45ustu";
                let kx = "sevgili";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas45ustu";
                let kx = "dogum";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "kadin";
                let yx = "yas45ustu";
                let kx = "evlilik";
                productStructure(cx,yx,kx)

                // yazdırma kodları
            } else {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunler.style.display = "flex";
                startDiv.style.display = "none";

                urunAlani.innerHTML = `
                <h2 class=" my-5 pt-5">Seçeneklerden birini seçmediniz lütfen tüm seçenekleri seçin.</h2>
                `;}
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
