import React from 'react';
import { Carousel } from 'flowbite-react';
import homepage from '../Images/homepage4-min.jpg'

function banniere() {
    return (
        <section className="bg-cover bg-center bg-no-repeat bg-gray-200 bg-blend-multiply max-md:h-auto max-md:w-full" style={{backgroundImage: `url(${homepage})`, height:'10%'}}>
            <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-46">
                <h1 className="max-md:text-4xl tracking-widest mb-4 text-2xl font-extrabold leading-none text-white md:text-2xl lg:text-4xl animate-fade-right animate-once animate-duration-1000 animate-delay-300">ENTREPRENDRE AU <span className="text-amber-500 dark:text-amber-500">BENIN</span></h1>
                <h3 className="max-md:text-4xl mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-2xl lg:text-4xl animate-fade-left animate-once animate-duration-1000 animate-delay-300">PLUS SIMPLE QUAND ON EST <span className="text-amber-500 dark:text-amber-500">BIEN GUIDÉ</span></h3>
                <p className="max-md:w-full tracking-wider mb-8 w-1/2 text-lg font-normal text-white lg:text-xl animate-flip-down animate-once animate-duration-1000 animate-delay-300">
                    Le guichet unique de promotion des Petites et Moyennes Entreprises et des Petites et Moyennes Industries au Bénin.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 animate-flip-up animate-once animate-duration-1000 animate-delay-300">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-l-lg rounded-tr-lg border-amber-700 bg-amber-500 hover:bg-amber-300 hover:border-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900 border-b-4">
                        Consulter les guides
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="/aide" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-l-lg rounded-tr-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Qui peut m'aider ?
                    </a>  
                </div>
            </div>
        </section>

    );
}

export default banniere;