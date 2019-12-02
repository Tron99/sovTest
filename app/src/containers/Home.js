import React, { Component } from 'react';
import Select from 'react-select'
import { connect } from 'react-redux'
import { getRandJoke, setJoke, setCategories } from '../actions/index'
import { GET_RAND_JOKE_GQL, GET_JOKE_BY_CATEGORY_GQL, CATEGORIES_GQL } from '../Queries'
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { GET_CATEGORY, GET_RAND_JOKE } from '../types';
import { store } from '../index';
import axios from 'axios'
import Loader from 'react-loader-spinner'


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



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { options: [], selectedOption: '',isLoading:false }
        this.myEventHandler = this.myEventHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    componentWillMount() {
        axios({
            url: 'http://localhost:4000/graphiql',
            method: 'post',
            data: {
                query: CATEGORIES_GQL
            }
        }).then((result) => {
            this.props.setCategories(result.data.data.getJokeCategories)
            console.log("got catefory", result.data.data.getJokeCategories)
        }).then(() => {
            console.log(this.props.categories, "yeye!")
            this.setState({ options: this.props.categories })
        });

        this.props.setCategories();
        console.log(store.getState(), "state here")
        console.log(this.props)
    }

    myEventHandler = (e) => {
        this.setState({isLoading:true})
        axios({
            url: 'http://localhost:4000/graphiql',
            method: 'post',
            data: {
                query: GET_RAND_JOKE_GQL
            }
        }).then((result) => {
            console.log(result.data.data.getRandomJoke.value)
            let joke = result.data.data.getRandomJoke.value
            this.props.setJoke(joke)
            this.setState({isLoading:false})
        });

        this.props.getJoke();
        console.log(store.getState(), "state here")
        console.log(this.props)

    }

    handleChange = selectedOption => {
        this.setState({ selectedOption: selectedOption.value });
        console.log(`Option selected:`, selectedOption);
        console.log("current state ", this.state)
    }
    render() {

        let { joke } = this.props.joke
        return (
            <div>
                <h1 style={noticeStyles}>Hey Click On the "Get Joke" button below to get a random or<br />
                    Select the optional category then click on the "Get Joke" button to get a joke by category
                    </h1>
                <div id="joke-selector">
                    <div className="joke-container"><div>
{
    (this.state.isLoading) ? "Loading ...":

                        <p style={{
                            display: "block",
                            background: "#099",
                            color: "#fff",
                            padding: "20px",
                        }}>{joke}</p>}
                    </div>
                    </div>

                    <h1>Jokes are by these categories</h1>
                    <ul id="categories">
                        {
                            this.state.options.map(item => {
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <button id="getjoke-btn" onClick={this.myEventHandler}>Get Joke</button>

            </div>
        );


    }


}


const mapStateToProps = (state) => {
    return {
        joke: state.joke,
        categories: state.joke.categories
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        getJoke: () => dispatch(getRandJoke()),
        setJoke: (joke) => dispatch(setJoke(joke)),
        setCategories: (categories) => dispatch(setCategories(categories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);