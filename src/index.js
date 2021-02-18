import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            lat: null,
            errorMessage: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (error) => {
                console.log(error);
                this.setState({errorMessage: error.message});
            }
        );
    }

    render(){
        return(
            <div>{this.state.errorMessage && !this.state.lat ? 
                'Error ' + this.state.errorMessage : 
                !this.state.errorMessage && this.state.lat ?
                    'Latitude: ' + this.state.lat : 'loading...'} </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))