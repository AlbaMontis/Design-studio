/**
 * @fileoverview Sends form data.
 * 
 */
 
 
function sendForm() {
  /** @const {string} */ var HIDDEN_CLASS = 'hidden';
  /** @type {Element} */ var message = document.getElementById('message');
  /** @type {Element} */ var success = document.querySelector('.success');
  /** @type {Element} */ var fail = document.querySelector('.fail');
  /** @type {Element} */ var form = document.forms[0];
  /** @type {Element} */ var btn = document.getElementById('submit');
  /** @type {Object} */ var request = new XMLHttpRequest();
  /** @type {!function(string, string, boolean)} */
  request.open('POST', '//formspree.io/svitly4ka@ukr.net', true);
  /** @type {!function(string, string)} */
  request.setRequestHeader('accept', 'application/json');
  /** @type {!function('string, function')} */
    btn.addEventListener('click', function(e) {
    e.preventDefault();
    /** @type {Object} */
    var formData = new FormData(form);
    /** @type {!function(object)} */
    request.send(formData);
    
    /** @type {!function()} */
    request.onreadystatechange = function() {
      form.classList.add(HIDDEN_CLASS);
      message.classList.remove(HIDDEN_CLASS);
      if (request.readyState === 4 && request.status === 200) {
        success.classList.remove(HIDDEN_CLASS);
        fail.classList.add(HIDDEN_CLASS);
      } else {
        success.classList.add(HIDDEN_CLASS);
        fail.classList.remove(HIDDEN_CLASS);
      }
    }
  });
}
sendForm();