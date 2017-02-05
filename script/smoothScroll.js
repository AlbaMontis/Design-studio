(function() {
  /** @type {Element} */ var body = document.body;
  /** @type {HTMLCollection} */
      var buttons = document.getElementsByClassName('btn');
  /** @type {number} */ var length = buttons.length;
  /** @type {number} */ var animateTime = 900;
  /** @type {Element} */ var button;
  /** @type {number} */ var i;
  /** @type {number} */ var targetOffset;
  /** @type {number} */ var currentPosition;
  /** @type {string} */ var translate;
  var container;
  
  function getPageScroll() {
    /** @type {number} */ var yScroll;
  
    if (window.pageYOffset) {
      yScroll = window.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
      yScroll = document.body.scrollTop;
    }
    return yScroll;
  }
  
  
  
  for (i = 0; i < length; i++) {
    button = buttons[i];
    button.addEventListener('click', function (event) {
      
      container = document.getElementById(event.target.hash.substr(1));
      targetOffset = container.offsetTop;
      currentPosition = getPageScroll();
      body.classList.add('in-transition');
      
      
      
      if (targetOffset > currentPosition) {
        translate = "translate(0, -" + (targetOffset - currentPosition) + "px)";
      } else {
        translate = "translate(0, " + (currentPosition - targetOffset) + "px)";
      }
      
      container.classList.contains('container') && container.id !== 'home' &&
      container.classList.add('container-push-down');
      console.log(container);
      body.style.WebkitTransform = translate;
      body.style.MozTransform = translate;
      body.style.transform = translate;
      
      window.setTimeout(function () {
        body.classList.remove('in-transition');
        body.style.cssText = "";
        window.location.hash = event.target.hash;
        window.scrollTo(0, targetOffset);
      }, animateTime);
    
      event.preventDefault();
    
    }, false);
  
  }

})();