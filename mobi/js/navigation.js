'use strict';

var Navigation = (function() {

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
    if (current === target) {
      return;
    }
    previous = current;
    current = target;

    document.getElementById(current).dataset.viewport = 'center';

    document.getElementById(previous).dataset.viewport =
      previous === 'main' ? 'left' : 'right';

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
