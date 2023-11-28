import React from 'react';
import Banniere from '../../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function ProjetSelect(props) {
    return (
        <>
            <Banniere desc="PROJETS" name={`Projets / ${props.name}`} />
            <Description name={`${props.name}`} />
        </>
    );
}

export default ProjetSelect;