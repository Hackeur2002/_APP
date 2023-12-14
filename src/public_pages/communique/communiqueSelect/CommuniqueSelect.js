import React from 'react';
import Banniere from '../../../default_pages/banniere/Banniere';
import Description from './Components/Description';

function CommuniqueSelect(props) {
    return (
        <>
            <Banniere desc="COMMUNIQUES" name={`Communiqués / ${props.name}`} />
            <Description name={`${props.name}`} />
        </>
    );
}

export default CommuniqueSelect;