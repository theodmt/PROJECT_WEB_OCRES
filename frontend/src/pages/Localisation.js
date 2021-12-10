import react from 'react';

function Localisation() {
    return (
    <div className="localisation">
        <h1 class="title_localisation">Localisation</h1>
        <p>Nos tarifons des frais de déplacement au dela de 10km.</p>
        <p>Entrez votre adresse ci dessous, puis cliquez sur calculer pour calculer vos frais de déplacement.</p>
        <input class="adresse" type="text" placeholder='Votre adresse'/>
        <button class="calculer">Calculer</button>
        <p>Vos frais de déplacement sont de : </p>
    </div>
    );
}

export default Localisation;