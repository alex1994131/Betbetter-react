var urlBySection =function (section) {
  return {
    arbs: '/prices',
    valuebets: '/prices-valuebets'
  }[section]
};

$(document).ready(function () {

  $('form.promocode-form-price').submit(function (e) {
    var form = $(e.target);
    $.ajax({
      url: form.attr('action'),
      type: 'POST',
      headers: {'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')},
      data: form.serialize(),
      success: function (data) {
        if (data.success) {
          window.location = urlBySection(data.section)
        } else {
          var message = form.find('.help-block');
          var input = form.find('.promo-input');
          input.addClass('error-promo-input');
          message.html('');
          message.html(data.message);
          message.removeClass('hidden');
        }
      }.bind(this)
    });

    return false;
  });

});
