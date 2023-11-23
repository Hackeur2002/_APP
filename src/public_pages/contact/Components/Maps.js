import React from 'react';

function Maps(props) {
    return (
        <div className='px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15 w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.34312303971822!2d2.3980005564259597!3d6.360033768111286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sbj!4v1700667591879!5m2!1sfr!2sbj" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Maps;