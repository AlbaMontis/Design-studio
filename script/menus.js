/**
 * @fileoverview Toggles portfolio menu.
 *
 */


function toggle(element) {
  /** @const {string} */ var HIDDEN_CLASS = 'hidden';
  element.classList.toggle(HIDDEN_CLASS);
}

function initEvent() {
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  /** @type {Element} */ var menu = document.getElementById('wraper');
  /** @type {Element} */ var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var btn = document.getElementById('toggle');
  btn.addEventListener('click', function() {
    toggle(menu);
  });
  burgerMenu.addEventListener('click', function() {
    toggle(tabList);
  });
}

function hideMenu() {
  var screenWidth = screen.width;
  console.log(screen);
  /** @type {Element} */ var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  if (screenWidth < 768) {
    toggle(burgerMenu);
    toggle(tabList);
  }
}

initEvent();
hideMenu();