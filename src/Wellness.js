import React, { Component } from 'react';

import Feelings from './Feelings'

class Wellness extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.wellness = ['Calm', 'Anxious', 'Happy', 'Stressed', 'Focused', 'Grateful']
    }
    render() { 
        return ( 
            <section className={`wellness-comp`}>
      {
        this.wellness.map((feeling, index) => {
        return <Feelings key={index} feeling={feeling} />
        })
      }
            </section>
         );
    }
}
 
export default Wellness;