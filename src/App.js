import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from 'pages/HomePage';
import Header from 'components/header/Header';
import { useState } from 'react';
import BurgerMenu from 'components/burgerMenu/BurgerMenu';
import Footer from 'components/footer/Footer';
import UsedTents from 'pages/UsedTentsPage';
import UsedTentsPage from 'pages/UsedTentsPage';
import VideoTutorialsPage from 'pages/VideoTutorialsPage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import AddAnnouncementPage from 'pages/AddAnnouncementPage';
import { useSelector } from 'react-redux';
import { isMobile } from 'constants/useMediaQueries';
import PromotionPage from 'pages/PromotionsPage';
import AllPromotions from 'pages/AllPromotions';
import MyAnnouncement from 'components/myAnnouncement/MyAnnouncement';

function App() {
  const mobileScreen = isMobile();

  const isAccessToken = useSelector(state => !!state.auth.email);

  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggleBurgerMenu={toggleBurgerMenu} isOpen={isOpen} />
      {mobileScreen && (
        <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isOpen={isOpen} />
      )}
      <Routes>
        <Route path="/" element={<HomePage isAccessToken={isAccessToken} />} />
        <Route path="/used-tents" element={<UsedTents />} />
        <Route path="/promotions" element={<AllPromotions />} />
        <Route path="promotions/:id" element={<PromotionPage />} />
        <Route path="used-tents" element={<UsedTentsPage />} />
        <Route path="video-tips" element={<VideoTutorialsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="add-announcement" element={<AddAnnouncementPage />} />
        MyAnnouncement
        <Route path="my-tents" element={<MyAnnouncement />} />
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
