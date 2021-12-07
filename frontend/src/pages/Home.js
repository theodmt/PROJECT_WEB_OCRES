import React from "react";

export default class Home extends React.Component{


    render(){

        return(
            <main class="home_main">
                <img class="logo_home"src="Logo_Home.png" alt="logo_home"/>

                <div class="home_boutton">
                    <a href="#" class="home_boutton_ongletchimie">
                    </a>
                    <a href="#" class="home_boutton_ongletmaths">
                    </a>
                    <a href="#" class="home_boutton_ongletmethodologie">
                    </a>
                    <a href="#" class="home_boutton_ongletphysique">
                    </a>
                    <a href="#" class="home_boutton_ongletprogrammation">
                    </a>
                </div>
            </main>
        )
    }
}