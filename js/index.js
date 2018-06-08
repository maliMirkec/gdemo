'use strict';

console.log('Powered by Starter Project (https://starter.silvestarbistrovic.from.hr).');

var $sidebar = document.querySelector('.js-sidebar');
var $hero = document.querySelector('.js-hero');
var $content = [document.querySelector('.js-content1'), document.querySelector('.js-content2'), document.querySelector('.js-content3'), document.querySelector('.js-content4')];

var populate = function populate(data) {
  data.items.sort(function (a, b) {
    var dateB = new Date(b.createdAt);
    var dateA = new Date(a.createdAt);
    return dateB - dateA;
  }).forEach(function (item, i) {
    var j = i % 4;
    var img = item.image;

    while (img.search(/\/$/) !== -1) {
      img = img.replace(/\/$/, '');
    }

    $sidebar.insertAdjacentHTML('beforeend', '<a class="sidebar__icon" href="#"><img src="' + img + '" alt="' + item.title + '"/></a>');

    if (i === 0) {
      $hero.insertAdjacentHTML('beforeend', '<a class="hero__button" href="#">Go to ' + item.title + '</a><div class="hero__element"><h1>' + item.title + '</h1><p>' + item.description + '</p>');
    } else {
      $content[j].insertAdjacentHTML('beforeend', '<div class="content__element content__element--' + (i + 1) + '"><div class="content__icon"><img src="' + img + '" alt="' + item.title + '"></div><div class="content__info"><h5>' + item.title + '</h5><p>' + item.description + '</p></div>');
    }
  });
};

fetch('https://jsonblob.com/api/jsonBlob/85859a69-6a55-11e8-943a-dfd3592daacc').then(function (response) {
  if (response.ok) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error('Failed to load'));
}).then(function (response) {
  return response.json();
}) // parse response as JSON
.then(function (data) {
  return populate(data);
}).catch(function (error) {
  console.log('Error: ' + error.message);
});
//# sourceMappingURL=index.js.map
