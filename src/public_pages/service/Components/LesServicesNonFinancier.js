import React from 'react';
import { ServicesList } from '../../../NoSQL';

function LesServicesNonFinancier(props) {
    return (
        <>
            <div className='max-xl:px-4 px-20 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
                <div className='mb-10'>
                    <span className='text-4xl font-bold'>SERVICES NON FINANCIERS</span>
                </div>
                <div className="max-md:flex max-md:flex-col grid grid-cols-4 gap-4">
                    {ServicesList.length <= 0 ? (<span>Aucun Services pour le moment</span>) :
                        ServicesList.map((re) => (
                            <div key={re.id}>
                                <div className="text-left max-md:w-full max-w-sm bg-transparent dark:bg-gray-800 dark:border-gray-700">
                                    <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-900 dark:text-white">{re.titre}</h5>
                                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                                    {re.subTitle.map((title)=>(
                                        <div key={title.id} className='p-3'>
                                            <ul className="max-w-md space-y-1 text-black list-inside dark:text-black pt-2">
                                                <li className="flex items-center">
                                                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                    </svg>
                                                    {title.titre}
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default LesServicesNonFinancier;