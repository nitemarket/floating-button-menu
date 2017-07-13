'use strict';

window.nitemarket = window.nitemarket || {};

nitemarket.MaterialUtils = class {
  static showToastMessage(message, type = 'info', timeout = 2750) {
    if(!$('#toastMessage').hasClass('mdl-snackbar--active')) {
      const toastSnackbar = $('#toastMessage')[0];
      if(type == 'error') {
        $('#toastMessage').css('background-color', '#F44336');
      } else {
        $('#toastMessage').removeAttr('style');
      }
      const data = {message: message};
      if(timeout > 0) {
        data.timeout = timeout;
      }
      toastSnackbar.MaterialSnackbar.showSnackbar(data);

      //handle floating button
      $('.mdl-fab-expandable--snack.bottom').each((index, element) => {
        let origBottom = parseInt($(element).css('bottom'));
        $(element).css('bottom', (origBottom + 48) + 'px');
        setTimeout(() => {
          $(element).css('bottom', origBottom + 'px');
        }, timeout + 25);
      });
    }
  }

  static activateExpandableFAB() {
    const mdlButtonElements = $('.mdl-button--fab-expandable');
    mdlButtonElements.on('click', function() {
      $(this).toggleClass('is-active');
    });
  }
}
