import React from 'react';

import axios from "axios";

export default class Widget2 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            datetime: "",
            day_of_year:"",
           
        }


    }

    componentDidMount() {
        axios.get("http://worldtimeapi.org/api/timezone/Europe/Paris")
            .then(res => (
                this.setState(state => (
                    {
                
                        datetime: res.data.datetime,
                        day_of_year:res.data.day_of_year,
                       
                    }
                ))
            ))

    }



    render() {

        return (
            <div class="widgetprogrammation">
                
              
                <p> Infos du jour : Nous somme le {this.state.datetime}, soit le {this.state.day_of_year}ème jour de l'année. </p>

           
            </div>
        )
    }
}
