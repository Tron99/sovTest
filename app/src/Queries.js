import { gql } from 'apollo-boost';

export const GET_RAND_JOKE_GQL = gql `
{
    getRandomJoke{
      value,
      id
    }
  }`;
export const GET_JOKE_BY_CATEGORY_GQL = gql `
query($category:String)
{
    getRandomJokeByCategory(category:$category){
      value
    }
  }`;

export const CATEGORIES_GQL = gql `
{
    getJokeCategories
}`;
