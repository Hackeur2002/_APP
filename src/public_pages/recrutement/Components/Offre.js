import React from 'react';
import { RecrutementsListe } from '../../../NoSQL';

function Offre(props) {
    return (
        <>
            <div className='max-xl:px-14 px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <div className='mb-10'>
                    <span className='text-4xl font-bold'>Nos offres d'emploi</span>
                </div>
                <div className="max-md:flex max-md:flex-col grid grid-cols-4 gap-4">
                    {RecrutementsListe.length <= 0 ? (<span>Aucun Offre pour le moment</span>) : 
                        RecrutementsListe.map((re)=>(
                            <div>
                                <div className="max-md:w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href={`/details-recrutement/${re.titre}`}>
                                        <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-900 dark:text-white">{re.titre}</h5>
                                    </a>
                                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{re.subTitle}</p>
                                    <a href={`/details-recrutement/${re.titre}`} className="rounded-l-lg rounded-tr-lg inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                                        JE SUIS INTERESSE(E)
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Offre;