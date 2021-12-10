import react from 'react';
import PrendreCours from '../components/Modal/PrendreCours';
import PrendreCours2 from '../components/Modal/PrendreCours2';

function Tarifs() {
    return (
    <div className="tarifs">
        <h1 class="title_tarifs">Cours et tarifs</h1>
        <table>
            <tr>
                <td>Niveaux</td>
                <td>4 ème</td>
                <td>3 ème</td>
                <td>Seconde</td>
                <td>Première</td>
                <td>Terminale</td>
                <td>Bac +1</td>
                <td>Bac +2</td>
            </tr>
            <tr>
            <td>Tarif horraire (€)</td>
                <td>22</td>
                <td>24</td>
                <td>26</td>
                <td>28</td>
                <td>30</td>
                <td>32</td>
                <td>34</td>
            </tr>
        </table>
        <PrendreCours2 />
    </div>
    );
}

export default Tarifs;