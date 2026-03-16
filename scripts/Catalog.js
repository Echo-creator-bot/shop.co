/*Функция рендера карточки */
function renderProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
    <a href="./pages/product_detail_page.html" class="product-card-link-wrap">
        <div class="product-card-image-block">
            <img src="${product.titleImg}" alt="${product.name}" class="product-card-image">
        </div>
        <div class="product-card-info">
            <div class="product-card-name">${product.name}</div>
            <div class="product-card-rating-wrap">
                <div class="product-card-star-wrap-wrap">${starRender(product.rating)}</div>
                <div class="product-card-rating-valuation-wrap">
                    <div class="product-card-rating-valuation">${product.rating}</div>
                    <div class="product-card-rating-of">/</div>
                    <div class="product-card-rating-of-number">5</div>
                </div>
            </div>
            <div class="product-card-price-wrap">
                <div class="product-card-price">$${product.price}</div>
                <div class="product-card-price-past-priсе visible"><s>$${product.oldPrice}</s></div>
                <div class="product-card-price-sell visible">-${product.discount}%</div>
            </div>
        </div>
    </a>

    `;
    return card;
}
/*Рендер звезд */
function starRender(rating) {
    const fullStar = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.737 0L13.9355 6.8872L21.4739 7.80085L15.9122 12.971L17.3728 20.4229L10.737 16.731L4.10121 20.4229L5.56179 12.971L5.72205e-05 7.80085L7.53855 6.8872L10.737 0Z" fill="#FFC633"/>
</svg>
`;
    const halfStar = `<svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.10115 20.4229L10.7369 16.731V0L7.53849 6.8872L0 7.80085L5.56174 12.971L4.10115 20.4229Z" fill="#FFC633"/>
</svg>
`;
    const rounded_Rating = Math.round(rating * 2)/ 2;
    let htmlStar = '';
    for (let i = 1; i<= 5; i++){
        if (i <= rounded_Rating) {
            htmlStar += fullStar;
        } else if(i-0.5 === rounded_Rating) {
            htmlStar += halfStar;
        }
        else {
            halfStar += '';
        }
    }
    return htmlStar;
}
/* отобразить на странице каталога */
function renderCatalogPage() {
    const catalog_page = document.querySelector('.catalog_grid');
    if (!catalog_page) {
        console.log('это не та страница');
        return;
    }
    catalog_page.innerHTML = '';
    CATALOG.forEach (product => {
        const card = renderProductCard(product);
        catalog_page.appendChild(card);
    });
    console.log('каталог загружен. ${CATALOG.length} товаров')
}
/* Инициализация */
document.addEventListener('DOMContentLoaded', function() {
    renderCatalogPage();
});
