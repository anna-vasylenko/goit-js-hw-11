import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  formSearchEl: document.querySelector('.form-search'),
  galleryListEl: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.loader.classList.add('loader-hidden');

refs.formSearchEl.addEventListener('submit', e => {
  e.preventDefault();
  refs.galleryListEl.innerHTML = '';
  refs.loader.classList.remove('loader-hidden');

  let searchValue = refs.formSearchEl.elements.search.value.trim();

  fetchImages(searchValue)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          position: 'topRight',
          progressBarColor: '#fafafb',
        });
        return;
      }
      renderImages(data.hits);
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.loader.classList.add('loader-hidden');
    });

  refs.formSearchEl.elements.search.value = '';
});

export function fetchImages(searchValue) {
  const URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44962724-2fcdbdaf7fb299db2b6841432',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${params}`);
}

function renderImages(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
           <li class="gallery-item">
          <a href="${largeImageURL}">
          <div class="image-container">
            <img src="${webformatURL}" alt="${tags}" width="360" height="200"> </div>
            <ul class="photo-dsc">
               <li > 
                <p class="photo-dsc-title">Likes</p>
                <p class="photo-dsc-text">${likes}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Views</p>
                <p class="photo-dsc-text">${views}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Comments</p>
                <p class="photo-dsc-text">${comments}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Downloads</p>
                <p class="photo-dsc-text">${downloads}</p>
              </li>
            </ul>
          </a>
        </li>
      `;
      }
    )
    .join('');

  refs.galleryListEl.innerHTML = markup;
  gallery.refresh();
}

const gallery = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
