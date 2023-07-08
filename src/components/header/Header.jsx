import React from "react";
import Logo from "../../assets/images/logo-10-light.png";
import { FiPhoneCall } from "react-icons/fi";
import { GoMailRead } from "react-icons/go";

export default function NavBar() {
  return (
    <header class="site-header header-style-4 mobile-sider-drawer-menu">
      <div class="sticky-header main-bar-wraper  navbar-expand-lg">
        <div className="container">
          <div class="main-bar">
            <div class="containers clearfixs">
              <div class="logo-header">
                <div class="logo-header-inner logo-header-one">
                  <a href="index.html">
                    <img src={Logo} alt="" />
                  </a>
                </div>
              </div>

              {/* <!-- NAV Toggle Button --> */}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                class="navbar-toggler collapsed"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar icon-bar-first"></span>
                <span class="icon-bar icon-bar-two"></span>
                <span class="icon-bar icon-bar-three"></span>
              </button>

              {/* <!-- MAIN Vav --> */}
              <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                <ul class=" nav navbar-nav">
                  <li class="active">
                    <a href="javascript:;">Home</a>
                  </li>

                  <li>
                    <a href="javascript:;">About</a>
                  </li>
                  <li>
                    <a href="javascript:;">Services</a>
                  </li>
                  <li>
                    <a href="javascript:;">Gallery</a>
                  </li>
                  <li>
                    <a href="javascript:;">Pages</a>
                  </li>
                  <li>
                    <a href="javascript:;">Shop</a>
                  </li>
                  <li>
                    <a href="javascript:;">Blog</a>
                    {/* <ul class="sub-menu">
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-post-right-sidebar.html">Blog Post</a>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>

              {/* <!-- SITE Search --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
