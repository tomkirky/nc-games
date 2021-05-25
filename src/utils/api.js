import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://nc-games-api.herokuapp.com/api',
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getReviews = async (category, sortBy, order) => {
  const { data } = await gamesApi.get('/reviews', {
    params: { category, sort_by: sortBy, order },
  });
  return data.reviews;
};
