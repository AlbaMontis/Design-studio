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
  /** @type {HTMLCollection} */ var stripes = btn.getElementsByTagName('span');
  /** @type{Array.<string>} */
  var menu = [burgerMenu, btn, stripes[0], stripes[1], stripes[2]];
  /** @type {number} */ var i;
  
  for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function() {
      toggle(tabList);
      btn.classList.toggle(OPEN_CLASS);
    });
  }
  
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
      btn.classList.toggle(OPEN_CLASS);
    }
  })
}

function hideMenu() {
  /** @type {number} */ var screenWidth = screen.width;
  /** @type {Element} */
  var burgerMenu = document.getElementById('burger-button');
  /** @type {Element} */ var tabList = document.getElementById('tab-list');
  
  if (screenWidth < 768) {
    toggle(burgerMenu);
    toggle(tabList);
  }
   window.addEventListener("resize", function() {
    tabList.classList.add('hidden');
  });
}

initEvent();
hideMenu();