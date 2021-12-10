import react from 'react';


function Disponibilite() {
    return (
    <div className="disponibilite">
        <h1 class="title_disponibilite">Disponibilités </h1>
        <div class="disponibilite_content">
	        <p>Consultez les disponibilités en cliquant sur "Disponibilités" ci dessous : </p>
	    		
		    <a href="Planning.xlsx" download>Disponibilités</a>
		    
	    	<p>	Si aucun créneaux ne vous convient, contactez-nous pour savoir si il y a eu des désistements. </p>
        </div>
    </div>
    
    );
}

export default Disponibilite;