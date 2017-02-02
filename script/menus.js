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
  var body = document.getElementsByTagName('body')[0];
  btn.addEventListener('click', function() {
    toggle(menu);
  });
  burgerMenu.addEventListener('click', function() {
    toggle(tabList);
    body.classList.toggle('stop-scroll');
  });
}

function hideMenu() {
  var screenWidth = screen.width;
  /** @type {Element} */ var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  /** @type {Element} */ var logo = tabList.childNodes[5];
  if (screenWidth < 768) {
    toggle(burgerMenu);
    toggle(tabList);
    toggle(logo);
  }
}
function disable_scroll() {
  document.ontouchmove = function(e) { 
    e.preventDefault(); 
  }
}

function enable_scroll() {
  /** @type {Element} */ var burgerMenu = document.getElementById('burger-button');
  if (burgerMenu.classList.contains('hidden')) {
    document.ontouchmove = function(e) { 
      return true;
    }
  }
}

initEvent();
hideMenu();