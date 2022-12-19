import { useState } from "react";
import "./Header.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="site--desktop-header--spaceship-one">
      <header _ngcontent-serverapp-c94="" class="site__header">
        <app-header _ngcontent-serverapp-c94="" _nghost-serverapp-c69="">
          <div _ngcontent-serverapp-c69="" class="header">
            <div
              _ngcontent-serverapp-c69=""
              class="header__megamenu-area megamenu-area"
            ></div>
            <div
              _ngcontent-serverapp-c69=""
              class="header__topbar-start-bg"
            ></div>
            <div _ngcontent-serverapp-c69="" class="header__topbar-start">
              <app-topbar
                _ngcontent-serverapp-c69=""
                layout="spaceship-start"
                _nghost-serverapp-c68=""
                class="topbar topbar--spaceship-start"
              >
                <div _ngcontent-serverapp-c68="" class="topbar__item-text">
                  <a
                    _ngcontent-serverapp-c68=""
                    routerlink="/site/showroom"
                    class="topbar__link"
                    href="/site/showroom"
                  >
                    {" "}
                    Find Showroom{" "}
                  </a>
                </div>
                <div _ngcontent-serverapp-c68="" class="topbar__item-text">
                  <a
                    _ngcontent-serverapp-c68=""
                    routerlink="/site/service-center"
                    class="topbar__link"
                    href="/site/service-center"
                  >
                    {" "}
                    Find Service Center{" "}
                  </a>
                </div>
                <div _ngcontent-serverapp-c68="" class="topbar__item-text">
                  <a
                    _ngcontent-serverapp-c68=""
                    href="https://service.runnerautomobiles.com/"
                    class="topbar__link"
                  >
                    Service Booking
                  </a>
                </div>
              </app-topbar>
            </div>
            <div
              _ngcontent-serverapp-c69=""
              class="header__topbar-end-bg"
            ></div>
            <div _ngcontent-serverapp-c69="" class="header__topbar-end">
              <app-topbar
                _ngcontent-serverapp-c69=""
                layout="spaceship-end"
                _nghost-serverapp-c68=""
                class="topbar topbar--spaceship-end"
              >
                <div _ngcontent-serverapp-c68="" class="topbar__item-button">
                  <a
                    _ngcontent-serverapp-c68=""
                    href="tel:16273"
                    class="topbar__button"
                  >
                    <app-icon
                      _ngcontent-serverapp-c68=""
                      icon="phone-20"
                      _nghost-serverapp-c24=""
                    >
                      <svg
                        _ngcontent-serverApp-c24=""
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <path
                          _ngcontent-serverApp-c24=""
                          d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                        ></path>
                      </svg>
                    </app-icon>
                    <span
                      _ngcontent-serverapp-c68=""
                      class="topbar__button-title"
                    >
                      16273
                    </span>
                  </a>
                </div>
                <div _ngcontent-serverapp-c68="" class="topbar__item-button">
                  <a
                    _ngcontent-serverapp-c68=""
                    routerlink="/shop/compare"
                    class="topbar__button"
                    href="/shop/compare"
                  >
                    <span
                      _ngcontent-serverapp-c68=""
                      class="topbar__button-label"
                    >
                      Compare:
                    </span>
                    <span
                      _ngcontent-serverapp-c68=""
                      class="topbar__button-title"
                    >
                      0
                    </span>
                  </a>
                </div>
                <div
                  _ngcontent-serverapp-c68=""
                  appdropdown=""
                  class="topbar__item-button topbar__menu"
                >
                  <button
                    _ngcontent-serverapp-c68=""
                    type="button"
                    class="topbar__button topbar__button--has-arrow topbar__menu-button"
                  >
                    <span
                      _ngcontent-serverapp-c68=""
                      class="topbar__button-label"
                    >
                      Language:
                    </span>
                    <span
                      _ngcontent-serverapp-c68=""
                      class="topbar__button-title"
                    >
                      EN
                    </span>
                    <span
                      _ngcontent-serverapp-c68=""
                      class="topbar__button-arrow"
                    >
                      <app-icon
                        _ngcontent-serverapp-c68=""
                        icon="arrow-down-sm-7x5"
                        _nghost-serverapp-c24=""
                      >
                        <svg
                          _ngcontent-serverApp-c24=""
                          width="7px"
                          height="5px"
                        >
                          <path
                            _ngcontent-serverApp-c24=""
                            d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"
                          ></path>
                        </svg>
                      </app-icon>
                    </span>
                  </button>
                  <div _ngcontent-serverapp-c68="" class="topbar__menu-body">
                    <button
                      _ngcontent-serverapp-c68=""
                      type="button"
                      class="topbar__menu-item"
                    >
                      <img
                        _ngcontent-serverapp-c68=""
                        src="assets/images/languages/en.png"
                        alt="English"
                      />
                      <span ngcontent-serverapp-c68="">English</span>
                    </button>
                    <button
                      _ngcontent-serverapp-c68=""
                      type="button"
                      class="topbar__menu-item"
                    >
                      <img
                        _ngcontent-serverapp-c68=""
                        src="assets/images/languages/bn.png"
                        alt="Bangla"
                      />
                      <span _ngcontent-serverapp-c68="">Bangla</span>
                    </button>
                  </div>
                </div>
              </app-topbar>
            </div>
            <div _ngcontent-serverapp-c69="" class="header__navbar">
              <div _ngcontent-serverapp-c69="" class="header__navbar-menu">
                <app-main-menu
                  _ngcontent-serverapp-c69=""
                  _nghost-serverapp-c29=""
                  class="main-menu"
                >
                  <ul _ngcontent-serverapp-c29="" class="main-menu__list">
                    <li _ngcontent-serverapp-c29="" class="main-menu__item">
                      <a
                        _ngcontent-serverapp-c29=""
                        class="main-menu__link"
                        href="/"
                      >
                        {" "}
                        Home{" "}
                      </a>
                    </li>
                    <li _ngcontent-serverapp-c29="" class="main-menu__item">
                      <a
                        _ngcontent-serverapp-c29=""
                        class="main-menu__link"
                        href="/shop/category/products"
                      >
                        {" "}
                        Products{" "}
                      </a>
                    </li>
                    <li _ngcontent-serverapp-c29="" class="main-menu__item">
                      <a
                        _ngcontent-serverapp-c29=""
                        class="main-menu__link"
                        href="/shop/category/accessories"
                      >
                        {" "}
                        Accessories{" "}
                      </a>
                    </li>
                    <li _ngcontent-serverapp-c29="" class="main-menu__item">
                      <a
                        _ngcontent-serverapp-c29=""
                        class="main-menu__link"
                        href="/shop/category/spares"
                      >
                        {" "}
                        Spare Parts{" "}
                      </a>
                    </li>
                  </ul>
                </app-main-menu>
              </div>
            </div>
            <app-logo
              _ngcontent-serverapp-c69=""
              class="header__logo"
              _nghost-serverapp-c30=""
            >
              <a
                _ngcontent-serverapp-c30=""
                href="https://runnerautomobiles.com"
                target="_blank"
                rel="noopener"
                class="logo"
              >
                <div _ngcontent-serverapp-c30="" class="logo__slogan">
                  {" "}
                  Bangladeshi By Birth{" "}
                </div>
                <div _ngcontent-serverapp-c30="" class="logo__image">
                  <img
                    _ngcontent-serverapp-c30=""
                    src="assets/images/logo.png"
                    alt="Runner"
                  />
                </div>
              </a>
            </app-logo>
            <div _ngcontent-serverapp-c69="" class="header__search">
              <app-search
                _ngcontent-serverapp-c69=""
                _nghost-serverapp-c62=""
                class="search"
              >
                <form
                  _ngcontent-serverapp-c62=""
                  novalidate=""
                  class="search__body ng-untouched ng-pristine ng-valid"
                >
                  <div _ngcontent-serverapp-c62="" class="search__shadow"></div>
                  <label
                    _ngcontent-serverapp-c62=""
                    for="site-search"
                    class="sr-only"
                  >
                    Search for
                  </label>
                  <input
                    _ngcontent-serverapp-c62=""
                    type="text"
                    id="site-search"
                    autocapitalize="off"
                    autocomplete="off"
                    spellcheck="false"
                    name="search"
                    class="search__input"
                    placeholder="Enter Keyword or Model Number"
                  />
                  <button
                    _ngcontent-serverapp-c62=""
                    type="button"
                    class="search__button search__button--start"
                  >
                    <span
                      _ngcontent-serverapp-c62=""
                      class="search__button-icon"
                    >
                      <app-icon
                        _ngcontent-serverapp-c62=""
                        icon="bike-20"
                        _nghost-serverapp-c24=""
                      >
                        <svg
                          _ngcontent-serverApp-c24=""
                          width="20"
                          height="20"
                          viewBox="0 0 640 512"
                        >
                          <path
                            _ngcontent-serverApp-c24=""
                            d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"
                          ></path>
                        </svg>
                      </app-icon>
                    </span>
                    <span
                      _ngcontent-serverapp-c62=""
                      class="search__button-title"
                    >
                      Select Vehicle
                    </span>
                  </button>
                  <button
                    _ngcontent-serverapp-c62=""
                    type="submit"
                    class="search__button search__button--end"
                  >
                    <span
                      _ngcontent-serverapp-c62=""
                      class="search__button-icon"
                    >
                      <app-icon
                        _ngcontent-serverapp-c62=""
                        icon="search-20"
                        _nghost-serverapp-c24=""
                      >
                        <svg _ngcontent-serverApp-c24="" width="20" height="20">
                          <path
                            _ngcontent-serverApp-c24=""
                            d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
	c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
	c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                          ></path>
                        </svg>
                      </app-icon>
                    </span>
                  </button>
                  <div _ngcontent-serverapp-c62="" class="search__box"></div>
                  <div _ngcontent-serverapp-c62="" class="search__decor">
                    <div
                      _ngcontent-serverapp-c62=""
                      class="search__decor-start"
                    ></div>
                    <div
                      _ngcontent-serverapp-c62=""
                      class="search__decor-end"
                    ></div>
                  </div>
                  <div
                    _ngcontent-serverapp-c62=""
                    class="search__dropdown search__dropdown--suggestions suggestions"
                  ></div>
                  <div
                    _ngcontent-serverapp-c62=""
                    class="search__dropdown search__dropdown--vehicle-picker vehicle-picker"
                  >
                    <div
                      _ngcontent-serverapp-c62=""
                      class="search__dropdown-arrow"
                    ></div>
                    <div
                      _ngcontent-serverapp-c62=""
                      class="vehicle-picker__panel vehicle-picker__panel--active"
                    >
                      <div
                        _ngcontent-serverapp-c62=""
                        class="vehicle-picker__panel-body"
                      >
                        <div
                          _ngcontent-serverapp-c62=""
                          class="vehicle-picker__text"
                        >
                          {" "}
                          Select a search option to get exact match{" "}
                        </div>
                        <div _ngcontent-serverapp-c62="" class="vehicles-list">
                          <div
                            _ngcontent-serverapp-c62=""
                            appradiogroup=""
                            class="vehicles-list__body ng-untouched ng-pristine ng-valid"
                          >
                            <label
                              _ngcontent-serverapp-c62=""
                              class="vehicles-list__item"
                            >
                              <app-radio-button
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-radio input-radio"
                                _nghost-serverapp-c61=""
                              >
                                <span
                                  _ngcontent-serverapp-c61=""
                                  class="input-radio__body"
                                >
                                  <input
                                    _ngcontent-serverapp-c61=""
                                    type="radio"
                                    class="input-radio__input"
                                    name="app-radio-button-1"
                                  />
                                  <span
                                    _ngcontent-serverapp-c61=""
                                    class="input-radio__circle"
                                  ></span>
                                </span>
                              </app-radio-button>
                              <span
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-info"
                              >
                                <span
                                  _ngcontent-serverapp-c62=""
                                  class="vehicles-list__item-name"
                                >
                                  {" "}
                                  All Products{" "}
                                </span>
                              </span>
                            </label>
                            <label
                              _ngcontent-serverapp-c62=""
                              class="vehicles-list__item"
                            >
                              <app-radio-button
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-radio input-radio"
                                _nghost-serverapp-c61=""
                              >
                                <span
                                  _ngcontent-serverapp-c61=""
                                  class="input-radio__body"
                                >
                                  <input
                                    _ngcontent-serverapp-c61=""
                                    type="radio"
                                    class="input-radio__input"
                                    name="app-radio-button-1"
                                  />
                                  <span
                                    _ngcontent-serverapp-c61=""
                                    class="input-radio__circle"
                                  ></span>
                                </span>
                              </app-radio-button>
                              <span
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-info"
                              >
                                <span
                                  _ngcontent-serverapp-c62=""
                                  class="vehicles-list__item-name"
                                >
                                  {" "}
                                  Search only bike{" "}
                                </span>
                              </span>
                            </label>
                            <label
                              _ngcontent-serverapp-c62=""
                              class="vehicles-list__item"
                            >
                              <app-radio-button
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-radio input-radio"
                                _nghost-serverapp-c61=""
                              >
                                <span
                                  _ngcontent-serverapp-c61=""
                                  class="input-radio__body"
                                >
                                  <input
                                    _ngcontent-serverapp-c61=""
                                    type="radio"
                                    class="input-radio__input"
                                    name="app-radio-button-1"
                                  />
                                  <span
                                    _ngcontent-serverapp-c61=""
                                    class="input-radio__circle"
                                  ></span>
                                </span>
                              </app-radio-button>
                              <span
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-info"
                              >
                                <span
                                  _ngcontent-serverapp-c62=""
                                  class="vehicles-list__item-name"
                                >
                                  {" "}
                                  Search only spare part{" "}
                                </span>
                              </span>
                            </label>
                            <label
                              _ngcontent-serverapp-c62=""
                              class="vehicles-list__item"
                            >
                              <app-radio-button
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-radio input-radio"
                                _nghost-serverapp-c61=""
                              >
                                <span
                                  _ngcontent-serverapp-c61=""
                                  class="input-radio__body"
                                >
                                  <input
                                    _ngcontent-serverapp-c61=""
                                    type="radio"
                                    class="input-radio__input"
                                    name="app-radio-button-1"
                                  />
                                  <span
                                    _ngcontent-serverapp-c61=""
                                    class="input-radio__circle"
                                  ></span>
                                </span>
                              </app-radio-button>
                              <span
                                _ngcontent-serverapp-c62=""
                                class="vehicles-list__item-info"
                              >
                                <span
                                  _ngcontent-serverapp-c62=""
                                  class="vehicles-list__item-name"
                                >
                                  {" "}
                                  Search only accessory{" "}
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </app-search>
            </div>
            <div _ngcontent-serverapp-c69="" class="header__indicators">
              <app-indicator
                _ngcontent-serverapp-c69=""
                link="/shop/wishlist"
                icon="heart-32"
                _nghost-serverapp-c63=""
                class="indicator"
              >
                <a
                  _ngcontent-serverapp-c63=""
                  class="indicator__button"
                  href="/shop/wishlist"
                >
                  <span _ngcontent-serverapp-c63="" class="indicator__icon">
                    <app-icon
                      _ngcontent-serverapp-c63=""
                      _nghost-serverapp-c24=""
                    >
                      <svg _ngcontent-serverApp-c24="" width="32" height="32">
                        <path
                          _ngcontent-serverApp-c24=""
                          d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2
	C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2
	z"
                        ></path>
                      </svg>
                    </app-icon>
                    <span
                      _ngcontent-serverapp-c63=""
                      class="indicator__counter"
                    >
                      0
                    </span>
                  </span>
                </a>
                <div
                  _ngcontent-serverapp-c63=""
                  class="indicator__content"
                ></div>
              </app-indicator>
              <app-indicator
                _ngcontent-serverapp-c69=""
                link="/account"
                icon="person-32"
                trigger="click"
                _nghost-serverapp-c63=""
                class="indicator indicator--trigger--click"
              >
                <a
                  _ngcontent-serverapp-c63=""
                  class="indicator__button"
                  href="/account"
                >
                  <span _ngcontent-serverapp-c63="" class="indicator__icon">
                    <app-icon
                      _ngcontent-serverapp-c63=""
                      _nghost-serverapp-c24=""
                    >
                      <svg _ngcontent-serverApp-c24="" width="32" height="32">
                        <path
                          _ngcontent-serverApp-c24=""
                          d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
	C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"
                        ></path>
                      </svg>
                    </app-icon>
                  </span>
                  <span _ngcontent-serverapp-c63="" class="indicator__title">
                    Hello, Log In
                  </span>
                  <span _ngcontent-serverapp-c63="" class="indicator__value">
                    My Account
                  </span>
                </a>
                <div _ngcontent-serverapp-c63="" class="indicator__content">
                  <app-account-menu
                    _ngcontent-serverapp-c69=""
                    _nghost-serverapp-c64=""
                    class="account-menu"
                  >
                    <form
                      _ngcontent-serverapp-c64=""
                      novalidate=""
                      class="account-menu__form ng-untouched ng-pristine ng-valid"
                    >
                      <div
                        _ngcontent-serverapp-c64=""
                        class="account-menu__form-title"
                      >
                        {" "}
                        Log In to Your Account{" "}
                      </div>
                      <div _ngcontent-serverapp-c64="" class="form-group">
                        <label
                          _ngcontent-serverapp-c64=""
                          for="header-signin-username"
                        >
                          Mobile Number
                        </label>
                        <input
                          _ngcontent-serverapp-c64=""
                          id="header-signin-username"
                          formcontrolname="username"
                          class="form-control ng-untouched ng-pristine ng-invalid"
                          placeholder="01xxx xxxxxx"
                        />
                        <div
                          _ngcontent-serverapp-c64=""
                          class="invalid-feedback"
                        ></div>
                      </div>
                      <div _ngcontent-serverapp-c64="" class="form-group">
                        <label
                          _ngcontent-serverapp-c64=""
                          for="header-signin-password"
                          class="sr-only"
                        >
                          Password
                        </label>
                        <div
                          _ngcontent-serverapp-c64=""
                          class="account-menu__form-forgot"
                        >
                          <input
                            _ngcontent-serverapp-c64=""
                            id="header-signin-password"
                            type="password"
                            formcontrolname="password"
                            class="form-control form-control-sm ng-untouched ng-pristine ng-invalid"
                            placeholder="Type your password here"
                          />
                          <a
                            _ngcontent-serverapp-c64=""
                            routerlink="/account/forgot-password"
                            class="account-menu__form-forgot-link"
                            href="/account/forgot-password"
                          >
                            Forgot?
                          </a>
                        </div>
                        <div
                          _ngcontent-serverapp-c64=""
                          class="invalid-feedback"
                        ></div>
                      </div>
                      <div
                        _ngcontent-serverapp-c64=""
                        class="form-group account-menu__form-button"
                      >
                        <button
                          _ngcontent-serverapp-c64=""
                          type="submit"
                          class="btn btn-primary btn-sm"
                        >
                          Login
                        </button>
                      </div>
                      <div
                        _ngcontent-serverapp-c64=""
                        class="account-menu__form-link"
                      >
                        <a
                          _ngcontent-serverapp-c64=""
                          routerlink="/account/login"
                          href="/account/login"
                        >
                          Create An Account
                        </a>
                      </div>
                    </form>
                  </app-account-menu>
                </div>
              </app-indicator>
              <app-indicator
                _ngcontent-serverapp-c69=""
                link="/shop/cart"
                icon="cart-32"
                trigger="click"
                _nghost-serverapp-c63=""
                class="indicator indicator--trigger--click"
              >
                <a
                  _ngcontent-serverapp-c63=""
                  class="indicator__button"
                  href="/shop/cart"
                >
                  <span _ngcontent-serverapp-c63="" class="indicator__icon">
                    <app-icon
                      _ngcontent-serverapp-c63=""
                      _nghost-serverapp-c24=""
                    >
                      <svg _ngcontent-serverApp-c24="" width="32" height="32">
                        <circle
                          _ngcontent-serverApp-c24=""
                          cx="10.5"
                          cy="27.5"
                          r="2.5"
                        ></circle>
                        <circle
                          _ngcontent-serverApp-c24=""
                          cx="23.5"
                          cy="27.5"
                          r="2.5"
                        ></circle>
                        <path
                          _ngcontent-serverApp-c24=""
                          d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
	l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
	c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"
                        ></path>
                      </svg>
                    </app-icon>
                    <span
                      _ngcontent-serverapp-c63=""
                      class="indicator__counter"
                    >
                      0
                    </span>
                  </span>
                  <span _ngcontent-serverapp-c63="" class="indicator__title">
                    Shopping Cart
                  </span>
                  <span _ngcontent-serverapp-c63="" class="indicator__value">
                    ৳0.00
                  </span>
                </a>
                <div _ngcontent-serverapp-c63="" class="indicator__content">
                  <app-dropcart
                    _ngcontent-serverapp-c69=""
                    _nghost-serverapp-c66=""
                    class="dropcart"
                  >
                    <div _ngcontent-serverapp-c66="" class="dropcart__empty">
                      {" "}
                      Your shopping cart is empty!
                    </div>
                  </app-dropcart>
                </div>
              </app-indicator>
            </div>
          </div>
        </app-header>
      </header>
    </div>
  );
}
