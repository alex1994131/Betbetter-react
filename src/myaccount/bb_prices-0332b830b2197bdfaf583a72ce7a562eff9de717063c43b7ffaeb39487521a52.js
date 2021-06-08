$(document).ready(function () {

  $(document).on('click', '.close-btn', function (e) {
    var target = $(e.target);
    target.parents('.message').hide(500);
    return false;
  });

  $(document).on('click', '.scrollTo', function (e) {
    var target = $(e.target);
    $('body').scrollTo(target.data('scroll'), 500);
    return false;
  });

  $(document).on('click', '#bb-price-accordion .pricing-faq__header', function () {
    var accordion = $(this).parents('.accordion');
    var parent = $(this).parents('.pricing-faq__block');
    if (parent.hasClass('open')) {
      parent.find('.pricing-faq__body').removeClass('show', 500);
      parent.removeClass('open', 500);
    } else {
      accordion.find('.pricing-faq__block.open .pricing-faq__body.show').removeClass('show', 500);
      accordion.find('.pricing-faq__block.open').removeClass('open', 500);
      parent.addClass('open', 500);
      parent.find('.pricing-faq__body').addClass('show', 500);
    }
    return false;
  });

  if (App.frozen_lock) {
    $('.pay-form').addClass('not-active');
  }

  var liveBase = tariffsContainer($('#live'), window.live_start_tariffs, 'live');
  liveBase.render(30);

  var prematchBase = tariffsContainer($('#prematch'), window.prematch_basic_tariffs, 'prematch');
  prematchBase.render(30);

  var prematchLive = tariffsContainer($('#prematch-live'), window.prematch_basic_tariffs, 'prematch', window.live_start_tariffs);
  prematchLive.render(30);

  $(document).on('click', '.blockPaidClose', function () {
    $('#blockPaid').modal('hide');
  });

  $(document).on('click', '.pay-form', function () {
    var el = $(this);
    if (App.frozen_lock) {
      return false;
    }
    if (App.current_user && (!App.current_user.country_id || !App.current_user.full_name)) {
      $('#needCountryModal').modal('show');
      return false;
    }

    if (App.current_user && (App.current_user.labels.indexOf('block_paid') >= 0 || App.current_user.labels.indexOf('banned') >= 0)) {
      $('#blockPaid').modal('show');
      return false;
    }

    var locale = '';
    if(I18n.locale !== 'ru' && I18n.locale !== 'en') {
      locale = I18n.locale == 'en-GB' ? '/gb' : '/' + I18n.locale;
    }

    var loc = locale + "/payments?pay=";
    if (el.hasClass('pay-form-prematch')) {
      loc += "&prematch_tariff_id=" + $('#prematch-tariff').val();
    }
    if (el.hasClass('pay-form-live')) {
      loc += "&live_tariff_id=" + $('#live-tariff').val();
    }
    if (el.hasClass('pay-form-prematch-live')) {
      loc += "&prematch_tariff_id=" + $('#prematch-live-tariff').val();
      loc += "&live_tariff_id=" + $('#prematch-live-tariff option:selected').data('live-id');
    }
    if (window.is_valuebets) {
      loc += "&is_valuebets=true";
    }
    location.href = loc;
  });

});

function tariffsContainer (el, tariffs, group, additional_tariffs) {
  return {
    el: el,
    tariffs: tariffs,
    // additional_tariffs - used for bundle Prematch+Live - !!!!! ALWAYS LIVE TARIFFS !!!!!
    additional_tariffs: additional_tariffs,
    group: group,
    selectedTariffId: null,

    render: function (duration) {
      var self = this;
      _.each(this.tariffs, function (tariff) {
        if (self.additional_tariffs) {
          self.findLiveByDuration(tariff.duration, function (additional_tariff) {
            if (tariff.duration == 1) {
              self.el.find('.tariff-select')
                .append(
                  $("<option></option>")
                    .attr("value", tariff.id)
                    .attr("data-live-id", additional_tariff.id)
                    .attr("data-duration", tariff.duration)
                    .text(I18n.t("tariff.day").replace("{days}", tariff.duration))
                );
            } else {
              if (tariff.duration == 30) {
                self.el.find('.tariff-select')
                  .append(
                    $("<option></option>")
                      .prop("selected", true)
                      .attr("value", tariff.id)
                      .attr("data-live-id", additional_tariff.id)
                      .attr("data-duration", tariff.duration)
                      .text(I18n.t("tariff.days").replace("{days}", tariff.duration))
                  );
              } else {
                self.el.find('.tariff-select')
                  .append(
                    $("<option></option>")
                      .attr("value", tariff.id)
                      .attr("data-live-id", additional_tariff.id)
                      .attr("data-duration", tariff.duration)
                      .text(I18n.t("tariff.days").replace("{days}", tariff.duration))
                  );
              }
          }});
        } else {
          if (tariff.duration == 1) {
            self.el.find('.tariff-select')
              .append(
                $("<option></option>")
                  .attr("value", tariff.id)
                  .attr("data-duration", tariff.duration)
                  .text(I18n.t("tariff.day").replace("{days}", tariff.duration))
              );
          } else {
            if (tariff.duration == 30) {
              self.el.find('.tariff-select')
                .append(
                  $("<option></option>")
                    .prop("selected", true)
                    .attr("value", tariff.id)
                    .attr("data-duration", tariff.duration)
                    .text(I18n.t("tariff.days").replace("{days}", tariff.duration))
                );
            } else {
              self.el.find('.tariff-select')
                .append(
                  $("<option></option>")
                    .attr("value", tariff.id)
                    .attr("data-duration", tariff.duration)
                    .text(I18n.t("tariff.days").replace("{days}", tariff.duration))
                );
            }
          }
        }
      });
      if (duration) {
        if (window.promocode) {
          if (self.additional_tariffs) {
            if (window.promocode.prematch_tariff_id && window.promocode.live_tariff_id) {
              self.findById(window.promocode.prematch_tariff_id, function (prematchTariff) {
                self.findLiveByDuration(prematchTariff.duration, function (liveTariff) {
                  if (window.promocode.live_tariff_id == liveTariff.id) {
                    self.setActiveByDuration(prematchTariff.duration);
                  }
                });
              });
            }
          } else {
            if (window.promocode.prematch_tariff_id) {
              this.findById(window.promocode.prematch_tariff_id, function (tariff) {
                self.setActiveByDuration(tariff.duration);
              });
            }
            if (window.promocode.live_tariff_id) {
              this.findById(window.promocode.live_tariff_id, function (tariff) {
                self.setActiveByDuration(tariff.duration);
              });
            }
          }
        } else {
          this.setActiveByDuration(duration);
        }
      }
      this.applyPrice();
      this.handleSelectChangeEvent();
    },

    setActiveByDuration: function (duration) {
      var option = this.el.find('.tariff-select option[data-duration="' + duration + '"]');
      if (option) {
        option.prop('selected', true);
      }
      this.applyPrice();
    },

    handleSelectChangeEvent: function () {
      var self = this;
      this.el.find('.tariff-select').change(function () {
        self.applyPrice();
      });
    },

    applyPrice: function () {
      var selectedId = this.selectedTariffId();
      var self = this;
      this.findById(selectedId, function (tariff) {
        var price;
        if (self.el.find('.tariff-select').attr('id') == 'prematch-live-tariff') {
          if (window.promocode && !window.ny_promo) {
            self.findLiveByDuration(tariff.duration, function (add_tariff) {
              price = priceWithVat(add_tariff.price + tariff.price);
            });
            $('.price-column__sale').addClass('hidden');
          } else if (window.ny_promo) {
            if ([3, 4, 5].indexOf(window.ny_promo_group) > -1) {
              self.findLiveByDuration(tariff.duration, function (add_tariff) {
                price = priceWithVat(add_tariff.price + tariff.original_price / 2);
              });
            } else {
              self.findLiveByDuration(tariff.duration, function (add_tariff) {
                price = priceWithVat(roundFloats(add_tariff.price) + roundFloats(tariff.price));
              });
              $('.price-column__sale').addClass('hidden');
            }
          } else {
            self.findLiveByDuration(tariff.duration, function (add_tariff) {
              price = priceWithVat(add_tariff.price) + roundFloats(priceWithVat(tariff.price) * 0.5);
            });
            $('.price-column__sale').removeClass('hidden');
          }
        } else {
          price = priceWithVat(tariff.price);
        }
        price = roundFloats(price).toFixed(2);
        self.el.find('.price').html(price);
        self.el.find('.price-column__priceday').html(I18n.t("tariff.per_day").replace("{days}", roundFloats(price/tariff.duration)));
        self.applyDiscounts(tariff);
      });
    },

    applyDiscounts: function (tariff) {
      this.showHideDiscount('prematch-tariff', 'prematch', tariff);
      this.showHideDiscount('live-tariff', 'live', tariff);
      this.showHideDiscount('prematch-live-tariff', 'prematch', tariff);
    },

    showHideDiscount: function (tariffContainer, tariffType, tariff) {
      if (this.el.find('.tariff-select').attr('id') == tariffContainer) {
        var hideDiscount = true;
        if (window.promocode && !window.ny_promo) {
          if (tariffContainer == 'prematch-live-tariff') {
            var discountPrice = 0.0;
            var prematchTariffId = window.promocode.prematch_tariff_id;
            var prematchDiscount = window.promocode.prematch_discount;
            var liveTariffId = window.promocode.live_tariff_id;
            var liveDiscount = window.promocode.live_discount;
            var promoDurationEq = false;
            if (tariff.id == prematchTariffId) {
              discountPrice += tariff.original_price;
              hideDiscount = false;
              this.el.find('.old_price').html(withVat(discountPrice)).removeClass('hidden');
            } else {
              discountPrice += tariff.price;
            }

            var self = this;
            this.findLiveByDuration(tariff.duration, function (liveTariff) {
              if (liveTariffId && liveTariff.id == liveTariffId) {
                hideDiscount = false;
                if (tariff.id == prematchTariffId && prematchDiscount == liveDiscount) {
                  promoDurationEq = true;
                }
                discountPrice += liveTariff.original_price;
                self.el.find('.old_price').html(withVat(discountPrice)).removeClass('hidden');
              } else {
                discountPrice += liveTariff.price;
                self.el.find('.old_price').html(withVat(discountPrice)).removeClass('hidden');
              }
            });

            if (promoDurationEq) {
              this.el.find('.sale_details').html(prematchDiscount + "% cheaper for you").removeClass('hidden');
            }

          } else {
            var promoTariffId = tariffType == 'prematch' ? window.promocode.prematch_tariff_id : window.promocode.live_tariff_id;
            if (tariff.id == promoTariffId) {
              hideDiscount = false;
              this.el.find('.old_price').html(withVat(tariff.original_price)).removeClass('hidden');
              var discount = tariffType == 'prematch' ? window.promocode.prematch_discount : window.promocode.live_discount;
              this.el.find('.sale_details').html(discount + "% cheaper for you").removeClass('hidden');
            }
          }
        } else if (window.ny_promo && tariff.original_price > tariff.price) {
          hideDiscount = false;
          var self = this;
          var discount;
          if ([3, 4, 5].indexOf(window.ny_promo_group) > -1) {
            if (tariffContainer == 'prematch-live-tariff') {
              this.findLiveByDuration(tariff.duration, function (liveTariff) {
                promoDurationEq = true;
                discount = roundFloats(withVat(tariff.original_price + liveTariff.original_price) - withVat(tariff.original_price / 2 + liveTariff.price));
                self.el.find('.old_price').html(withVat(tariff.original_price + liveTariff.original_price)).removeClass('hidden');
              });
            } else {
              discount = roundFloats(withVat(tariff.original_price) - withVat(tariff.price));
              this.el.find('.old_price').html(withVat(tariff.original_price)).removeClass('hidden');
            }
            this.el.find('.sale_details').html("€ " + discount + " cheaper for you").removeClass('hidden');
          } else {
            if (tariffContainer == 'prematch-live-tariff') {
              this.findLiveByDuration(tariff.duration, function (liveTariff) {
                promoDurationEq = true;
                discount = roundFloats(withVat(tariff.original_price + liveTariff.original_price) - withVat(tariff.price + liveTariff.price));
                self.el.find('.old_price').html(withVat(tariff.original_price + liveTariff.original_price)).removeClass('hidden');
              });
            } else {
              discount = roundFloats(withVat(tariff.original_price) - withVat(tariff.price));
              this.el.find('.old_price').html(withVat(tariff.original_price)).removeClass('hidden');
            }
            if (discount) {
              this.el.find('.sale_details').html("€ " + discount + " cheaper for you").removeClass('hidden');
            }
          }
        }

        if (hideDiscount) {
          this.el.find('.old_price').html('').addClass('hidden');
          this.el.find('.sale_details').html('').addClass('hidden');
        }
      }
    },

    selectedTariffId: function () {
      return this.el.find('.tariff-select option:selected').val();
    },

    selectedTariff: function () {
      var id = this.selectedTariffId();
      return this.findById(id);
    },

    findById: function (id, cb) {
      var result;
      _.each(this.tariffs, function (tariff) {
        if (tariff.id == id) {
          result = tariff;
          if (cb) {
            cb(tariff);
          }
        }
      });
      return result;
    },

    findLiveByDuration: function (duration, cb) {
      var result;
      _.each(this.additional_tariffs, function (tariff) {
        if (tariff.duration == duration) {
          result = tariff;
          if (cb) {
            cb(tariff);
          }
        }
      });
      return result;
    }
  }
}

function roundFloats (val) {
  return Math.round(Math.round(val * 100))/100;
}

function withVat(price) {
  return priceWithVat(price).toFixed(2);
}

function priceWithVat(price) {
  return price + price * window.vat / 100;
}
;
