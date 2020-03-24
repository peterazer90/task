const Sorting = (data, type) => data.sort((a, b) => {
  if (type.like) {
    if (a.favorite_count > b.favorite_count) {
      return -1;
    }
  } else if (a.retweet_count > b.retweet_count) {
    return -1;
  }
  return data;
});
export default Sorting;
