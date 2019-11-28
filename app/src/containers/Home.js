import React, { useState } from 'react';
import Select from 'react-select'
import { connect } from 'react-redux'
import { getRandJoke } from '../actions/index'
import {GET_RAND_JOKE_GQL,GET_JOKE_BY_CATEGORY_GQL,CATEGORIES_GQL} from '../Queries'
import { useLazyQuery } from '@apollo/react-hooks';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const noticeStyles = {
    fontSize: "20px",
    fontStyle: "italic",
    border: "1px solid #000",
    width: "60%",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "5px"
}

const myEventHandler = (e,props) =>{
    console.log(e.target)
}

const Home  = (props) =>{



    const [categories, setCategories] = useState(null);
    const [getJoke, { loading, data }] = useLazyQuery(GET_RAND_JOKE_GQL);
    console.log(data)
  
    if (loading) return <p>Loading ...</p>;
  
    if (data && data.value) {
      setCategories(data);
    }

        return (
            <div>
                <h1 style={noticeStyles}>Hey Click On the "Get Joke" button below to get a random or<br />
                    Select the optional category then click on the "Get Joke" button to get a joke by category
                </h1>
                <div id="joke-selector">
                    <div className="joke-container">

                    </div>

                    <Select
                        value={props.selectedOption}
                        // onChange={}
                        options={options}
                    />
                </div>
                <button id="getjoke-btn" onClick={myEventHandler}>Get Joke</button>

            </div>
        );
    }


const mapStateToPops = (state) => {

}
const mapDispatchToProps = (dispatch) => {
    return {
        getJoke: () => dispatch(getRandJoke())
    }
}

export default connect(null, mapDispatchToProps)(Home);