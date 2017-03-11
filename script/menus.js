/**
 * @fileoverview Toggles portfolio menu.
 *
 */


function toggle(element) {
  /** @const {string} */ var HIDDEN_CLASS = 'hidden';
  element.classList.toggle(HIDDEN_CLASS);
}

function initEvent() {
  /** @const {string} */ var OPEN_CLASS = 'open';
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  /** @type {Element} */ var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var btn = document.getElementById('stripes');
  
  burgerMenu.addEventListener('click', function() {
    toggle(tabList);
    btn.classList.toggle(OPEN_CLASS);
  });
  
  document.addEventListener('click', function(e) {
    e = e || window.event;
    /** @type {EventTarget} */ var targ = e.target || e.srcElement;
    if (targ.nodeType === 3) { 
      targ = targ.parentNode;
    }
    if (!tabList.classList.contains('hidden') &&
      targ.getAttribute('id') !== 'burger-button' &&
      targ.getAttribute('id') !== 'stripes' && targ.tagName !== 'SPAN') {
      toggle(tabList);
      btn.classList.remove(OPEN_CLASS);
    }
  })
}

function hideMenu() {
  /** @type {number} */ var screenWidth = screen.width;
  /** @type {Element} */
  var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var btn = document.getElementById('stripes');
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  
  if (screenWidth < 768) {
    toggle(burgerMenu);
    toggle(tabList);
  }
   window.addEventListener('resize', function() {
    tabList.classList.add('hidden');
    btn.classList.remove('open');
  });
}

initEvent();
hideMenu();