import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '35146846-5a99dc9bb4c755dbdfcd66a7d',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;
  return data;
};
