'use strict';

(function() {

  var list = document.querySelector('section#main ul');

  function appendOption(option) {
    var item = document.createElement('li');
    item.dataset.id = option.id;
    var name = document.createElement('p');
    name.textContent = option.name;
    item.appendChild(name);
    var description = document.createElement('p');
    description.textContent = option.description;
    item.appendChild(description);
    list.appendChild(item);
    item.addEventListener('click', function() {
      var option = item.dataset.id;
      Navigation.go(option);
    });
  }

  var options = [
    { id: 'inicio', name: 'Sobre nosotros', description: '¿Quiénes somos?'},
    { id: 'productos', name: 'Productos', description: '¿Qué elaboramos?'},
    { id: 'temporada', name: 'De Temporada', description: 'Nuestros productos de temporada'},
    { id: 'fotos', name: 'Fotos', description: 'Imágenes de nuestras delicias artesanas'},
    { id: 'contacto', name: 'Contacto', description: 'Visitanos en la provincia de Valladolid'}
  ];

  options.forEach(function(option) {
    appendOption(option)
  });
}());
