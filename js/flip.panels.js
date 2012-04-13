function animatePanels(panel_a, panel_b, panel_c, direction) {
  $('.hero-panel').animate({backgroundColor: "#000000" }, 300, function () {

    $("#firefly").flippy({
      color_target: '#000000',
      content: panel_a,
      direction: direction,
      duration: "300",
      onFinish: function () {

        $("#dragonfly").flippy({
          color_target: '#000000',
          content: panel_b,
          direction: direction,
          duration: "300",
          onFinish: function() {

            $("#butterfly").flippy({
              color_target: '#000000',
              content: panel_c,
              direction: direction,
              duration: "300",
              onFinish: function () {

                $('.hero-panel').animate({ "backgroundColor": "rgba(0,0,0,0.2)" }, 500, function () {
                  $('.hero-panel').removeAttr('style');
                });
              }
            });
          }
        });
      }
    });
  });
}

function flipToFront() {
  if ($(document).width() < 768) {
    $('#firefly').html(panelContent.firefly.front);
    $('#dragonfly').html(panelContent.dragonfly.front);
    $('#butterfly').html(panelContent.butterfly.front);
  } else {
    animatePanels(panelContent.firefly.front, panelContent.dragonfly.front, panelContent.butterfly.front,'RIGHT');
  }
}

function flipToBack() {
  if ($(document).width() < 768) {
    $('#firefly').html(panelContent.firefly.back);
    $('#dragonfly').html(panelContent.dragonfly.back);
    $('#butterfly').html(panelContent.butterfly.back);
  } else {
    animatePanels(panelContent.firefly.back, panelContent.dragonfly.back, panelContent.butterfly.back,'RIGHT');
  }
}

var panelContent = {
  firefly: {
    front: '\
      <span></span>\
      <span></span>\
      <h1>Firefly</h1>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
    ',
    back: '\
      <h1>This is data</h1>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
    '
  },
  dragonfly: {
    front: '\
      <span></span>\
      <span></span>\
      <h1>Dragonfly</h1>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
    ',
    back: '\
      <h1>This is data</h1>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
    '
  },
  butterfly: {
    front: '\
      <span></span>\
      <span></span>\
      <h1>Butterfly</h1>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
    ',
    back: '\
      <h1>This is data</h1>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
    '
  }
};

$(document).ready(function () {
  // loading
  var appearSpeed = 1000;
  $('#firefly').html(panelContent.firefly.front);
  $('#dragonfly').html(panelContent.dragonfly.front);
  $('#butterfly').html(panelContent.butterfly.front);

  $('#content_container').animate({opacity: 1}, appearSpeed);

  // button binding
  $("#overview_link").click(function () {
    if (!$(this).parent().hasClass("active")) {
      $(this).closest(".nav").children().removeClass("active");
      $(this).parent().addClass("active");

      flipToFront();
    }
  });

  $("#information_link").click(function () {
    if (!$(this).parent().hasClass("active")) {
      $(this).closest(".nav").children().removeClass("active");
      $(this).parent().addClass("active");

      flipToBack();
    }
  });
});