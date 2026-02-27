import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import WhatPage from './pages/What';
import WhyPage from './pages/Why';
import WhoPage from './pages/Who';
import GamePage from './pages/Game';
import Questionnaire from './pages/Questionnaire';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import IntroPage from './pages/Intro';
import Schedule from './pages/Schedule';
import Loading from './pages/app/Loading';
import AppLayout from './pages/app/AppLayout';
import AppHome from './pages/app/AppHome';
import AppQuestions from './pages/app/AppQuestions';
import AppGame from './pages/app/AppGame';
import AppProfile from './pages/app/AppProfile';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const hideLayout = ['/questionnaire', '/signup', '/signin', '/intro', '/loading', '/schedule'].includes(location.pathname) || location.pathname.startsWith('/app');

  return (
    <div className="App">
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<WhatPage />} />
        <Route path="/why" element={<WhyPage />} />
        <Route path="/who" element={<WhoPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/schedule" element={<Schedule />} />

        {/* Internal App Routes */}
        <Route path="/loading" element={<Loading />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="home" element={<AppHome />} />
          <Route path="questions" element={<AppQuestions />} />
          <Route path="game" element={<AppGame />} />
          <Route path="profile" element={<AppProfile />} />
        </Route>
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
