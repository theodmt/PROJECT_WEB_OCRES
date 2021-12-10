import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
    name: 'Juillet',
    Nombre: 24,
  },
  {
    name: 'Aout',
    Nombre: 39,
   
  },
  {
    name: 'Septembre',
    Nombre: 68,
    
  },
  {
    name: 'Octobre',
    Nombre: 81,
    
  },
  {
    name: 'Novembre',
    Nombre: 92,
  
  },
];

export default function Avis(){
    return (
    <div class="avis">

                <h1>Avis</h1>
                <article class="avis_container">
                    <div class="avis_entete">
                        <img class="photo_avis" src="photo_profil_defaut.png" alt=""/>
                        <div class="infos_avis">
                            <h2>Nom</h2>
                            <h2>Prenom</h2>
                            <h2>Note</h2>
                        </div>
                    </div>
                        <p class="avis_content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada eget elit ac tincidunt. Curabitur eget magna porttitor urna semper varius vitae nec felis. Aenean commodo ultricies enim, non efficitur urna pellentesque eget. 
                        </p>
                </article>
                <article class="avis_container">
                    <div class="avis_entete">
                        <img class="photo_avis" src="photo_profil_defaut.png" alt=""/>
                        <div class="infos_avis">
                            <h2>Nom</h2>
                            <h2>Prenom</h2>
                            <h2>Note</h2>
                        </div>
                    </div>
                        <p class="avis_content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada eget elit ac tincidunt. Curabitur eget magna porttitor urna semper varius vitae nec felis. Aenean commodo ultricies enim, non efficitur urna pellentesque eget. 
                        </p>
                </article>
                <article class="avis_container">
                    <div class="avis_entete">
                        <img class="photo_avis" src="photo_profil_defaut.png" alt=""/>
                        <div class="infos_avis">
                            <h2>Nom</h2>
                            <h2>Prenom</h2>
                            <h2>Note</h2>
                        </div>
                    </div>
                        <p class="avis_content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada eget elit ac tincidunt. Curabitur eget magna porttitor urna semper varius vitae nec felis. Aenean commodo ultricies enim, non efficitur urna pellentesque eget. 
                        </p>
                </article>
                <div class="graphique_description">
                <h3>De plus en plus d'élèves progressent avec nous, pourquoi pas vous ?</h3>
                <p>Ce graphique correspond au nombre d'élève ayant été accompagnés par Etudiant Particulier ces derniers mois</p>
                </div>
                
                <div class="graphique">
                <ResponsiveContainer width="70%" aspect={3}>
                    <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="white"/>
                    <YAxis stroke="white"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Nombre" stroke="#46C2BA" fill="white" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
      </div>
    );
  }

