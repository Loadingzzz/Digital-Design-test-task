class Products {
  render() {
    let htmlCatalogJeans = " ";
    let htmlCatalogJacket = " ";
    let htmlCatalogBoots = " ";

    const htmlCatalogListSkelton = (htmlCatalogName, listTitle, anchorName) => {
      return `<div id='category__anchor-${anchorName}' class="category__anchor"></div>
      <h2 class="catalog__list-title ">${listTitle}</h2>
      <ul class="catalog__list">
      ${htmlCatalogName}
      </ul>`;
    };

    const htmlCatalogCardSkelton = (title, img, date) => {
      return `<li class="catalog__item catalog__item-white">
    <img src="${img}"/>
    <h3>${title}</h3>
    <span  > <strong>Дата публикации</strong>:
    ${getDayInfo(date)}</span>
    <button>Купить</button>
    </li>`;
    };

    CATALOG__JEANS.forEach(({ title, img, date }) => {
      htmlCatalogJeans += htmlCatalogCardSkelton(title, img, date);
    });

    CATALOG__JACKET.forEach(({ title, img, date }) => {
      htmlCatalogJacket += htmlCatalogCardSkelton(title, img, date);
    });

    CATALOG__BOOTS.forEach(({ title, img, date }) => {
      htmlCatalogBoots += htmlCatalogCardSkelton(title, img, date);
    });

    const htmlJeans = htmlCatalogListSkelton(
      htmlCatalogJeans,
      "Джинсы",
      "jeans"
    );

    const htmlJacket = htmlCatalogListSkelton(
      htmlCatalogJacket,
      "Куртки",
      "jacket"
    );

    const htmlBoots = htmlCatalogListSkelton(
      htmlCatalogBoots,
      "Обувь",
      "boots"
    );

    JEANS__CATALOG.innerHTML = htmlJeans;
    JACKET__CATALOG.innerHTML = htmlJacket;
    BOOTS__CATALOG.innerHTML = htmlBoots;
  }
}

const productPage = new Products();
productPage.render();
