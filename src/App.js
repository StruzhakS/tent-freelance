import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from 'pages/HomePage';
import Header from 'components/header/Header';
import { useState } from 'react';
import BurgerMenu from 'components/burgerMenu/BurgerMenu';
import Footer from 'components/footer/Footer';
import UsedTents from 'pages/UsedTentsPage';
import PromotionsPage from 'pages/PromotionsPage';
import UsedTentsPage from 'pages/UsedTentsPage';
import VideoTutorialsPage from 'pages/VideoTutorialsPage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import AddAnnouncementPage from 'pages/AddAnnouncementPage';
import { useSelector } from 'react-redux';

function App() {
  const isAccessToken = useSelector(state => !!state.auth.email);

  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggleBurgerMenu={toggleBurgerMenu} />
      <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isOpen={isOpen} />

      <Routes>
        <Route path="/" element={<HomePage isAccessToken={isAccessToken} />} />
        <Route path="/used-tents" element={<UsedTents />} />
        <Route path="promotions" element={<PromotionsPage />} />
        <Route path="used-tents" element={<UsedTentsPage />} />
        <Route path="video-tips" element={<VideoTutorialsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="add-announcement" element={<AddAnnouncementPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
        {!isAccessToken && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </>
        )}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
