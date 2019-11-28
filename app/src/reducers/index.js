import {GET_RAND_JOKE,GET_BY_CATEGORY,GET_CATEGORY} from '../types/index'
import {GET_RAND_JOKE_GQL,GET_JOKE_BY_CATEGORY_GQL,CATEGORIES_GQL} from '../Queries'
import {combineReducers}  from 'redux'
import { useQuery } from '@apollo/react-hooks';

const getRandJoke = useQuery(GET_RAND_JOKE_GQL);


const jokesReducer = (state={}, action) =>{
    switch(action.type){
        case GET_RAND_JOKE:
            console.log(getRandJoke.data)
            return {...getRandJoke.data }
        default:
            return state
    }
}

const reducer  = combineReducers({
    jokesReducer
})

export default reducer