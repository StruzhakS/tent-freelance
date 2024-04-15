import { Routes, Route } from 'react-router-dom';

// Layouts
// import MainLayout from './layouts/mainLayout/MainLayout';
// import LoginLayout from './layouts/loginLayout/LoginLayout';

// Pages
// import {
//   AccountPage,
//   ClientsPage,
//   DevicesPage,
//   Home,
//   KeysPage,
//   Login,
//   SystemPage,
// } from './pages';
import './App.css';
// import { useSelector } from 'react-redux';
import HomePage from 'pages/home/HomePage';
import Header from 'components/header/Header';
import { useState } from 'react';
import BurgerMenu from 'components/burgerMenu/BurgerMenu';

function App() {
  // const isAccessToken = useSelector(state => state.auth.accessToken);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggleBurgerMenu={toggleBurgerMenu} />
      <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isOpen={isOpen} />
      <Routes>
        {/* {isAccessToken ? ( */}
        <Route path="/" element={<HomePage />}>
          {/* <Route path="key" element={<KeysPage />} />
          <Route path="key/:params" element={<KeysPage />} />
          <Route path="devices_list" element={<DevicesPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="system" element={<SystemPage />} /> */}

          {/* <Route path="*" element={<Home />} /> */}
        </Route>
        {/* ) : */}
        {/* (
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      )} */}
      </Routes>
    </>
  );
}

export default App;
