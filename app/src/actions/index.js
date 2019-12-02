import { GET_RAND_JOKE,SET_JOKE, GET_BY_CATEGORY, GET_CATEGORY } from '../types/index'
import React, { Component } from 'react';

export const getRandJoke = () => {

    return {
        type: GET_RAND_JOKE
    }
}

export const setCategories = (categories) =>{
    return {
        type:GET_CATEGORY,
        payload:categories
    }
}
export const setJoke = (joke) =>{
    return {
        type:SET_JOKE,
        payload:joke
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