import React from 'react';

export default class Footer extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="footer">
                <h1> Cats - {this.props.votes.cats} | Dogs - {this.props.votes.dogs} </h1>
            </div>   
        );
    }
}