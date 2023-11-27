import React from 'react';
import { EvenemntsLists } from '../../../NoSQL';

function Evenement() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='px-3 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                <h3 className="text-left pb-5">
                    <span className="text-3xl font-bold dark:text-white mr-5">Evènements</span>
                    <a href="/event" className="hover:underline">
                        <span className='text-black-500 dark:text-gray-400'>voir tout</span>
                    </a>
                </h3>
                <div className="grid grid-cols-2 gap-4 text-left">
                {EvenemntsLists.length <= 0 ? 
                        <div role="status" className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    :
                        EvenemntsLists.map((el) => {
                            const lestypes = [...el.type]
                            return lestypes.map((lt) => {
                                const lescontenus = [...lt.contenu]
                                return lescontenus.map((lc) => (
                                    <div key={lc.id}>

                                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div className='p-2 w-40'>
                                                <h5 className="mb-2 font-400 tracking-tight text-gray-900 dark:text-white">{lc.date}</h5>
                                            </div>
                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h5 className="text-xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{lc.titre}</h5>
                                                <p className="mb-3 font-normal text-sm dark:text-gray-400">
                                                    <span>{lc.description}</span>
                                                </p>
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