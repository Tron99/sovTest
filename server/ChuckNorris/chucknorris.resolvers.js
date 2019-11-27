const axios = require('axios').default;

export const resolvers = {
  Query : {
    async getJokeCategories(parent, args, context, info) {
      const response = await axios.get('https://api.chucknorris.io/jokes/categories');
      return response.data;
    },
    async getRandomJoke(parent, args, context, info) {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      return response.data;
    },
    async getRandomJokeByCategory(parent, args, context, info) {
      const category = args.category;
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      return response.data;
    }
  }
}