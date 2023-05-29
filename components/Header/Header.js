class Header {
  render() {
    let htmlHeader = `<nav class="header__nav header__nav-wrapper">
      <div class="container">
        <ul class="nav__list">
          <li class="nav__item"><a href="#category__anchor-jeans">Джинсы</a></li>
          <li class="nav__item"><a href="#category__anchor-jacket">Куртки</a></li>
          <li class="nav__item"><a href="#category__anchor-boots">Обувь</a></li>
          <div class="theme__buttons">
            <button class="theme__button theme__buttons-dark">Темная тема</button>
            <button class="theme__button theme__buttons-white">Светлая тема</button>
          </div>    
        </ul>
      </div>
    </nav>`;
    ROOT_HEADER.innerHTML = htmlHeader;
  }
}

const productsNavigate = new Header();
productsNavigate.render();
