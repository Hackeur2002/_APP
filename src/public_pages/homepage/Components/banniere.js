import React from 'react';
import banIm from '../Images/conference.jpg';
import { Carousel } from 'flowbite-react';

function banniere() {
    return (
        <section className="bg-cover bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl animate-fade-right animate-once animate-duration-1000 animate-delay-300">ENTREPRENDRE AU <span className="text-amber-500 dark:text-amber-500">BENIN</span></h1>
                <h3 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl animate-fade-left animate-once animate-duration-1000 animate-delay-300">PLUS SIMPLE QUAND ON EST <span className="text-amber-500 dark:text-amber-500">BIEN GUIDÉ</span></h3>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 animate-flip-down animate-once animate-duration-1000 animate-delay-300">A l'ADPME, tout indépendant, commerçant ou entrepreneur béninois peut obtenir gratuitement une réponse à toutes ses questions entrepreneuriales.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 animate-flip-up animate-once animate-duration-1000 animate-delay-300">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-500 hover:bg-amber-300 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900">
                        Consulter les guides
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="/aide" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Qui peut m'aider ?
                    </a>  
                </div>
            </div>
        </section>

    );
}

export default banniere;