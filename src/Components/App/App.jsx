import React from 'react';
import './App.css';
import './../Header/Header'
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

// function App() {
//     return <h1>This is first functional component</h1>;
// }

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {

    state = {
        headertext: 'Name it',
        headerImageexpanded: true,
        SuggestedNames: []
    }

    handleInputChange = (inputtext) => {

        this.setState({ headerImageexpanded: !inputtext, SuggestedNames: inputtext.length > 0 ? name(inputtext) : [] });

        console.log(name(inputtext));
    }


    render() {
        return (
            <div>
                <Header headerExpand={this.state.headerImageexpanded} headtext={this.state.headertext} />
                <SearchBox OnInputChange={this.handleInputChange} />
                <ResultsContainer SuggestedNames={this.state.SuggestedNames} />
            </div>
        );

    }
}

export default App;