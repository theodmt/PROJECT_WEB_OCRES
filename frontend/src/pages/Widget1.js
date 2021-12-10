import React from 'react';

import axios from "axios";

export default class Widget1 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            expression: ""
        }


    }

    componentDidMount() {
        axios.get("https://x-math.herokuapp.com/api/random")
            .then(res => (
                this.setState(state => (
                    {
                
                        expression: res.data.expression
                    }
                ))
            ))

    }



    render() {

        return (
            <div class="widgetmaths">
                
            
                   Calcul du jour : {this.state.expression} = ?
              
            </div>
        )
    }
}