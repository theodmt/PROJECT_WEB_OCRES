import React from "react";

export default class Home extends React.Component{


    render(){

        return(
            <main class="home_main">
                <img class="logo_home"src="Logo_Home.png" alt="logo_home"/>

                <div class="home_boutton">
                    <p class="title_ongletchimie">Chimie</p>
                    <a href="#" class="home_boutton_ongletchimie">
                    </a>
                    <p class="title_ongletmaths">Mathématiques</p>
                    <a href="#" class="home_boutton_ongletmaths">
                    </a>
                    <p class="title_ongletmethodologie">Méthodologie</p>
                    <a href="#" class="home_boutton_ongletmethodologie">
                    </a>
                    <p class="title_ongletphysique">Physique</p>
                    <a href="#" class="home_boutton_ongletphysique">
                    </a>
                    <p class="title_ongletprogrammation">Programmation</p>
                    <a href="#" class="home_boutton_ongletprogrammation">
                    </a>
                </div>
            </main>
        )
    }
}