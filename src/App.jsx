import './App.css';
import NotFound from './components/NotFound/NotFound';
import Anunciantes from './pages/Anunciantes/Anunciantes';
import Constraction from './pages/Constraction/Constraction';
import HomeBanner from './pages/HomeBanner/HomeBanner';
//import Registration from './pages/Registration/Registration';
import pathname from './routes';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Negocio from './pages/Negocio/Negocio';
import SuccessPage from './components/SuccessPage/SuccessPage';
import { useState } from 'react';
import BrandAnimation from './components/BrandAnimation/BrandAnimation';
import { UserAuthContextProvider } from './context/userAuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import PhoneSignUp from './pages/PhoneSignUp';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import CaptureForm from './components/CaptureForm';

function App() {
  const [loading, setLoading] = useState(true);
  window.onload = () => {
    setLoading(false);
  };

  return (

    <div className="App">
      <UserAuthContextProvider>
      {loading && <BrandAnimation setLoading={setLoading} />}
      <Routes>
        <Route path={pathname.home} element={<HomeBanner />} ></Route> 
        <Route path={pathname.captureform} element={<ProtectedRoute><CaptureForm /></ProtectedRoute>} />
        <Route path={pathname.anunciantes} element={<Anunciantes />} />
        <Route path={pathname.constraction} element={<Constraction />} />
        <Route path={`${pathname.negocio}/:id_business`} element={<Negocio />} />
        <Route path={pathname.success} element={<SuccessPage />} />
        <Route path={pathname.login} element={<Login />} />
        <Route path={pathname.signup} element={<Signup />} />
        <Route path={pathname.forgetPassword} element={<ForgetPassword />} />
        <Route path={pathname.phoneSignup} element={<PhoneSignUp />} />
        <Route path={pathname.profile} element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path={pathname.notFound} element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"  
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
