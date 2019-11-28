import {GET_RAND_JOKE,GET_BY_CATEGORY,GET_CATEGORY} from '../types/index'
import {combineReducers}  from 'redux'


const jokesReducer = (state={}, action) =>{
    switch(action.type){
        case GET_RAND_JOKE:
            return {state }
        default:
            return state
    }
}

const reducer  = combineReducers({
    jokesReducer
})

export default reducer