(async function () {
    const BUSINESS_ID = "61c0305ad9c586f803196c4a";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    // show item img from api
    const getAllItem = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/items?limit=10`);

    function showAllItem(getAllItem) {
        for (let i = 0; i < getAllItem.length; i++) {
            const singleItem = getAllItem[i];
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
            const wishlistIcon = elementMaker("span", ["s1508_active_wishlist_add"]);
            wishlistIcon.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg" width="11.004" height="10.438"
            viewBox="0 0 11.004 10.438">
            <path id="heart_1_" data-name="heart (1)"
                d="M7.286.917A2.666,2.666,0,0,0,5,2.291,2.666,2.666,0,0,0,2.7.917,2.832,2.832,0,0,0,0,3.853C0,6.675,4.56,9.934,4.754,10.072l.241.17.241-.17c.194-.137,4.757-3.4,4.757-6.219A2.832,2.832,0,0,0,7.286.917Z"
                transform="translate(0.507 -0.417)" fill="none" stroke="#fff"
                stroke-width="1" />
        </svg>`;
            s1508_icon_wrapper.appendChild(wishlistIcon);










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