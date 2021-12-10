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

                <p class="α appear">α</p>
                <p class="β appear">β</p>
                <p class="δ appear">δ</p>
                <p class="ε appear">ε</p>
                <p class="π appear">π</p>
                
                <img class="division appear" src="division.png" alt="division"/>
                <img class="integrale appear" src="integrale.png" alt="integrale"/>
                <img class="racine appear" src="racine.png" alt="racine"/>
                <img class="neper appear" src="neper.png" alt="neper"/>
                <img class="trigo appear" src="trigo.png" alt="trigo"/>
                <img class="infinity appear" src="infinity.png" alt="infinity"/>
                <img class="somme appear" src="somme.png" alt="somme"/>
                <img class="derive appear" src="derive.png" alt="derive"/>
                
            </main>
        )
    }
}