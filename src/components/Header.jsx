import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav class="border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80">
      <div class="container">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex items-center lg:px-0">
            <div class="flex flex-shrink-0 items-center">
              <a class="flex items-center" href="/">
                {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                  <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                    <img
                      style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2732%27/%3e"
                    />
                  </span>
                  <img
                    alt="Learn with Sumit"
                    src="/_next/static/media/lws-logo-dark.8e393acf.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    srcset="/_next/static/media/lws-logo-dark.8e393acf.svg 1x, /_next/static/media/lws-logo-dark.8e393acf.svg 2x"
                  />
                  <noscript>
                    <img
                      alt="Learn with Sumit"
                      srcSet="/_next/static/media/lws-logo-dark.8e393acf.svg 1x, /_next/static/media/lws-logo-dark.8e393acf.svg 2x"
                      src="/_next/static/media/lws-logo-dark.8e393acf.svg"
                      decoding="async"
                      data-nimg="intrinsic"
                      style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                      loading="lazy"
                    />
                  </noscript>
                </span> */}
              </a>
            </div>
          </div>
          <div class="flex space-x-2 lg:hidden">
            <div class="ml-auto flex flex-shrink-0 items-center p-1 text-gray-400 hover:text-white focus:outline-none">
              <div class="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-ttu7i1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>
              </div>
            </div>
            <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none"
              id="headlessui-disclosure-button-:R396:"
              type="button"
              aria-expanded="false"
            >
              <a
                class="mantine-UnstyledButton-root mantine-Burger-root h-auto mantine-zxk3tl"
                title="Open navigation"
              >
                <div class="mantine-16lnb61 mantine-Burger-burger"></div>
              </a>
            </button>
          </div>
          <div class="hidden lg:flex lg:items-center lg:space-x-8">
            <div class="flex space-x-2">
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                href="/"
              >
                হোম
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#features"
              >
                ফিচার্স
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#modules"
              >
                মডিউলস
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#projects"
              >
                প্রজেক্টস
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#process"
              >
                কিভাবে চলবে
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#why-course"
              >
                কেন করবেন
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#support"
              >
                সাপোর্ট
              </a>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center space-x-4">
                <div class="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-ttu7i1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                  </svg>
                </div>
                <div>
                  <div class="flex space-x-3">
                    <a
                      class="mantine-Button-filled !bg-slate-900 !text-sm dark:!bg-sky-600 rounded-full mantine-Button-root mantine-z5mfvv"
                      type="button"
                      href="/login"
                    >
                      <div class="mantine-3xbgk5 mantine-Button-inner">
                        <span class="mantine-qo1k2 mantine-Button-label">
                          লগইন
                        </span>
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
