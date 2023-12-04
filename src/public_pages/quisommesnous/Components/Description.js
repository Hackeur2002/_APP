import React from 'react';
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import pres1 from '../Images/presentation1.png'
import pres2 from '../Images/presentation2.png'
import vis1 from '../Images/vision.png'
import vis2 from '../Images/vision1.png'
import val from '../Images/valeur.png'
import amb from '../Images/ambition.png'
import priorite from '../Images/priorite.png'

function Description() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-linear font-light text-black sm:text-lg dark:text-black">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">PRESENTATION DE L’ADPME</h2>
                        <p className="mb-4">
                            L'Agence de Développement des Petites et Moyennes Entreprises
                            a pour vocation <span className='text-amber-500 font-bold'>de fédérer et de mettre en cohérence
                            l'ensemble des interventions publiques en appui aux MPME
                            avec une offre intégrée d'accompagnement, d'orientation et de financement des MPME</span>.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div>
                            {/* <img className="w-full rounded-lg" src={pres1} alt="office content 1" /> */}
                        </div>
                        <img className="animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-linear mt-4 w-full lg:mt-10 rounded-lg" src={pres2} alt="office content 2"/>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div style={{width:'50%'}}>
                        <img className="animate-pulse animate-infinite animate-duration-1000 animate-delay-300 animate-ease-linear mt-4 w-full lg:mt-10 rounded-lg" src={vis2} alt="office content 2" />
                    </div>
                    <div className="font-light text-black sm:text-lg dark:text-black">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">NOTRE VISION</h2>
                        <p className="mb-4">
                            A l’horizon 2030, les micros, petites et moyennes entreprises béninoises sont compétitives, émergent et impulsent la transformation structurelle de l’économie, offrant une prospérité durable dans tout le Bénin.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-black sm:text-lg dark:text-black">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">NOS MISSIONS</h2>
                        <p className="mb-4">
                            Contribuer à la promotion et au développement des micros, petites et moyennes entreprises du Bénin à travers l'orientation, l'accompagnement, le financement et la facilitation de l'accès aux marchés.
                            <br />A ce titre, elle est chargée de :
                        </p>
                        <p className="mb-4">
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div>
                                    <ul className="max-w-md space-y-1 text-black list-inside dark:text-black">
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            accueillir, informer et orienter les micros, petites et moyennes entreprises vers les différents dispositifs d’appuis existants ;
                                        </li>
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            instruire et agréer au régime de micros, petites et moyennes entreprises ;
                                        </li>
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            aider les micros, petites et moyennes entreprises à saisir les opportunités au niveau local, sous-régional et international ;
                                        </li>
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            conseiller, encadrer et appuyer le développement des micros, petites et moyennes entreprises ;
                                        </li>
                                    </ul>
                                </div>


                                <div>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        identifier et accompagner les entreprises stratégiques ou à fort potentiel de croissance ;
                                    </li>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        faciliter l’accès des micros, petites et moyennes entreprises au financement et aux marchés ;
                                    </li>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        promouvoir des outils et produits financiers innovants et adaptés aux besoins des micros, petites et moyennes entreprises ;
                                    </li>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        aider à la restructuration et à la mise à niveau des entreprises en difficulté.
                                    </li>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div style={{ width: '50%' }}>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg animate-pulse animate-infinite animate-duration-1000 animate-delay-300 animate-ease-linear" src={vis1} alt="office content 2" />
                    </div>
                    
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div style={{ width: '50%' }}>
                        <img className="animate-pulse animate-infinite animate-duration-1000 animate-delay-300 animate-ease-linear mt-4 w-full lg:mt-10 rounded-lg" src={val} alt="office content 2" />
                    </div>
                    <div className="font-light text-black sm:text-lg dark:text-black">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">NOS VALEURS</h2>
                        <p className="mb-4">
                            <div className='grid grid-cols-2 gap-4 mt-8'>
                                <ul className="max-w-md space-y-1 text-black list-inside dark:text-black">
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Professionnalisme
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Intégrité
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Excellence
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Ecoute
                                    </li>
                                </ul>
                                <ul className="max-w-md space-y-1 text-black list-inside dark:text-black">
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Proximité
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Equité
                                    </li>
                                </ul>
                            </div>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    
                    <div className="font-light text-black sm:text-lg dark:text-black">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">NOS AMBITIONS</h2>
                        <p className="mb-4">
                            L'ADPME ambitionne de :
                        </p>
                        <p className="mb-4">
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div>
                                    <ul className="max-w-md space-y-1 text-black list-inside dark:text-black">
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Contribuer à l’émergence d’une masse critique de petites et moyennes entreprises transformatrices des matières premières locales ; 
                                        </li>
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Accélérer l’essor d’un écosystème béninois d’entreprises technologiques et de start-up innovantes ; 
                                        </li>
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Garantir l’égalité d’accès aux offres de soutien et de développement de l’entrepreneuriat dans toutes les Communes du Bénin notamment celles qui sont les plus fragiles ; 
                                        </li>
                                        <li className="flex items-center border-b-2">
                                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Contribuer à la mise à niveau et au redressement des entreprises en difficulté ;
                                        </li>
                                    </ul>
                                </div>


                                <div>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Apporter un soutien décisif aux secteurs stratégiques ou prioritaires (tourisme, artisanat, agroalimentaire, numérique, etc.) ainsi qu’aux entreprises à forte croissance ; 
                                    </li>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Faire émerger des champions nationaux capables de contribuer au renforcement de la résilience de l’économie béninoise ; 
                                    </li>
                                    <li className="flex items-center border-b-2">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Accroître la mobilisation des capitaux et favoriser le changement d’échelle du financement des micros, petites et moyennes entreprises béninoises.
                                    </li>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div style={{ width: '50%' }}>
                        <img className="animate-pulse animate-infinite animate-duration-1000 animate-delay-300 animate-ease-linear mt-4 w-full lg:mt-10 rounded-lg" src={amb} alt="office content 2" />
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div style={{ width: '50%' }}>
                        <img className="animate-pulse animate-infinite animate-duration-1000 animate-delay-300 animate-ease-linear mt-4 w-full lg:mt-10 rounded-lg" src={priorite} alt="office content 2" />
                    </div>
                    <div className="font-light text-black sm:text-lg dark:text-black">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">NOS PRIORITES</h2>
                        <p className="mb-4">
                            <div className='mt-8'>
                                <ul className="max-w-md space-y-1 text-black list-inside dark:text-black">
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Promouvoir l’entrepreneuriat et l’innovation
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Développer la productivité et la compétitivité
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Faciliter l’accès au financement
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        Renforcer les compétences des dirigeants de MPME
                                    </li>
                                </ul>
                            </div>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Description;