const formatDate = (JSONdate) => {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(JSONdate).toLocaleDateString('en-GB', options);
};

export default formatDate;
