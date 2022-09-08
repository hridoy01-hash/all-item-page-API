(async function () {
    const BUSINESS_ID = "61c0305ad9c586f803196c4a";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    // show item img from api
    const getAllItem = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/items?limit=10`);

    function showAllItem(getAllItem) {
        for (let i = 0; i < getAllItem.length; i++) {
            const singleItem = getAllItem[i];
            console.log("singleItem", singleItem);
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleItem?._id}/${singleItem?.image}`;

            const s1508_all_items_single_product = elementMaker("div", ["s1508_all_items_single_product"]);
            const s1508_product_top_area = elementMaker("div", ["s1508_product_top_area"]);
            s1508_all_items_single_product.appendChild(s1508_product_top_area);
            const s1508_product_bottom_area = elementMaker("div", ["s1508_product_bottom_area"]);
            s1508_all_items_single_product.appendChild(s1508_product_bottom_area);
            const s1508_product_img_main_wrapper = elementMaker("div", ["s1508_product_img_main_wrapper"]);
            s1508_product_top_area.appendChild(s1508_product_img_main_wrapper);
            const s1508_product_img_wrapper = elementMaker("div", ["s1508_product_img_wrapper"]);
            s1508_product_img_main_wrapper.appendChild(s1508_product_img_wrapper);
            const productImage = elementMaker("img", ["s1508_product_img"]);
            s1508_product_img_wrapper.appendChild(productImage);
            setAttributes(productImage, { "src": `${FeatureImage}` });

            const s1508_product_batch_wrapper = elementMaker("div", ["s1508_product_batch_wrapper"]);
            s1508_product_top_area.appendChild(s1508_product_batch_wrapper);
            const s1508_wishlist_cart_icon_container = elementMaker("div", ["s1508_wishlist_cart_icon_container"]);
            s1508_product_batch_wrapper.appendChild(s1508_wishlist_cart_icon_container);
            const s1508_wishlist_cart_icon_wrapper = elementMaker("div", ["s1508_wishlist_cart_icon_wrapper"]);
            s1508_wishlist_cart_icon_container.appendChild(s1508_wishlist_cart_icon_wrapper);
            const s1508_icon_wrapper = elementMaker("div", ["s1508_icon_wrapper"]);
            s1508_wishlist_cart_icon_wrapper.appendChild(s1508_icon_wrapper);
            const wishlistIcon = elementMaker("span", ["s1508_wishlist_icon"]);
            s1508_icon_wrapper.addEventListener("click", function () {
                wishlistIcon.classList.toggle("s1508_active_wishlist_add");
            });
            wishlistIcon.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg" width="11.004" height="10.438"
            viewBox="0 0 11.004 10.438">
            <path id="heart_1_" data-name="heart (1)"
                d="M7.286.917A2.666,2.666,0,0,0,5,2.291,2.666,2.666,0,0,0,2.7.917,2.832,2.832,0,0,0,0,3.853C0,6.675,4.56,9.934,4.754,10.072l.241.17.241-.17c.194-.137,4.757-3.4,4.757-6.219A2.832,2.832,0,0,0,7.286.917Z"
                transform="translate(0.507 -0.417)" fill="none" stroke="#fff"
                stroke-width="1" />
        </svg>`;
            s1508_icon_wrapper.appendChild(wishlistIcon);

            // product review 
            const s1508_product_rating_wrapper = elementMaker("div", ["s1508_product_rating_wrapper"]);
            s1508_product_batch_wrapper.appendChild(s1508_product_rating_wrapper);
            const s1508_product_rating = elementMaker("ul", ["s1508_product_rating"]);
            s1508_product_rating_wrapper.appendChild(s1508_product_rating);
            const ratingNumber = singleItem?.reviewRating?.rating;
            const totalReview = singleItem?.reviewRating?.review;

            function showReviewStar(ratingNumber, totalReview, s1508_product_rating) {
                let stars = ratingNumber;
                let starsFloor = Math.floor(stars);
                // console.log("starsFloor", starsFloor);
                for (let i = 0; i < starsFloor; i++) {
                    let fc001_review_star = elementMaker("li", ["s1508_product_rating_start"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#fed300"></path> </svg>
                     `

                    s1508_product_rating.appendChild(fc001_review_star);

                };
                let starDecimal = stars - starsFloor;
                if (starDecimal > 0) {
                    let fc001_review_star = elementMaker("li", ["s1508_product_rating_start"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" viewBox="0 0 11 11"> <defs> <linearGradient id="linear-gradient" y1="0.384" x2="1" y2="0.381" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#fed300"></stop> <stop offset="0.5" stop-color="#fbd414"></stop> <stop offset="0.503" stop-color="#dedbcc"></stop> <stop offset="1" stop-color="#dcdcdc"></stop> </linearGradient> </defs> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="url(#linear-gradient)"></path> </svg>
                                `;
                    s1508_product_rating.appendChild(fc001_review_star);
                };
                if ((5 - stars) > 0) {
                    for (let i = 0; i < Math.floor((5 - stars)); i++) {
                        let fc001_review_star = elementMaker("li", ["s1508_product_rating_start"]);
                        fc001_review_star.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#dfdfdf"></path> </svg>
                                `;
                        s1508_product_rating.appendChild(fc001_review_star);
                    };
                };
                const ratingCount = elementMaker("span");
                ratingCount.style.color = `#ffffff`;
                ratingCount.style.fontSize = `14px`;
                ratingCount.style.fontWeight = `500`;
                ratingCount.textContent = `(${totalReview})`;
                s1508_product_rating.appendChild(ratingCount);



            }
            showReviewStar(ratingNumber, totalReview, s1508_product_rating);

            // product bottom area
            const s1508_product_name_wrapper = elementMaker("div", ["s1508_product_name_wrapper"]);
            s1508_product_bottom_area.appendChild(s1508_product_name_wrapper);
            const s1508_product_name = elementMaker("span", ["s1508_product_name"]);
            s1508_product_name_wrapper.appendChild(s1508_product_name);
            s1508_product_name.textContent = `${singleItem?.name}`;

            const s1508_product_price_wrapper = elementMaker("div", ["s1508_product_price_wrapper"]);
            s1508_product_bottom_area.appendChild(s1508_product_price_wrapper);
            const s1508_product_price_container = elementMaker("div", ["s1508_product_price_container"]);
            s1508_product_price_wrapper.appendChild(s1508_product_price_container);
            const s1508_product_new_price_wrapper = elementMaker("div", ["s1508_product_new_price_wrapper"]);
            s1508_product_price_container.appendChild(s1508_product_new_price_wrapper);
            const s1508_product_new_price = elementMaker("div", ["s1508_product_new_price"]);
            s1508_product_new_price_wrapper.appendChild(s1508_product_new_price);
            s1508_product_new_price.innerText = `${CURRENCY} ${singleItem?.price}`;

            const s1508_add_cart_icon_wrapper = elementMaker("div", ["s1508_add_cart_icon_wrapper"]);
            s1508_product_price_wrapper.appendChild(s1508_add_cart_icon_wrapper);
            const s1508_cart_icon = elementMaker("span", ["s1508_cart_icon"]);
            s1508_add_cart_icon_wrapper.appendChild(s1508_cart_icon);
            s1508_cart_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12.045" height="14.199" viewBox="0 0 15.045 16.199"> <g id="cart" transform="translate(-313.4 -721.9)"> <path id="Body" d="M64.577,52.615a.577.577,0,0,0-.577.577V60.98A2.052,2.052,0,0,0,66.019,63h9.807a2.013,2.013,0,0,0,2.019-1.974V53.192a.577.577,0,0,0-.577-.577Z" transform="translate(250 674.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></path> <path id="Handle" d="M67.461,52.615V51.461A3.461,3.461,0,0,1,70.922,48h0a3.461,3.461,0,0,1,3.461,3.461v1.154" transform="translate(250 674.5)" fill="rgba(255,255,255,0)" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></path> </g></svg>`;
            s1508_add_cart_icon_wrapper.addEventListener("click", function () {
                alert();
                s1508_cart_icon.classList.toggle("s1508_active_add_cart_icon_wrapper");
            });






















            document.querySelector(".s1508_all_items_product_wrapper").appendChild(s1508_all_items_single_product);
        }

    };
    showAllItem(getAllItem);

    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };

})();