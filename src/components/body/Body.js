import React from 'react';

export default class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dogs: 0,
            cats: 0,
        }

        this.reset = this.reset.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
    }

    render() {
        return (
            <div className="body">
                <button onClick={() => this.onIncrement('cats')}> Cats </button>
                <button onClick={() => this.onIncrement('dogs')}> Dogs </button>
                <button onClick={() => this.reset}> Reset </button>
            </div>
        );
    }

    onIncrement(pet) {
        if (pet === 'dogs') {
            this.setState(prevState => {
                return {
                    dogs: prevState.dogs + 1,
                }
            });
        } else {
            this.setState(prevState => {
                return {
                    cats: prevState.cats + 1,
                }
            });
        }
    }

    reset() {
        console.log("reset");
        this.setState({cats: 0, dogs: 0}); 
    }
}