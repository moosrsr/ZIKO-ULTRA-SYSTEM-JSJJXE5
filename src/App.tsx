// src/App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AppContextProvider from './context/AppContext';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="content-wrapper">
            <Sidebar />
            <MainContent />
          </div>
          <Footer />
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
