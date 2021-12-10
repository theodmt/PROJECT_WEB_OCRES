import React from 'react';

import axios from "axios";

export default class Avis extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            URL: "",
            title:""
        }


    }

    componentDidMount() {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=bFOhUhZ2aMLmzM7zNLn1RT1ktmHbYc9eZa6TQf1d")
            .then(res => (
                this.setState(state => (
                    {
                        URL: res.data.url,
                        title: res.data.title
                    }
                ))
            ))

    }



    render() {

        return (
            <div class="widgetphysique">
                
               
                
                <img src={this.state.URL} alt="Astronomy Pic Of the Day" width="250" height="auto" />
                <p class="photolabel">Photo du jour de la NASA : {this.state.title}</p>
               
            </div>
        )
    }
}