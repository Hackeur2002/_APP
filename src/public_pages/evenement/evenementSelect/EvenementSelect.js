import React from 'react';
import Banniere from '../../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function EvenementSelect(props) {
    return (
        <>
            <Banniere desc="EVENEMENTS" name={`Evènements / ${props.name}`}  />
            <Description name={`${props.name}`} />
        </>
    );
}

export default EvenementSelect;