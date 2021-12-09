import React from "react";
import { Link } from "react-router-dom";


export default class Home extends React.Component{


    render(){

        return(
            <main class="home_main">
                <img class="logo_home"src="Logo_Home.png" alt="logo_home"/>

                <div class="home_boutton">
                    
                    <Link to="/Chimie" class="home_boutton_ongletchimie">
                    <p class="onglet">Chimie</p>
                    </Link>
                    <Link to="/Maths" class="home_boutton_ongletmaths">
                    <p class="onglet">Maths</p>
                    </Link>
                    <Link to="/Methodologie" class="home_boutton_ongletmethodologie">
                    <p class="onglet">Méthodologie</p>
                    </Link>
                    <Link to="/Physique" class="home_boutton_ongletphysique">
                    <p class="onglet">Physique</p>
                    </Link>
                    <Link to="/Programmation" class="home_boutton_ongletprogrammation">
                    <p class="onglet">Programmation</p>
                    </Link>
                </div>
            </main>
        )
    }
}