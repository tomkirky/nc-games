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

export const getReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`);
  return data.review;
};

export const getComments = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const getUser = async (username) => {
  const { data } = await gamesApi.get(`/users/${username}`);
  return data.username;
};

export const patchVotes = async (review_id, voteBody) => {
  await gamesApi.patch(`/reviews/${review_id}/`, voteBody);
  return console.log('Vote successfully added');
};
