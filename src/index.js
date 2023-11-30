import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, useParams } from "react-router-dom";
import Homepage from './public_pages/homepage/homepage';
import Quisommesnous from './public_pages/quisommesnous/Quisommesnous';
import Organigramme from './public_pages/organigramme/Organigramme';
import FAQ from './public_pages/faq/FAQ';
import Contact from './public_pages/contact/Contact';
import Evenement from './public_pages/evenement/Evenement';
import MotDG from './public_pages/motDG/MotDG';
import Aide from './public_pages/aide/Aide';
import Projet from './public_pages/projet/Projet';
import Communique from './public_pages/communique/Communique';
import EService from './public_pages/eService/EService';
import Guide from './public_pages/guide/Guide';
import EvenementSelect from './public_pages/evenement/evenementSelect/EvenementSelect';
import ProjetSelect from './public_pages/projet/projetSelect/ProjetSelect';
import Recrutement from './public_pages/recrutement/Recrutement';
import RecrutementSelect from './public_pages/recrutement/recrutementSelect/RecrutementSelect';
import Service from './public_pages/service/Service';

const EventCode = () => {
  const { idEvent } = useParams();
  return <EvenementSelect name={idEvent} />;
};
const ProjetCode = () => {
  const { idProjet } = useParams();
  return <ProjetSelect name={idProjet} />;
};
const RecrutementCode = () => {
  const { idRecru } = useParams();
  return <RecrutementSelect name={idRecru} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route exact path="accueil" element={<Homepage />} />
        <Route exact path="quisommesnous" element={<Quisommesnous />} />
        <Route exact path="organigramme" element={<Organigramme />} />
        <Route exact path="FAQ" element={<FAQ />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="event" element={<Evenement />} />
        <Route exact path="motdg" element={<MotDG />} />
        <Route exact path="aide" element={<Aide />} />
        <Route exact path="projet" element={<Projet />} />
        <Route exact path="communique" element={<Communique />} />
        <Route exact path="eservice" element={<EService />} />
        <Route exact path="guide" element={<Guide />} />
        <Route exact path="recrutement" element={<Recrutement />} />
        <Route exact path="service" element={<Service />} />
        <Route path="details-evenement/:idEvent" element={<EventCode />} />
        <Route path="details-projets/:idProjet" element={<ProjetCode />} />
        <Route path="details-recrutement/:idRecru" element={<RecrutementCode />} />
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
