'use strict';

var Products = (function() {

  var popup = document.getElementById('popup');

  var products = [];
  products.push ({img: '../fotos/8.jpg', title: 'Semi-fríos', text: 'Disponemos de una gran variedad de semi-fríos siendo los más característicos de nuestro establecimiento el de vainilla-caramelo y el de queso-mandarina'});
  products.push ({img: '../fotos/2.jpg', title: 'Tartas infantiles', text: 'Disponemos de gran variedad de tartas infantiles de todos los sabores. <br/>Tenemos la posibilidad de personalizar tartas para nuestros clientes. <br/>Las más divertidas obleas desde equipos de fútbol hasta cualquier dibujo animado.'});
  products.push ({img: '../fotos/12.jpg', title: 'Brazos de gitano', text: 'Disponemos de dos tipos de decoración al gusto del cliente brazo o tronco. <br/>Se pueden elaborar de todo tipo de sabores siendo nuestro brazo de piñones el más popular de todas las variedades. <br/>Otro tipo muy tradicional en nuestro obrador es el exquisito brazo de hojaldre.'});
  products.push ({img: '../fotos/14.jpg', title: 'Empanadas', text: 'Actualmente elaboramos dos tipos de empanadas de hojaldre: de atún (atún, tomate, pisto y huevo) y de jamón york y queso'});
  products.push ({img: '../fotos/11.jpg', title: 'Hojaldres bañados', text: 'Nuestro establecimiento es famoso por sus elaboraciones de hojaldre de las cuales la más famosa son los hojaldres bañados son hojaldres bañados con nuestro almíbar especial.'});
  products.push ({img: '../fotos/15.jpg', title: 'Pastas de té', text: 'Nuestras famosas pastas de té están elaboradas de forma artesana, utilizamos las mismas herramientas que hace 50 años siendo la principal nuestras manos. <br/>Son pastas rellenas de diferentes sabores y están decoradas con diferentes coberturas de chocolate. <br/>La base de la elaboración de estas pastas son la mantequilla y las mejores coberturas'});
  products.push ({img: '../fotos/13.jpg', title: 'Bollos variados', text: '<span class="bold">Empiñonados</span> <br/>Es el bollo más tradicional de nuestra pastelería, ya que su ingrediente principal el piñón es uno de los emblemas de nuestra localidad. Está elaborado con una receta que ha ido pasando de generación en generación al más puro estilo artesano.<br/> <span class="bold">Bollos blancos</span><br />Un bollo exquisito elaborado de forma tradicional.<br /><span class="bold">Pastas de coco</span><br />Su principal característica a parte de su exclusivo sabor es que en su elaboración se realiza con aceite de oliva.'});
  products.push ({img: '../fotos/mazapanes.jpg', title: 'Mazapanes', text: '...'});
  products.push ({img: '../fotos/roscon.jpg', title: 'Roscón de Reyes', text: '...'});
  products.push ({img: '../fotos/turron.jpg', title: 'Turrones navideños', text: 'Turrón Piñón, Gianduja, Crocantí, Frutos secos, Baileys, Nata-Nuez, etc'});

  function show(index) {
    var product = products[index];

    popup.querySelector('header h1').textContent = product.title;
    popup.querySelector('section img').src = product.img;
    popup.querySelector('section .foot').innerHTML = product.text;

    Navigation.go('popup');
  }

  function onClick(evt) {
    var index = evt.target.dataset.id;
    if (index) {
      popup.querySelector('section img').src = '';
      index = index.split('/')[1];
      show(index);
    }
  }

  function onClose() {
    Navigation.back();
  }

  document.querySelector('#productos ul').addEventListener('click', onClick);
  document.querySelector('#temporada ul').addEventListener('click', onClick);
  document.querySelector('#popup .icon-close').addEventListener('click', onClose);
}());
