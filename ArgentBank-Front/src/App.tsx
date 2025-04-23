import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { useSelector } from 'react-redux';
import LoginPage from './pages/Login/Login';
import ProfilPage from './pages/Profil/Profil';
import { RootState } from './redux/store';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/Profil' element={isAuthenticated ? <ProfilPage /> : <Navigate to ="/" replace />} />
      </Routes>
    </Router>
      
  );
};

export default App
