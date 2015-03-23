'use strict';

(function() {

  var list = document.querySelector('section.main ul');

  function appendOption(option) {
    var item = document.createElement('li');
    var name = document.createElement('p');
    name.textContent = option.name;
    item.appendChild(name);
    var description = document.createElement('p');
    description.textContent = option.description;
    item.appendChild(description);
    list.appendChild(item);
    item.addEventListener('click', function() {
      var option = item.querySelector('p:nth-child(1)').textContent.
                   toLowerCase();
    });
  }

  var options = [
    { name: 'Inicio', description: '¿Quiénes somos?'},
    { name: 'Productos', description: '¿Qué elaboramos?'},
    { name: 'De Temporada', description: 'Nuestros productos de temporada'},
    { name: 'Fotos', description: 'Imágenes de nuestras delicias artesanas'},
    { name: 'Contacto', description: 'Visitanos en la provincia de Valladolid'}
  ];

  options.forEach(function(option) {
    appendOption(option)
  });
}());
