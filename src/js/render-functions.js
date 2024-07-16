export function renderMarkup(arr) {
  return arr
    .map(item => {
      return `
           <li class="gallery-item">
          <a href="${item.largeImageURL}">
          <div class="image-container">
            <img src="${item.webformatURL}" alt="${item.tags}" width="360" height="200"> </div>
            <ul class="photo-dsc">
               <li > 
                <p class="photo-dsc-title">Likes</p>
                <p class="photo-dsc-text">${item.likes}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Views</p>
                <p class="photo-dsc-text">${item.views}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Comments</p>
                <p class="photo-dsc-text">${item.comments}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Downloads</p>
                <p class="photo-dsc-text">${item.downloads}</p>
              </li>
            </ul>
          </a>
        </li>
      `;
    })
    .join('');
}
