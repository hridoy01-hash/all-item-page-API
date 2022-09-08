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
                ratingCount.textContent = `(${stars})`;
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
            s1508_cart_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <g id="shopping-bag_1_" data-name="shopping-bag (1)" fill="none">
                <path d="M13.5,4.5a4.5,4.5,0,1,0-9,0H0V15.75A2.25,2.25,0,0,0,2.25,18h13.5A2.25,2.25,0,0,0,18,15.75V4.5ZM9,1.5a3,3,0,0,1,3,3H6a3,3,0,0,1,3-3Z" stroke="none"></path>
                <path d="M 1.5 6 L 1.5 15.75 C 1.5 16.16354942321777 1.836450576782227 16.5 2.25 16.5 L 15.75 16.5 C 16.16354942321777 16.5 16.5 16.16354942321777 16.5 15.75 L 16.5 6 L 1.5 6 M 9 0 C 11.48528003692627 0 13.5 2.01471996307373 13.5 4.5 L 18 4.5 L 18 15.75 C 18 16.99263954162598 16.99263954162598 18 15.75 18 L 2.25 18 C 1.007360458374023 18 0 16.99263954162598 0 15.75 L 0 4.5 L 4.5 4.5 C 4.5 2.01471996307373 6.51471996307373 0 9 0 Z M 12 4.5 C 12 2.84315013885498 10.65684986114502 1.5 9 1.5 C 7.34315013885498 1.5 6 2.84315013885498 6 4.5 L 12 4.5 Z" stroke="none" fill="#ffffff"></path>
            </g>
        </svg>`;
            s1508_add_cart_icon_wrapper.addEventListener("click", function () {
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