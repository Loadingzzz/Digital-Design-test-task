class Footer {
  render() {
    let htmlFooter = `<nav class="footer_nav footer__nav-wrapper" >
    <div class="container">
    <ul class="nav-list footer_nav-list">
        <li class="nav-item"><a href="#category-anchor-jeans">Джинсы</a></li>
        <li class="nav-item"><a href="#category-anchor-jacket">Куртки</a></li>
        <li class="nav-item"><a href="#category-anchor-boots">Обувь</a></li>
    </ul>
    </div>
    </nav>`;
    ROOT_FOOTER.innerHTML = htmlFooter;
  }
}

const footerNavigate = new Footer();
footerNavigate.render();
