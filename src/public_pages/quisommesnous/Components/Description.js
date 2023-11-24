import React from 'react';
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Description() {
    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className='px-20 px-3 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5"><span className='text-amber-400'>1°</span> L'Agence de Développement des Petites et Moyennes Entreprises en quelques mots</span>
                    </h3>
                    <p className='text-justify py-5 leading-7'>
                        En janvier 2020, le Bénin a voté la Loi pour la Promotion et le Développement des MPME (Micros Petites et Moyennes Entreprises) et MPMI (Micro, Petites et Moyennes Industries), avec pour objectif de :
                        <ul class="ml-5 max-w-md space-y-1 text-black list-disc list-inside dark:text-black">
                            <li>
                                créer un cadre juridique, institutionnel et financier propice au développement de l'entrepreneuriat au Bénin et ;
                            </li>
                            <li>
                                d’établir un régime spécifique des aides de l'État et des collectivités territoriales en faveur des entreprises pour tenir compte de leur spécificité et de leur vulnérabilité face à la concurrence régionale et internationale.
                            </li>
                            <li>
                                Inclusion of at least one special character, e.g., ! @ # ?
                            </li>
                        </ul>
                        C’est ainsi qu’à la suite du Conseil des Ministres du 23 mars 2022, le gouvernement a acté la création de l’Agence de Développement des Petites et Moyennes Entreprises (ADPME) en tant que guichet unique et a, par la même occasion, dissout toutes les autres structures publiques d’appui à l’entrepreneuriat.

                    </p>
                    <p className='text-justify py-5 leading-7'>
                        A la suite de sa création, la doctrine globale d’intervention de l’ADPME a été validée en Conseil des Ministres du 3 Mai 2023. L’Agence a alors initié sa structuration organisationnelle et entre maintenant dans la phase de déploiement de ses activités opérationnelles. Elle devra par conséquent créer et mettre en place son identité visuelle qui sera la référence de tous ses supports de communication de même que son site vitrine. Son identité doit être composée de l’ensemble des éléments graphiques qui non seulement reflètent la mission et la vision mais également permettent d’affirmer et d’identifier visuellement l’Agence.
                        Le présent cahier des charges est élaboré pour servir d’outil opérationnel de conduite et de réalisation du site internet de l’ADPME.

                    </p>
                </div>
                {/* Vision */}
                <div className='px-20 px-3 mx-auto max-w-screen-xl text-center py-12 lg:py-10 sm:py-10'>
                    
                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5"><span className='text-amber-400'>2°</span> Notre Vision</span>

                    </h3>
                    
                    <p className='text-justify py-5 leading-7'>
                        L'ADPME aspire à devenir le moteur du développement économique au Bénin en favorisant l'émergence et la croissance des Micros, Petites et Moyennes Entreprises (MPME). Sa vision s'articule autour de la création d'un environnement propice à l'entrepreneuriat, à l'innovation, et à la compétitivité des entreprises locales sur les marchés nationaux, sous-régionaux, et internationaux.
                    </p>
                </div>
                {/* Mission */}
                <div className='px-20 px-3 mx-auto max-w-screen-xl text-center py-12 lg:py-10 sm:py-10'>
                    
                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5"><span className='text-amber-400'>3°</span> Nos Missions</span>

                    </h3>
                    
                    <p className='text-justify py-5 leading-7'>
                        Explorons maintenant en détail la mission ambitieuse qui guide l'ADPME dans son rôle essentiel pour le développement durable des MPME au Bénin.
                    </p>
                    <p className='text-left leading-7'>
                        <ol class="space-y-4 text-black list-decimal list-inside dark:text-black ml-5">
                            <li>
                                <span className='font-bold'>Guichet Unique et Coordination :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Accueillir, informer et orienter les MPME vers les dispositifs d'appui existants.</li>
                                    <li>Coordonner et mettre en cohérence les interventions en faveur des MPME béninoises.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Régulation et Agrément :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Instruire et agréer au régime des MPME, assurant ainsi une régulation adaptée à leurs spécificités.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Soutien à la Compétitivité :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Appuyer la compétitivité des MPME à l'échelle locale, sous-régionale et internationale.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Mise à Niveau des Entreprises :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Identifier et appuyer la mise à niveau des MPME, favorisant ainsi leur développement continu.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Identification des Entreprises Stratégiques :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Identifier et accompagner les entreprises stratégiques et/ou à fort potentiel de croissance.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Accès aux Financements et aux Marchés :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Faciliter l'accès des MPME aux financements et aux marchés, renforçant leur viabilité économique.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Promotion de Produits Financiers Innovants :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Promouvoir des produits financiers innovants et adaptés aux besoins spécifiques des MPME.</li>
                                </ul>
                            </li>
                        </ol>
                    </p>
                </div>
                {/* Valeur */}
                <div className='px-20 px-3 mx-auto max-w-screen-xl text-center py-12 lg:py-10 sm:py-10'>

                    <h3 className="text-left pb-5">
                        <span className="text-3xl font-bold dark:text-white mr-5"><span className='text-amber-400'>4°</span> Nos Valeurs</span>

                    </h3>

                    <p className='text-justify py-5 leading-7'>
                        Au cœur de toute entreprise visionnaire réside un ensemble de valeurs fondamentales qui guident ses actions, nourrissent son identité, et définissent son impact sur la communauté qu'elle sert. L'Agence de Développement des Petites et Moyennes Entreprises (ADPME) du Bénin incarne cette essence, façonnant son parcours vers l'excellence en s'appuyant sur des principes profondément enracinés.
                    </p>
                    <p className='text-justify py-5 leading-7'>
                        Au cœur de toute entreprise visionnaire réside un ensemble de valeurs fondamentales qui guident ses actions, nourrissent son identité, et définissent son impact sur la communauté qu'elle sert. L'Agence de Développement des Petites et Moyennes Entreprises (ADPME) du Bénin incarne cette essence, façonnant son parcours vers l'excellence en s'appuyant sur des principes profondément enracinés.
                    </p>
                    <p className='text-left leading-7'>
                        <ol class="space-y-4 text-black list-decimal list-inside dark:text-black ml-5">
                            <li>
                                <span className='font-bold'>Engagement :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>S'engager envers le développement durable des MPME et de l'économie nationale.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Transparence :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Agir de manière transparente dans toutes les interactions avec les entreprises et les partenaires.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Innovation :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Encourager l'innovation comme moteur de croissance pour les MPME.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Collaboration :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Favoriser la collaboration entre les acteurs du secteur public et privé pour maximiser l'impact.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Équité :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Promouvoir l'équité et l'inclusion dans l'accès aux ressources et aux opportunités.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-bold'>Responsabilité :</span>
                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    <li>Assumer la responsabilité sociale et économique envers la communauté et les entreprises soutenues.</li>
                                </ul>
                            </li>
                        </ol>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Description;