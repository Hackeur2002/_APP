import React from 'react';
import { ActualitePrincipal } from '../../../NoSQL';

function Actualite(props) {
    return (
        <section className="bg-white dark:bg-white">
            {ActualitePrincipal.map((act)=>(
                <div className='px-3 mx-auto max-w-screen-xl text-center py-5 lg:py-5 sm:py-5 drop-shadow-2xl'>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-4">
                            <div className='w-full h-full'>
                                <img className="w-full h-full animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-linear rounded-lg" src={act.image} alt="office content 2" />
                            </div>
                            <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-linear font-light text-black sm:text-lg dark:text-black text-left">
                            
                                <p className="mb-4">
                                    {act.description}
                                </p>
                                <a className='hover:underline inline-flex text-amber-700 items-center' href="/details-projets/RISE">
                                    <span>Allez voir</span>
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                            </div>
                            
                        </div>
                    </section>
                </div>
            ))}
            
        </section>
    );
}

export default Actualite;