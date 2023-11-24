import React from 'react';
import logo from './Images/logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Avatar from '@mui/material/Avatar';
import { Dropdown } from 'flowbite-react';
import Drop from './Images/down-arrow.png';
import tel from './Images/telephone.png'
import mail from './Images/email.png'
import loc from './Images/broche-de-localisation.png'

function header() {
    
    return (
        
        <header className="sticky top-0 w-full z-50">
            <div className='flex justify-end lg:bg-gray-50 lg:w-full lg:py-2 lg:block sm:hidden'>
                <div>
                    <ul className="flex w-100 justify-center space-x-3">
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256"
                                    style={{ fill: "#737373" }}>
                                    <g fill="#737373" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{ mixBlendMode: "normal" }}><g transform="scale(8.53333,8.53333)"><path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path></g></g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                        </li>
                        &nbsp;&nbsp;&nbsp;  |
                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={tel} />&nbsp;
                                    <span className='text-sm'>: +229 56 46 01 30</span>
                                </div>
                            </a>
                        </li>
                        &nbsp;&nbsp;&nbsp;

                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={mail} />&nbsp;
                                    <span className='text-sm'>: contact@adpme.bj</span>
                                </div>
                            </a>
                        </li>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <div className='inline-flex'>
                                    <img className="w-5 h-5" src={loc} />&nbsp;
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
                        <img src={logo} className="w-16 md:w-32 lg:w-64" alt="ADPME Logo" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-white cursor-pointer' style={{display:'flex', flexDirection:'row'}}>A propos<img src={Drop} /></span>} inline>
                                    <Dropdown.Item as="a" href="/quisommesnous" className='hover:bg-gray-100 lg:hover:text-amber-400'>Qui sommes nous ?</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/organigramme" className='hover:bg-gray-100 lg:hover:text-amber-400'>Organigramme</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/motdg" className='hover:bg-gray-100 lg:hover:text-amber-400'>Mot du DG</Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-white cursor-pointer' style={{display:'flex', flexDirection:'row'}}>Actualités<img src={Drop} /></span>} inline>
                                    <Dropdown.Item as="a" href="/event" className='hover:bg-gray-100 lg:hover:text-amber-400'>Evènements</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/communique" className='hover:bg-gray-100 lg:hover:text-amber-400'>Communiqué</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/projet" className='hover:bg-gray-100 lg:hover:text-amber-400'>Projets</Dropdown.Item>
                                </Dropdown>
                                
                            </li>
                            <li>
                                <a href="/guide" className="text-white hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-amber-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Guides</a>
                            </li>
                            <li>
                                <Dropdown className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700" label="" dismissOnClick={false} renderTrigger={() => <span className='text-white cursor-pointer' style={{display:'flex', flexDirection:'row'}}>Autres services<img src={Drop} /></span>} inline>
                                    <Dropdown.Item as="a" href="/aide" className='hover:bg-gray-100 lg:hover:text-amber-400'>Qui peut m'aider ?</Dropdown.Item>
                                    <Dropdown.Item as="a" href="/eservice" className='hover:bg-gray-100 lg:hover:text-amber-400'>E-service</Dropdown.Item>
                                </Dropdown>
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

export default header;