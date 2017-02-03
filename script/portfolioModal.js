function modal() {
  /** @const {string} */ var CONTENT_SUFFIX = '-modal-content';
  /** @type {Element} */ var modal = document.getElementById('modal');
  /** @type {number} */ var slideIndex = 1;
  /** @type {Element} */ var modalContent;
  /** @type {string} */ var chapter;
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    /** @type {HTMLCollection} */
    var slides = modalContent.getElementsByClassName("slide");
    /** @type {number} */ var length = slides.length;
    /** @type {number} */ var i;
    
    if (n > length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = length;
    }
    for (i = 0; i < length; i++) {
      slides[i].classList.add('hidden');
    }
    slides[slideIndex-1].classList.remove('hidden');
  }
  
  function openModal() {
    /** @type {HTMLCollection} */
    var modalContents = document.getElementsByClassName('modal-content');
    /** @type {number} */ var length = modalContents.length;
    /** @type {number} */ var i;
    modalContent = document.getElementById(chapter + CONTENT_SUFFIX);
    for (i = 0; i < length; i++) {
      modalContents[i].classList.add('hidden');
    }
    
    modal.classList.remove('hidden');
    modalContent.classList.remove('hidden');
    modal.appendChild(modalContent);
    showSlides(slideIndex);
  }
  
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  function initEvent() {
    /** @type {Element} */ var container = document.getElementById('portfolio');
    /** @type {Element} */ var close = document.querySelector('.close');
    /** @type {Element} */ var prev = document.querySelector('.prev');
    /** @type {Element} */ var next = document.querySelector('.next');
    
    container.addEventListener('click', function(e) {
      e = e || window.event;
      /** @type {EventTarget} */ var targ = e.target || e.srcElement;
      if (targ.nodeType === 3) { 
        targ = targ.parentNode;
      }
      chapter = targ.getAttribute('data');
      chapter && openModal();
    })
    
    prev.addEventListener('click', function() {
      plusSlides(-1);
    });
    next.addEventListener('click', function() {
      plusSlides(1);
    });
    close.addEventListener('click', closeModal);
  }
  
  initEvent();
  

}

modal();