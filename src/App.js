import logo from './logo.svg';
import './App.css';
import Header from './default_pages/header/header';
import Footer from './default_pages/footer/footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
