import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
    }

    switchColor = () => {
        this.setState({
            color: "#333"
        })
    }

    render() {
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}}
                onClick={this.switchColor}
                >
            </div>
        )
    }
}

export default Cell;