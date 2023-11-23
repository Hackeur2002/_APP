import React from 'react';
import { Card } from 'flowbite-react';
import ComImg from '../Images/communique.jpg';
import { CommuniqueListe } from '../../../NoSQL';

function LesCommunique(props) {
    return (
        <>
            <div className='px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                <div className='lg:grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-1'>
                {CommuniqueListe.map((el)=>(
                    <div className='text-left'>
                        <Card
                            className="max-w-sm animate-once animate-duration-1000 animate-delay-300"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={ComImg}
                            key={el.id}
                        >
                            <h5 className="text-sm font-bold tracking-tight text-black dark:text-white">
                                {el.date}
                            </h5>
                            <p className="font-normal text-sm text-black dark:text-black">
                                {el.description}
                            </p>
                        </Card>
                    </div>
                    
                ))}
                </div>
            </div>
        </>
    );
}

export default LesCommunique;