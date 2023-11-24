import React from 'react';

function guide(props) {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 bg-gray-100">
                <div className='px-3 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5">Guide</span>
                        <a href="/guide" className="hover:underline">
                            <span className='text-black-500 dark:text-gray-400'>voir tout</span>
                        </a>
                    </h3>
                    <div className="grid grid-cols-4 gap-4 text-left">
                        <div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Avant de démarrer une entreprise</span>
                            </a>
                        </div>
                        <div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Démarrer une entreprise & formalités</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Développer son entreprise et exporter</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Transmettre, rebondir ou arrêter l'entreprise</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Entreprendre durablement</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Subsides pour entrepreneurs</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Financement de l'entreprise</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Gestion & Stratégies</span>
                            </a>
                        </div><div className='p-3 w-auto'>
                            <a href="#" className="hover:underline">
                                <span className='text-black-500 dark:text-gray-400'>Digitalisation</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default guide;