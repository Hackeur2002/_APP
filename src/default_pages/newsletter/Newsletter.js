import React from 'react';
import news from './amazone.jpg'
import news2 from './amazone2.jpg'

function Newsletter(props) {
    return (
        <section className="bg-cover bg-center bg-no-repeat bg-gray-200 bg-blend-multiply max-md:h-auto max-md:w-full" style={{ backgroundImage: `url(${news2})` }}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Inscrivez-vous à notre newsletter</h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl dark:text-white">Restez informé de l'avancement des évènements, des projets, des annonces, n'hésitez pas à vous inscrire avec votre e-mail.</p>
                    <form action="#">
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label for="email" className="hidden mb-2 text-sm font-medium text-white dark:text-white">Entrer votre Email</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input className="block p-3 pl-10 w-full text-sm text-black bg-whiterounded-lg border border-white sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-white dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrer votre email" type="email" id="email" required="" />
                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-amber-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-amber-800 focus:ring-4 focus:ring-primary-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-primary-800">S'abonner</button>
                            </div>
                        </div>
                        <div className="mx-auto max-w-screen-sm text-sm text-left text-white newsletter-form-footer dark:text-white">Abonnez-vous pour être informé.</div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;