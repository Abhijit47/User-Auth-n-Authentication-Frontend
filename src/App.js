import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';

import Homepage from './pages/homepage/Homepage';
import SignInSide from './pages/signIn/SignIn';
import SignUp from './pages/signup/SignUp';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import ResetPassword from './pages/resetpassword/ResetPassword';

const App = () => {
  const [login, setLogin] = useState(localStorage.getItem('jwt'));

  return (
    <>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<Homepage login={login} setLogin={setLogin} />} />
        <Route path='/login' element={<SignInSide setLogin={setLogin} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
};

export default App

