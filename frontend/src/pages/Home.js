import React from "react";

export default class Home extends React.Component{


    render(){

        return(
            <main class="home_main">
                <img class="logo_home"src="Logo_Home.png" alt="logo_home"/>

                <div class="home_boutton">
                    
                    <a href="#" class="home_boutton_ongletchimie">
                    <p class="onglet">Chimie</p>
                    </a>
                    <a href="#" class="home_boutton_ongletmaths">
                    <p class="onglet">Maths</p>
                    </a>
                    <a href="#" class="home_boutton_ongletmethodologie">
                    <p class="onglet">Méthodologie</p>
                    </a>
                    <a href="#" class="home_boutton_ongletphysique">
                    <p class="onglet">Physique</p>
                    </a>
                    <a href="#" class="home_boutton_ongletprogrammation">
                    <p class="onglet">Programmation</p>
                    </a>
                </div>
            </main>
        )
    }
}