import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/Login/Login';
import ProfilPage from './pages/Profil/Profil';
import { RootState,AppDispatch } from './redux/store';
import { checkToken } from './redux/slices/authSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  useEffect(()=>{
    dispatch(checkToken());
  },[])
  return (
    <Router>
      <Routes>
      <Route path='/' element={isAuthenticated ? <ProfilPage />  : <LoginPage />} /> 
      
      <Route path='/Profil' element={isAuthenticated ? <ProfilPage /> : <Navigate to ="/" replace />} />
      </Routes>
    </Router>
      
  );
};

export default App
