fetch('./product.json')
    .then(response => response.json())
    .then((productData) => {
        // console.log (productData); // KONSOL 
        // console.log (productData[0].images); // KONSOL 
        // console.log (typeof productData[0].images); // KONSOL 
        // console.log (typeof productData); // KONSOL 
        let karar = document.querySelector("#karar");
        karar.addEventListener('submit', formSubmit);

        function formSubmit(event) {
            event.preventDefault()
            const start = document.getElementById("kararButonu");
            const startDiv = document.getElementById("start");
            const cinsiyetDiv = document.getElementById("cinsiyet");
            const yasAraligiDiv = document.getElementById("yasAraligi");
            const konseptDiv = document.getElementById("konsept");
            const urunAlani = document.getElementById("urunAlani");


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
            //console.log(productData[0].etiket.yas) // çıktı veriyor.

            function productTicketTitle(cins,ys,kons) {
                const titles = productData.reduce((ttl, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? ttl + prdct.title + "," : ttl, "");
                let titleArr = titles.split(",");
                titleArr.pop();
                return titleArr;
            }

            
            console.log(productTicketTitle("kadin", "yas16-20", "yilbasi")); //titleArr
            console.log(productTicketTitle("kadin", "yas16-20", "yilbasi").length);
            console.log(typeof productTicketTitle("kadin", "yas16-20", "yilbasi"));


            function productTicketImage(cins,ys,kons) {
                const images = productData.reduce((ttl, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? ttl + prdct.images + "," : ttl, "");
                let imageArr = images.split(",");
                imageArr.pop();
                return imageArr;
            }
            function productTicketPrice(cins,ys,kons) {
                const _price = productData.reduce((ttl, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? ttl + prdct.price + "," : ttl, "");
                let priceArr = _price.split(",");
                priceArr.pop();
                return priceArr;
            }
            // console.log(productTicketPrice("erkek","yas45ustu","yilbasi"))
            // console.log(productTicketTitle("kadin","yas16-20","yilbasi"))

            function productTicketPriceUp(cins,ys,kons) {
                const _priceUp = productData.reduce((ttl, prdct) => prdct.etiket.cinsiyet == cins && prdct.etiket.yas == ys && prdct.etiket.konsept == kons ? ttl + prdct.upPrice + "," : ttl, "");
                let priceUpArr = _priceUp.split(",");
                priceUpArr.pop();
                return priceUpArr;
            }

    // console.log(productTicketTitle("kadin", "yas16-20", "yilbasi"));  // ['Zincir Tasarımlı El Çantası', 'Tüylü Kısa Kol Çanta', 'Zincir Detaylı Kemer Tokalı Çanta']
    // console.log(productTicketPrice("kadin", "yas16-20", "yilbasi"));  // ['49.90', '74.50', '89.90']
    // console.log(productTicketImage("kadin", "yas16-20", "yilbasi"));  // ['./images/yeni.jpg', './images/yeni1.jpg', './images/yeni3.jpg']
    // console.log(productTicketPriceUp("kadin", "yas16-20", "yilbasi"));// ['69.90', '99.90', '99.90']
           
            
            // function ProductTitle(title) {
            //     let baslik = document.getElementById("baslik");
            //     // let baslik1 = document.getElementById("baslik1");
            //     // let baslik2 = document.getElementById("baslik2");
            //     return baslik.innerHTML = `<h2>${title}</h2>`;
            // }
            // console.log(ProductTitle(titleArr[0]));

            // function productPrice(Price) {
            //     let price = document.getElementById("price");
            //     // let price1 = document.getElementById("price1");
            //     // let price2 = document.getElementById("price2");
            //     return price.innerHTML = `${Price}`;
                
            // }
            // console.log(productPrice(priceArr[0]));

            // function productPriceUp(PriceUp) {
            //     let priceUp = document.getElementById("priceUp");
            //     // let priceUp1 = document.getElementById("priceUp1");
            //     // let priceUp2 = document.getElementById("priceUp2");
            //     return priceUp.innerHTML = `${PriceUp}`;
            // }
            // console.log(productPrice(priceUpArr[0]));
                

            // function productImages(pImages) {
            //     let image = document.getElementById("image");
            //     // let image1 = document.getElementById("image1");
            //     // let image2 = document.getElementById("image2");

            //     return image.innerHTML = `<img src="${pImages}" style="width:100%">`;
            // }
            // console.log(productImages(imgsArr[0]));

         


            if (erkekButonu && yas16_20 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "flex";
                startDiv.style.display = "none";
                let cx = "erkek";
                let yx = "yas16-20";
                let kx = "yilbasi";

                for (i = 0; i< productTicketTitle(cx,yx,kx).length; i++){
                    
                      
                    productTicketTitle(cx,yx,kx);
                    productTicketPrice(cx,yx,kx);
                    productTicketPriceUp(cx,yx,kx);
                    productTicketImage(cx,yx,kx);
                    urunAlani.innerHTML +=`
                    <div class="col-3 d-flex flex-column justify-content-end">
                    <div>${productTicketTitle(cx,yx,kx)[i]}</div>
                    <div class="image">
                        <img src="${productTicketImage(cx,yx,kx)[i]}" alt="${productTicketTitle(cx,yx,kx)[i]}" style="width:100%;">
                    </div>
                    <div class="price">
                        <p>${productTicketPrice(cx,yx,kx)[i]}</p>
                        <p>${productTicketPriceUp(cx,yx,kx)[i]}</p>
                    </div>
                </div>
                    `

                }

               


            } else if (erkekButonu && yas16_20 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                const titles = productData.reduce((acc, prdct) =>
                    prdct.etiket.cinsiyet == "erkek"
                        && prdct.etiket.yas == "yas16-20"
                        && prdct.etiket.konsept == "sevgili" ? acc + prdct.title + "</br>" : acc, "");
                console.log(titles)
                // yazdırma kodları
            } else if (erkekButonu && yas16_20 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";
                const titles = productData.reduce((acc, prdct) =>
                    prdct.etiket.cinsiyet == "erkek"
                        && prdct.etiket.yas == "yas16-20"
                        && prdct.etiket.konsept == "dogum" ? acc + prdct.title + "</br>" : acc, "");
                console.log(titles)

                // yazdırma kodları
            } else if (erkekButonu && yas16_20 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";
                const titles = productData.reduce((acc, prdct) =>
                    prdct.etiket.cinsiyet == "erkek"
                        && prdct.etiket.yas == "yas16-20"
                        && prdct.etiket.konsept == "dogum" ? acc + prdct.title + "</br>" : acc, "");
                console.log(titles[0])

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas20_30 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas30_45 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (erkekButonu && yas45ustu && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";


                // const titles = productData.reduce((ttl, prdct) =>
                //     prdct.etiket.cinsiyet == "kadin"
                //         && prdct.etiket.yas == "yas16-20"
                //         && prdct.etiket.konsept == "yilbasi" ? ttl + prdct.title + "," : ttl, "");
                // let titleArr = titles.split(",");
                // titleArr.pop();

                // console.log(titleArr)


                // const imgs = productData.reduce((imgThumb, ThumbImg) => ThumbImg.etiket.cinsiyet == "kadin" && ThumbImg.etiket.yas == "yas16-20" && ThumbImg.etiket.konsept == "yilbasi" ? imgThumb + ThumbImg.images + "," : imgThumb, "");
                // let imgsArr = imgs.split(",");
                // console.log(imgsArr)
                // imgsArr.pop();

                // const priceD = productData.reduce((Price, fiyats) =>
                //     fiyats.etiket.cinsiyet == "kadin"
                //         && fiyats.etiket.yas == "yas16-20"
                //         && fiyats.etiket.konsept == "yilbasi" ? Price + fiyats.price + "," : Price, "");
                // let priceArr = priceD.split(",");
                // priceArr.pop();

                // const _price = productData.reduce((priceUps, fiyatUp) =>
                //     fiyatUp.etiket.cinsiyet == "kadin"
                //         && fiyatUp.etiket.yas == "yas16-20"
                //         && fiyatUp.etiket.konsept == "yilbasi" ? priceUps + fiyatUp.upPrice + "," : priceUps, "");
                // let priceUpArr = _price.split(",");
                // priceUpArr.pop();


                // let baslik = document.getElementById("baslik");
                // let baslik1 = document.getElementById("baslik1");
                // let baslik2 = document.getElementById("baslik2");
                // // let baslik3 = document.getElementById("baslik3");

                // baslik.innerHTML += `<h2>${titleArr[0]}</h2>`;
                // baslik1.innerHTML += `<h2>${titleArr[1]}</h2>`;
                // baslik2.innerHTML += `<h2>${titleArr[2]}</h2>`;


                // let price = document.getElementById("price");
                // let price1 = document.getElementById("price1");
                // let price2 = document.getElementById("price2");


                // price.innerHTML += `${priceArr[0]}`;
                // price1.innerHTML += `${priceArr[1]}`;
                // price2.innerHTML += `${priceArr[2]}`;


                // let priceUp = document.getElementById("priceUp");
                // let priceUp1 = document.getElementById("priceUp1");
                // let priceUp2 = document.getElementById("priceUp2");

                // priceUp.innerHTML += `${priceUpArr[0]}`;
                // priceUp1.innerHTML += `${priceUpArr[1]}`;
                // priceUp2.innerHTML += `${priceUpArr[2]}`;




                // let image = document.getElementById("image");
                // let image1 = document.getElementById("image1");
                // let image2 = document.getElementById("image2");


                // image.innerHTML += `<img src="${imgsArr[0]}" style="width:100%">`;
                // image1.innerHTML += `<img src="${imgsArr[1]}" style="width:100%">`;
                // image2.innerHTML += `<img src="${imgsArr[2]}" style="width:100%">`;

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas16_20 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas20_30 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas30_45 && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && yilbasi) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && sevgili) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && dogum) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else if (kadinButonu && yas45ustu && evlilik) {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                // yazdırma kodları
            } else {
                start.style.display = "none";
                cinsiyetDiv.style.display = "none";
                yasAraligiDiv.style.display = "none";
                konseptDiv.style.display = "none";
                urunAlani.style.display = "block";
                startDiv.style.display = "none";

                urunAlani.innerHTML = `
                <h2 class=" my-5 pt-5">Seçeneklerden birini seçmediniz lütfen tüm seçenekleri seçin.</h2>
                <button type="button" onclick="window.location.reload();" class="btn btn-success">Yeniden Dene</button>
                `;

            }



        }



        // const titles = productData.reduce((ttl, prdct) =>
        //     prdct.etiket.cinsiyet == "kadin"
        //         && prdct.etiket.yas == "yas16-20"
        //         && prdct.etiket.konsept == "yilbasi" ? ttl + prdct.title + "," : ttl, "");
        // let titleArr = titles.split(",");
        // titleArr.pop();

        // // console.log(titleArr)


        // const imgs = productData.reduce((imgThumb, ThumbImg) =>
        //     ThumbImg.etiket.cinsiyet == "kadin"
        //         && ThumbImg.etiket.yas == "yas16-20"
        //         && ThumbImg.etiket.konsept == "yilbasi" ? imgThumb + ThumbImg.images + "," : imgThumb, "");
        // let imgsArr = imgs.split(","); // , lerden ayırarak diziye dönüştürdü.
        // imgsArr.pop(); // dizi içerisindeki son elemanı çıkardı.

        // const priceD = productData.reduce((Price, fiyats) =>
        //     fiyats.etiket.cinsiyet == "kadin"
        //         && fiyats.etiket.yas == "yas16-20"
        //         && fiyats.etiket.konsept == "yilbasi" ? Price + fiyats.price + "," : Price, "");
        // let priceArr = priceD.split(",");
        // priceArr.pop();

        // const _price = productData.reduce((priceUps, fiyatUp) =>
        //     fiyatUp.etiket.cinsiyet == "kadin"
        //         && fiyatUp.etiket.yas == "yas16-20"
        //         && fiyatUp.etiket.konsept == "yilbasi" ? priceUps + fiyatUp.upPrice + "," : priceUps, "");
        // let priceUpArr = _price.split(",");
        // priceUpArr.pop();


        // let baslik = document.getElementById("baslik");
        // let baslik1 = document.getElementById("baslik1");
        // let baslik2 = document.getElementById("baslik2");
        // // let baslik3 = document.getElementById("baslik3");

        // baslik.innerHTML += `<h4>${titleArr[0]}</h4>`;
        // baslik1.innerHTML += `<h4>${titleArr[1]}</h4>`;
        // baslik2.innerHTML += `<h4>${titleArr[2]}</h4>`;


        // let price = document.getElementById("price");
        // let price1 = document.getElementById("price1");
        // let price2 = document.getElementById("price2");
        // let price3 = document.getElementById("price3");

        // price.innerHTML += `${priceArr[0]}`;
        // price1.innerHTML += `${priceArr[1]}`;
        // price2.innerHTML += `${priceArr[2]}`;


        // let priceUp = document.getElementById("priceUp");
        // let priceUp1 = document.getElementById("priceUp1");
        // let priceUp2 = document.getElementById("priceUp2");
        // let priceUp3 = document.getElementById("priceUp3");

        // priceUp.innerHTML += `${priceUpArr[0]}`;
        // priceUp1.innerHTML += `${priceUpArr[1]}`;
        // priceUp2.innerHTML += `${priceUpArr[2]}`;




        // let image = document.getElementById("image");
        // let image1 = document.getElementById("image1");
        // let image2 = document.getElementById("image2");
        // let image3 = document.getElementById("image3");


        // image.innerHTML += `<img src="${imgsArr[0]}" style="width:100%">`;
        // image1.innerHTML += `<img src="${imgsArr[1]}" style="width:100%">`;
        // image2.innerHTML += `<img src="${imgsArr[2]}" style="width:100%">`;


    })
    .catch((err) => console.log("Error"));

