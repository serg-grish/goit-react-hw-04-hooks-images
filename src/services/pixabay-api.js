const API_KEY = "23089235-f1458266e03eb6f85f7fa04a0";
const BASE_URL = "https://pixabay.com/api/?";

const fetchImages = (searchQuery, page) => {
  const fetchUrl = `${BASE_URL}q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(fetchUrl).then((res) => res.json());
};

export default fetchImages;
