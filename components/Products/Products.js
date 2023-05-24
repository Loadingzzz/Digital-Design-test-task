class Products {
  render() {
    let htmlCatalogJeans = " ";
    let htmlCatalogJacket = " ";
    let htmlCatalogBoots = " ";

    CATALOG__JEANS.forEach(({ title, img, date, category }) => {
      htmlCatalogJeans += `<li class="card-item card-item-white">
        <img сlass="card-img" src="${img}"/>
        <h3 сlass="card-title">${title}</h3>
        <span class="card-date" > <strong>Дата публикации</strong>:
        ${getDayInfo(date)}</span>
        <button class="card-button">Купить</button>
        </li>`;
    });

    CATALOG__JACKET.forEach(({ title, img, date, category }) => {
      htmlCatalogJacket += `<li class="card-item card-item-white">
      <img сlass="card-img " src="${img}"/>
      <h3 сlass="card-title">${title}</h3>
      <span class="card-date" > <strong>Дата публикации</strong>:
      ${getDayInfo(date)}</span>
      <button class="card-button">Купить</button>
      </li>`;
    });

    CATALOG__BOOTS.forEach(({ title, img, date, category }) => {
      htmlCatalogBoots += `<li class="card-item card-item-white">
      <img сlass="card-img" src="${img}"/>
      <h3 сlass="card-title">${title}</h3>
      <span class="card-date" > <strong>Дата публикации</strong>:
      ${getDayInfo(date)}</span>
      <button class="card-button">Купить</button>
      </li>`;
    });

    const htmlJeans = `<div id="category-anchor-jeans"></div>
    <h2 id="jeans-title">Джинсы</h2>
    <ul class="jeans_card-list">
    ${htmlCatalogJeans}
    </ul>`;

    const htmlJacket = `<div id="category-anchor-jacket"></div>
    <h2 id="jacket-title">Куртки</h2>
    <ul class="jacket_card-list">
    ${htmlCatalogJacket}
    </ul>`;

    const htmlBoots = `<div id="category-anchor-boots"></div>
    <h2 id="boots-title">Обувь</h2>
    <ul class="boots_card-list">
    ${htmlCatalogBoots}
    </ul>`;

    JEANS__CATALOG.innerHTML = htmlJeans;
    JACKET__CATALOG.innerHTML = htmlJacket;
    BOOTS__CATALOG.innerHTML = htmlBoots;
  }
}

const productPage = new Products();
productPage.render();
