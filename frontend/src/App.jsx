import React from 'react';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

export default function App()
{
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element = { <HomePage /> } />
        <Route path = '/info' element = { <InfoPage /> } />
        <Route path = '/form' element = { <FormPage /> } />
        <Route path = '/dashboard' element = { <Dashboard /> } />
      </Routes>
      <Footer />
    </Router>
  )
}