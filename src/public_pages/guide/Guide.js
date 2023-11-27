import React from 'react';
import Banniere from '../../default_pages/banniere/Banniere';
import LesGuides from './Components/LesGuides';

function Guide(props) {
    return (
        <>
            <Banniere desc="GUIDE" name="Guide" />
            <LesGuides />
        </>
    );
}

export default Guide;