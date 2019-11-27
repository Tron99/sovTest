import GET_JOKE from '../types/index'

export const getJoke = (category) =>{
    return {
        type: GET_JOKE,
        category
    }
}