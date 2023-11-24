import React from 'react';
import logo from './Images/logo.png'

function footer() {
    return (
        <footer className="bg-green-950 dark:bg-gray-800">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <a href="/accueil" className="flex items-center justify-center mb-5">
                            <img src={logo} className="w-16 lg:w-80" alt="ADPME Logo" />
                        </a>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">A propos</h3>
                        <ul className="text-white dark:text-white">
                            <li className="mb-4">
                                <a href="/quisommesnous" className=" hover:underline">Qui sommes-nous ?</a>
                            </li>
                            <li className="mb-4">
                                <a href="/organigramme" className="hover:underline">Organigramme</a>
                            </li>
                            <li className="mb-4">
                                <a href="/motdg" className="hover:underline">Mot du Directeur Géneral</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Actualités</h3>
                        <ul className="text-white dark:text-white">
                            <li className="mb-4">
                                <a href="/event" className="hover:underline">Evènements</a>
                            </li>
                            <li className="mb-4">
                                <a href="/communique" className="hover:underline">Communiqué</a>
                            </li>
                            <li className="mb-4">
                                <a href="/projet" className="hover:underline">Projets</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Autres services</h3>
                        <ul className="text-white dark:text-white">
                            <li className="mb-4">
                                <a href="/aide" className="hover:underline">Qui peut m'aider ?</a>
                            </li>
                            <li className="mb-4">
                                <a href="/eservice" className="hover:underline">E-service</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Autres pages</h3>
                        <ul className="text-white dark:text-white">
                            <li className="mb-4">
                                <a href="/accueil" className="hover:underline">Accueil</a>
                            </li>
                            <li className="mb-4">
                                <a href="/guide" className="hover:underline">Guides</a>
                            </li>
                            <li className="mb-4">
                                <a href="/FAQ" className="hover:underline">FAQ</a>
                            </li>
                            <li className="mb-4">
                                <a href="/contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                    <div className="text-center">
                        
                        <span className="block text-sm text-center text-white dark:text-white">© 2022-2023 ADPME. Tout droits réservés.
                        </span>
                        <ul className="flex justify-center mt-5 space-x-5">
                            <li>
                                <a href="https://www.facebook.com/adpmebenin?mibextid=ViGcVu" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/adpme-benin/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256"
                                        style={{fill:"#737373"}}>
                                        <g fill="#737373" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: "normal"}}><g transform="scale(8.53333,8.53333)"><path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path></g></g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
    );
}

export default footer;