import React from 'react';
import logo from './Images/logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Avatar from '@mui/material/Avatar';
import { Dropdown } from 'flowbite-react';
import Drop from './Images/down-arrow.png';

function header() {
    
    return (
        
        <header className="fixed w-full z-50">
            <div className='bg-gray-100 w-full py-2'>
                <center>
                    <div style={{ width: '80%', display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                            <Link className='navIcone mr-3' style={{ textDecoration: 'none' }} to="https://x.com/AdefInfobenin?s=09"><TwitterIcon /></Link>
                            <Link className='navIcone mr-3' style={{ textDecoration: 'none' }} to="https://www.facebook.com/profile.php?id=61550684836054&mibextid=ZbWKwL"><FacebookIcon /></Link>
                            <Link className='navIcone mr-3' style={{ textDecoration: 'none' }} to="https://instagram.com/adefbenin?igshid=bGZnbzVoZTVvaW5k"><InstagramIcon /></Link>
                        </div>
                        <div style={{ width: '80%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <Avatar><LocalPhoneIcon /></Avatar>
                            &nbsp;&nbsp;&nbsp;
                            <span>
                                00229 98 79 70 70
                            </span>
                        </div>

                    </div>
                </center>
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