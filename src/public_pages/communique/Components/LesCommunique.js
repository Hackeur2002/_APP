import React from 'react';
import { Card } from 'flowbite-react';
import ComImg from '../Images/communique.jpg';
import { CommuniqueListe } from '../../../NoSQL';
import cal from '../Images/calendrier.png'

function LesCommunique() {
    return (
        <>
            <div className='max-xl:px-14 px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                {CommuniqueListe.length <= 0 ? (<span>Aucun Communiqué pour le moment</span>) : 
                    <div className='lg:grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-1'>
                        {CommuniqueListe.map((el) => (
                            <div className='text-left'>
                                <Card
                                    className="max-w-sm animate-once animate-duration-1000 animate-delay-300"
                                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                                    imgSrc={ComImg}
                                    key={el.id}
                                >
                                    <h5 className="text-sm font-bold tracking-tight text-black dark:text-white">
                                        <span className='inline-flex'>
                                            <img className='w-5 h-5' src={cal} />&nbsp;
                                            <span className='text-gray-500 text-sm'><i>{el.date}</i></span>
                                        </span>
                                    </h5>
                                    <p className="font-normal text-sm text-black dark:text-black">
                                        {el.description}
                                    </p>
                                </Card>
                            </div>

                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default LesCommunique;