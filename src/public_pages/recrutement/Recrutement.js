import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import Offre from './Components/Offre';
import FormCandidature from './Components/FormCandidature';

function Recrutement(props) {
    return (
        <>
            <Banniere desc="OPPORTUNITES CHEZ NOUS" name="Opportunités chez nous" />
            <Offre />
            <FormCandidature />
        </>
    );
}

export default Recrutement;