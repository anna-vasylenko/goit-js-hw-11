import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderMarkup } from './js/render-functions';
import { getImages } from './js/pixabay-api';

export const refs = {
  formSearchEl: document.querySelector('.form-search'),
  galleryListEl: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.loader.classList.add('loader-hidden');

refs.formSearchEl.addEventListener('submit', e => {
  e.preventDefault();

  let searchValue = refs.formSearchEl.elements.search.value.trim();
  if (!searchValue) return;

  refs.galleryListEl.innerHTML = '';
  refs.loader.classList.remove('loader-hidden');

  getImages(searchValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          position: 'topRight',
          progressBarColor: '#fafafb',
        });
        return;
      }
      refs.galleryListEl.innerHTML = renderMarkup(data.hits);
      gallery.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: `Error: ${error.message}`,
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        position: 'topRight',
        progressBarColor: '#fafafb',
      });
    })
    .finally(() => {
      refs.loader.classList.add('loader-hidden');
    });

  refs.formSearchEl.elements.search.value = '';
});

const gallery = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
