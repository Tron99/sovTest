
export const GET_RAND_JOKE_GQL =  `
{
    getRandomJoke{
      value,
      id
    }
  }`;
export const GET_JOKE_BY_CATEGORY_GQL =`
query($category:String)
{
    getRandomJokeByCategory(category:$category){
      value
    }
  }`;

export const CATEGORIES_GQL =`
{
    getJokeCategories
}`;
