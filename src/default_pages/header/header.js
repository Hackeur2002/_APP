import React, { useState } from 'react';
import logo from './Images/logo.png';
import { Dropdown } from 'flowbite-react';
import Drop from './Images/down-arrow.png';
import DropBlack from './Images/down-arrow-black.png'
import tel from './Images/telephone.png'
import mail from './Images/email.png'
import loc from './Images/broche-de-localisation.png'
import {Modal} from 'flowbite-react'

function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement, setModalPlacement] = useState('center')
    const emailAddress = 'contact@adpme.bj';

    const handleEmailLinkClick = () => {
        // // Construire l'URL de l'email avec le destinataire prérempli
        // const emailUrl = `mailto:${emailAddress}`;

        // // Ouvrir l'URL dans une nouvelle fenêtre ou un nouvel onglet
        // window.open(emailUrl, '_blank');
    };
    return (

        <header className="sticky top-0 w-full z-50">
            <Modal show={openModal} size="5xl" popup onClose={() => setOpenModal(false)} position={modalPlacement}>
                <Modal.Header>Menu</Modal.Header>
                <Modal.Body>
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0 space-y-6">
                            <li>
                                <a href="/quisommesnous" className="text-black hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">A propos</a>
                            </li>
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-black rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black dark:focus:text-black dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-black cursor-pointer' style={{ display: 'flex', flexDirection: 'row' }}>Actualités<img style={{color:'black'}} className='h-5 w-5' src={DropBlack} /></span>} inline>
                                    <Dropdown.Item as="a" href="/event" className='hover:bg-gray-100 lg:hover:text-amber-400'>Evènements</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/communique" className='hover:bg-gray-100 lg:hover:text-amber-400'>Communiqués</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/projet" className='hover:bg-gray-100 lg:hover:text-amber-400'>Projets</Dropdown.Item>
                                </Dropdown>

                            </li>
                            <li>
                                <a href="/guide" className="text-black hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Guides</a>
                            </li>
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-black rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black dark:focus:text-black dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-black cursor-pointer' style={{ display: 'flex', flexDirection: 'row' }}>Services<img style={{color:'black'}} className='h-5 w-5' src={DropBlack} /></span>} inline>
                                    {/* <Dropdown.Item as="a" href="/aide" className='hover:bg-gray-100 lg:hover:text-amber-400'>Besoin d'aide ?</Dropdown.Item> */}
                                    <Dropdown.Item as="a" href="/eservice" className='hover:bg-gray-100 lg:hover:text-amber-400'>E-services</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/service" className='hover:bg-gray-100 lg:hover:text-amber-400'>Autres services</Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li>
                                <a href="/recrutement" className="text-black hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Opportunités</a>
                            </li>
                            <li>
                                <a href="/FAQ" className="text-black hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">FAQs</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-black hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
            <div className='flex justify-end lg:bg-gray-50 lg:w-full lg:py-2 lg:block max-sm:hidden max-xl:hidden'>
                <div>
                    <ul className="flex w-100 justify-center space-x-3">
                        <li>
                            <a target='_blank' href="https://www.facebook.com/adpmebenin?mibextid=ViGcVu" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.linkedin.com/company/adpme-benin/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256"
                                    style={{ fill: "#737373" }}>
                                    <g fill="#737373" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" style={{ mixBlendMode: "normal" }}><g transform="scale(8.53333,8.53333)"><path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path></g></g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.youtube.com/@adpmebenin" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5 hover:text-text-gray-900" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16" style={{ fill: "#737373" }}>
                                    <path d="M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113281 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113281 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363281 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863281 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863281 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z"></path>
                                </svg>
                            </a>
                        </li>
                        
                        &nbsp;&nbsp;&nbsp;  |
                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={tel} alt='telephone' />&nbsp;
                                    <span className='text-sm'>: +229 56 46 01 30</span>
                                </div>
                            </a>
                        </li>
                        &nbsp;&nbsp;&nbsp;

                        <li>
                            <a href="#" onClick={handleEmailLinkClick} className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={mail} alt='mail' />&nbsp;
                                    <span className='text-sm'>: {emailAddress}</span>
                                </div>
                            </a>
                        </li>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={loc} alt='localisation' />&nbsp;
                                    <span className='text-sm'>: Immeuble R+5 C/1184 Cadjèhoun 01 BP 8432 Cotonou</span>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <nav className="bg-green-950 border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="/accueil" className="flex items-center">
                        <img src={logo} className="w-16 md:w-32 lg:w-80 max-md:w-64" alt="ADPME Logo" />
                    </a>
                    <div className="flex items-center lg:order-2" onClick={() => setOpenModal(true)}>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">
                            <li>
                                <a href="/quisommesnous" className="text-white hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">A propos</a>
                            </li>
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-white cursor-pointer' style={{ display: 'flex', flexDirection: 'row' }}>Actualités<img src={Drop} /></span>} inline>
                                    <Dropdown.Item as="a" href="/event" className='hover:bg-gray-100 lg:hover:text-amber-400'>Evènements</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/communique" className='hover:bg-gray-100 lg:hover:text-amber-400'>Communiqués</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/projet" className='hover:bg-gray-100 lg:hover:text-amber-400'>Projets</Dropdown.Item>
                                </Dropdown>

                            </li>
                            <li>
                                <a href="/guide" className="text-white hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Guides</a>
                            </li>
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-white cursor-pointer' style={{ display: 'flex', flexDirection: 'row' }}>Services<img src={Drop} /></span>} inline>
                                    {/* <Dropdown.Item as="a" href="/aide" className='hover:bg-gray-100 lg:hover:text-amber-400'>Besoin d'aide ?</Dropdown.Item> */}
                                    <Dropdown.Item as="a" href="/eservice" className='hover:bg-gray-100 lg:hover:text-amber-400'>E-services</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/service" className='hover:bg-gray-100 lg:hover:text-amber-400'>Autres services</Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li>
                                <a href="/recrutement" className="text-white hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Opportunités</a>
                            </li>
                            <li>
                                <a href="/FAQ" className="text-white hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">FAQs</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;