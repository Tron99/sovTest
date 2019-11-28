import { GET_RAND_JOKE, GET_BY_CATEGORY, GET_CATEGORY } from '../types/index'

export const getRandJoke = () => {
    return {
        type: GET_RAND_JOKE
    }
}
export const getJokeByCategory = (category) => {
    return {
        type: GET_BY_CATEGORY,
        category
    }
}

export const getCaegories = (category) => {
    return {
        type: GET_CATEGORY,
        category
    }
}