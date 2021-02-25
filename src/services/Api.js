const API_KEY = '19804146-226f6b2b23308d5d1fd703e5d';
// const BASE_URL = `https://pixabay.com/api/?q=поиск&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

function Api(query, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(response => response.json())
    .then(data => data.hits);
}

export default Api;
