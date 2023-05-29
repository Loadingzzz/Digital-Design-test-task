class Footer {
  render() {
    let htmlFooter = `<nav class="footer__nav footer__nav-wrapper" >
      <div class="container">
        <ul class="nav__list footer__nav-list">
          <li class="nav__item"><a href="#category__anchor-jeans">Джинсы</a></li>
          <li class="nav__item"><a href="#category__anchor-jacket">Куртки</a></li>
          <li class="nav__item"><a href="#category__anchor-boots">Обувь</a></li>
        </ul>
      </div>
    </nav>`;
    ROOT_FOOTER.innerHTML = htmlFooter;
  }
}

const footerNavigate = new Footer();
footerNavigate.render();
