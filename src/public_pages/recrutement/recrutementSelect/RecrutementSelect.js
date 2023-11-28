import React from 'react';
import Banniere from '../../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function RecrutementSelect(props) {
    return (
        <>
            <Banniere desc="OPPORTUNITES CHEZ NOUS" name={`Opportunités chez nous / ${props.name}`} />
            <Description name={`${props.name}`} />
        </>
    );
}

export default RecrutementSelect;