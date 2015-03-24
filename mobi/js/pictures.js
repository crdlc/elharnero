'use strict';

var Pictures = (function() {

  var list = document.querySelector('section#fotos ul');

  function appendPicture(picture) {
    var item = document.createElement('li');
    item.dataset.href = picture.href;
    item.dataset.text = picture.text;
    var img = document.createElement('img');
    img.src = picture.href;
    item.appendChild(img);
    list.appendChild(item);
    item.addEventListener('click', function() {
      var href = item.dataset.id;
      show(item.dataset.href, item.dataset.text);
    });
  }

  var pictures = [
    { text: 'Tarta de spiderman', href: '../fotos/2.jpg'},
    { text: 'Tarta de Bob Esponja', href: '../fotos/3.jpg'},
    { text: 'Tarta de fútbol', href: '../fotos/1.jpg'},
    { text: 'Tarta comunión', href: '../fotos/6.jpg'},

    { text: 'Tarta despedidas', href: '../fotos/7.jpg'},
    { text: 'Queso y mandarina', href: '../fotos/8.jpg'},
    { text: 'Vainilla y caramelo', href: '../fotos/9.jpg'},
    { text: 'Semifríos variados', href: '../fotos/10.jpg'},

    { text: 'Brazo de piñones', href: '../fotos/5.jpg'},
    { text: 'Brazo trufa-nata', href: '../fotos/12.jpg'},
    { text: 'Empanada de hojaldre', href: '../fotos/14.jpg'},
    { text: 'Hojaldres bañados', href: '../fotos/11.jpg'},

    { text: 'Bollos variados', href: '../fotos/13.jpg'},
    { text: 'Madalenas', href: '../fotos/4.jpg'},
    { text: 'Pastas de té', href: '../fotos/15.jpg'},
    { text: 'Turrón Frutos secos', href: '../fotos/16.jpg'},

    { text: 'Turrón Nata - Nuez', href: '../fotos/17.jpg'},
    { text: 'Turrón de Baileys', href: '../fotos/18.jpg'},
    { text: 'Turrón Frutos secos', href: '../fotos/19.jpg'},
    { text: 'Turrón Crocantí Piñón', href: '../fotos/20.jpg'},

    { text: 'Turrón Gianduja - Café', href: '../fotos/21.jpg'},
    { text: 'Mazapanes', href: '../fotos/mazapanes.jpg'},
    { text: 'Roscón de Reyes', href: '../fotos/roscon.jpg'},
    { text: 'Feliz Navidad!', href: '../fotos/22.jpg'}
  ];

  pictures.forEach(function(picture) {
    appendPicture(picture)
  });

  var popup = document.getElementById('popup');

  function show(href, text) {
    popup.querySelector('header h1').textContent = text;
    popup.querySelector('section img').src = href;
    popup.querySelector('section .foot').innerHTML = '';

    Navigation.go('popup');
  }
}());
