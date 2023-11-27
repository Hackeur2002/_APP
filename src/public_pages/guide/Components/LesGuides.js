import React from 'react';
import fond from '../Images/fond.png'

function LesGuides(props) {
    return (
        <div className='max-xl:px-14 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
            <div className="text-left max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <img className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" src={fond} />
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Guide des fondateurs pour la levée de fonds au Bénin
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Accédez à ce guide pour en savoir plus...
                </p>
                <a target='_blank' href="./pdf/Guide_des_fondateurs_pour_la_levee_de_fonds_au_Benin.pdf" className="inline-flex items-center text-blue-600 hover:underline">
                    Voir notre guides
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default LesGuides;