import {GET_JOKE} from '../types/index'
import {combineReducers}  from 'redux'

const jokesReducer = (state={}, action) =>{
    switch(action.type){
        case GET_JOKE:
            return {...action.payload}
        default:
            return state
    }
}

const reducer  = combineReducers({
    jokesReducer
})

export default reducer