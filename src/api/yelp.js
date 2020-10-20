import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer M21VlYh7222eWxzkpe0QPOssIYO--iVULMIbpep74AW_epgHebmIETMHmRK6tf_UVA08mwKnYvU8weBfQwDnZiXF8AAHn8Il7zQAxrjmB63qZNWw89c3pBI5WzeIX3Yx',
  },
});
