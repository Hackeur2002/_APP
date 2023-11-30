import React from 'react';

function LesServicesFinancier(props) {
    return (
        <>
            <div className='max-xl:px-14 px-20 pb-10 mx-auto max-w-screen-xl text-left'>
                <div className='mb-10'>
                    <span className='text-4xl font-bold'>SERVICES FINANCIERS</span>
                </div>
                <div>
                    <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>
                            <span className='mb-2 text-2sm font-bold tracking-tight text-gray-900 dark:text-white'>Subvention</span>
                            <ul className="max-w-md space-y-1 text-black list-inside dark:text-black pt-2 pl-3">
                                <li className="flex items-center pt-3">
                                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Bonification des prêts
                                </li>
                                <li className="flex items-center pt-3">
                                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Partage des risques (couverture, cofinancement)
                                </li>
                                <li className="flex items-center pt-3 pb-3">
                                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Etc.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className='mb-2 text-2sm font-bold tracking-tight text-gray-900 dark:text-white'>Facilité d’accès au financement des MPME</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default LesServicesFinancier;