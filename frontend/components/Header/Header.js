class Header {
  render() {
    let htmlHeader = `<nav class="header_nav header__nav-wrapper">
    <div class="container">
      <ul class="nav-list">
        <li class="nav-item"><a href="#category-anchor-jeans">Джинсы</a></li>
        <li class="nav-item"><a href="#category-anchor-jacket">Куртки</a></li>
        <li class="nav-item"><a href="#category-anchor-boots">Обувь</a></li>
      <div class="theme__btns">
        <button class="switch__theme">Темная тема</button>
        <button class="switch__theme__white">Светлая тема</button>
      </div>
        
    </ul>
    
    </div>
    </nav>`;
    ROOT_HEADER.innerHTML = htmlHeader;
  }
}

const productsNavigate = new Header();
productsNavigate.render();
