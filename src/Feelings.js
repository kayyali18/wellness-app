import React, { Component } from 'react';

class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            level: 5
         }
    }

    increaseCount = () => {
        if (this.state.level == 10) return

        this.setState({
            level: ++this.state.level
        })
    }

   

    decreaseCount = () => {
        if (this.state.level == 0) return

        this.setState({
            level: --this.state.level
        })
    }
    render() { 
        return ( 
            <div className='feeling'>
                <h1>{this.props.feeling}</h1>
                <div className={`progress-bar`}>
                    <button className={`decrease-btn`} onClick={this.decreaseCount}>-</button>
                    <progress  max='10' value={`${this.state.level}`}></progress>
                    <button className={`increase-btn`} onClick={this.increaseCount}>+</button>
                </div>
                <p>{this.state.level}/10</p>
            </div>
         );
    }
}
 
export default Feelings;