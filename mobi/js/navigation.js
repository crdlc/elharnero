'use strict';

var Navigation = (function() {

  var views = {
    'main': '',
    'inicio': '',
    'productos': '',
    'temporada': '',
    'fotos': '',
    'contacto': '',
    'popup': ''
  };

  Object.keys(views).forEach(function(key) {
    views[key] = document.getElementById(key).dataset.level;
  });

  var current = 'main';
  var previous = current;

  function go(view) {
    window.location.hash = '#/' + view;
  }

  function back() {
    window.location.hash = '#/' + previous;
  }

  window.addEventListener('hashchange', function () {
    var target = location.hash.split('/')[1];

    if (target === current) {
      return;
    }

    if (views[target] === '3') {
      document.getElementById(target).dataset.viewport = 'center';
      previous = current;
      current = target;
    } else if (views[target] === '1') {
      document.getElementById(current).dataset.viewport = 'right';
      previous = current = target;
    } else if (views[target] === '2') {
      if (views[current] === '1') {
        document.getElementById(target).dataset.viewport = 'center';
      } else {
        document.getElementById(current).dataset.viewport = 'bottom';
      }
      previous = 'main';
      current = target;
    }
  });

  go(current);

  var buttons = document.querySelectorAll('.icon-back');
  for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', back);
  }

  return {
    go: go,
    back: back
  };

}());
