import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainDivEl = document.querySelector('.gallery');

const listMarkupImage = creatListImage(galleryItems);


mainDivEl.insertAdjacentHTML('beforeend', listMarkupImage) ;
mainDivEl.addEventListener('click', onMainDivEl);

function creatListImage (galleryItems) {
    
return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}"><img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      /></a>
  </div>`
}).join('');

}

function onMainDivEl(evt) {
evt.preventDefault();
const actualeImageUrl = evt.target.dataset.source;
console.log(actualeImageUrl);
const isImage = evt.target.classList.contains("gallery__image");
if (!isImage) {
  return;
}


const instance = basicLightbox.create(`
    <img src="${actualeImageUrl}" width="800" height="600">
`)

instance.show()


mainDivEl.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    instance.close();
  }
})
}