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
  /** @type {Element} */ var burgerMenu = document.getElementById('burger-button');
  var body = document.getElementsByTagName('body')[0];
  
  burgerMenu.addEventListener('click', function() {
    toggle(tabList);
    // body.classList.toggle('stop-scroll');
  });
  
  document.addEventListener('click', function(e) {
    e = e || window.event;
    /** @type {EventTarget} */ var targ = e.target || e.srcElement;
    if (targ.nodeType === 3) { 
      targ = targ.parentNode;
    }
    if (!tabList.classList.contains('hidden') &&
      targ.getAttribute('id') !== 'burger-button') {
      toggle(tabList);
    }
  })
}

function hideMenu() {
  var screenWidth = screen.width;
  /** @type {Element} */
  var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  
  if (screenWidth < 768) {
    toggle(burgerMenu);
    toggle(tabList);
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