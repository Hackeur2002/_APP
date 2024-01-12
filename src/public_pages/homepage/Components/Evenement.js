import React from 'react';
import { EvenemntsLists } from '../../../NoSQL';

function Evenement() {
    return (
        <section className="bg-white dark:bg-gray-900 max-xl:px-4 px-14 mx-auto max-w-screen-xl">
            <div className='mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                <h3 className="text-left pb-5">
                    <span className="text-3xl font-bold dark:text-white mr-5">Evènements</span>
                    <a className='hover:underline inline-flex text-amber-700 items-center' href="/event">
                        <span>voir tout</span>
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </h3>
                <div className="grid grid-cols-2 gap-4 text-left max-md:flex max-md:flex-col">
                {EvenemntsLists.length <= 0 ? 
                        <>
                            Aucun évènement pour le moment
                        </>
                    :
                        EvenemntsLists.map((el) => {
                            const lestypes = [...el.type]
                            return lestypes.map((lt) => {
                                const lescontenus = [...lt.contenu]
                                return lescontenus.map((lc) => (
                                    <div key={lc.id}>

                                        <a href={`/details-evenement/${lc.titre}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            
                                            <div className="flex flex-col p-4 leading-normal">
                                                <h5 className="text-xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{lc.titre}</h5>
                                                <p className="mb-3 font-normal text-sm dark:text-gray-400">
                                                    <span>{lc.subTitle}</span>
                                                </p>
                                                <h5 className="mb-2 font-400 tracking-tight text-gray-900 dark:text-white">{lc.date}</h5>
                                            </div>
                                        </a>

                                    </div>
                                ))
                            })
                        })
                }
                
                </div>
            </div>
        </section>
    );
}

export default Evenement;