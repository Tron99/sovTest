import React, { Component } from 'react';
import Select from 'react-select'
import { connect } from 'react-redux'
import { getRandJoke } from '../actions/index'

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
        this.state = {
            selectedOption: null
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    componentDidMount(){

    }
    render() {

        const { selectedOption } = this.state;
        return (
            <div>
                <h1 style={noticeStyles}>Hey Click On the "Get Joke" button below to get a random or<br />
                    Select the optional category then click on the "Get Joke" button to get a joke by category
                </h1>
                <div id="joke-selector">
                    <div class="joke-container">

                    </div>

                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                </div>
                <button id="getjoke-btn" onClick={this.props.getRandJoke}>Get Joke</button>

            </div>
        );
    }
}

const mapStateToPops = (state) => {

}
const mapDispatchToProps = (dispatch) => {
    return {
        getJoke: () => dispatch(getRandJoke())
    }
}

export default connect(null, mapDispatchToProps)(Home);