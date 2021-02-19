import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state = { lat: null, errorMessage: ''}

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
    }

    componentDidUpdate(){
        console.log("My component was just updated - it rerendered!");
    }

    render(){
        return(
            <div>{this.state.errorMessage && !this.state.lat ? 
                'Error ' + this.state.errorMessage : 
                !this.state.errorMessage && this.state.lat ?
                    <SeasonDisplay lat={this.state.lat}/> : 'loading...'} </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))