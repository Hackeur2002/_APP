import React from 'react';
import orgaImg from '../Images/orga1.png';

function Description(props) {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className='px-3 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                
                <p className='text-justify py-5'>
                    Plongeons dans les rouages de l'organisation, où la coordination, la collaboration, et l'expertise convergent pour soutenir efficacement les entrepreneurs et catalyser le développement économique. À travers l'organigramme, découvrons la structure qui donne forme à la puissante symphonie de l'ADPME, incarnant ainsi son engagement envers l'excellence opérationnelle et la réussite collective.
                </p>
                <p className='text-center'>
                    <img width="100%" src={orgaImg} />
                </p>
            </div>
        </section>
    );
}

export default Description;