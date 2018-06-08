console.log('Powered by Starter Project (https://starter.silvestarbistrovic.from.hr).')

const $sidebar = document.querySelector('.js-sidebar')
const $hero = document.querySelector('.js-hero')
const $content = [document.querySelector('.js-content1'),
  document.querySelector('.js-content2'),
  document.querySelector('.js-content3'),
  document.querySelector('.js-content4')]

const populate = (data) => {
  data.items.sort((a, b) => {
    const dateB = new Date(b.createdAt)
    const dateA = new Date(a.createdAt)
    return dateB - dateA
  }).forEach((item, i) => {
    const j = i % 4
    let img = item.image

    while (img.search(/\/$/) !== -1) {
      img = img.replace(/\/$/, '')
    }

    $sidebar.insertAdjacentHTML('beforeend', `<a class="sidebar__icon" href="#"><img src="${img}" alt="${item.title}"/></a>`)

    if (i === 0) {
      $hero.insertAdjacentHTML('beforeend', `<a class="hero__button" href="#">Go to ${item.title}</a><div class="hero__element"><h1>${item.title}</h1><p>${item.description}</p>`)
    } else {
      $content[j].insertAdjacentHTML('beforeend', `<div class="content__element content__element--${i + 1}"><div class="content__icon"><img src="${img}" alt="${item.title}"></div><div class="content__info"><h5>${item.title}</h5><p>${item.description}</p></div>`)
    }
  })
}

fetch('https://jsonblob.com/api/jsonBlob/85859a69-6a55-11e8-943a-dfd3592daacc')
  .then((response) => {
    if (response.ok) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error('Failed to load'))
  })
  .then(response => response.json()) // parse response as JSON
  .then(data => populate(data))
  .catch((error) => {
    console.log(`Error: ${error.message}`)
  })
