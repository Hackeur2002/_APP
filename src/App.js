import logo from './logo.svg';
import './App.css';
import Header from './default_pages/header/header';
import Footer from './default_pages/footer/footer';
import { Outlet } from 'react-router-dom';
import Newsletter from './default_pages/newsletter/Newsletter';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
