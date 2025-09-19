import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/LoginPage.jsx';
import Admin from './components/AdminDash.jsx';
import Validator from './components/ValidatorDash.jsx';
import Signup from './components/Signup.jsx';
import UploadToPinata from './utils/uploadPinata.js';
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/validator" element={<Validator />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload" element={<UploadToPinata />} />
    </Routes>
  );
}

export default MainRoutes;