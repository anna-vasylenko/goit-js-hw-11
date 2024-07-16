export function fetchImages(searchValue) {
  const URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44962724-2fcdbdaf7fb299db2b6841432',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}