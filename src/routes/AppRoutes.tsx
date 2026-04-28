// src/routes/AppRoutes.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Modal from '../components/Modal';
import { AppProvider } from '../context/AppContext';

const AppRoutes: React.FC = () => {
    return (
        <AppProvider>
            <Router>
                <Header />
                <div className="app-layout">
                    <Sidebar />
                    <main>
                        <Switch>
                            <Route path="/" exact component={MainContent} />
                            {/* يمكن إضافة المزيد من المسارات هنا */}
                        </Switch>
                    </main>
                </div>
                <Footer />
                <Modal />
            </Router>
        </AppProvider>
    );
};

export default AppRoutes;
