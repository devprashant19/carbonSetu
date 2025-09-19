import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/LoginPage.jsx';
import Admin from './components/AdminDash.jsx';
import Validator from './components/ValidatorDash.jsx';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/validator" element={<Validator />} />
    </Routes>
  );
}

export default MainRoutes;