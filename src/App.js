import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';
import AdminForm from './pages/AdminPage';

const App = () => {
  const shouldRenderNavbar = (pathname) => {
    const excludedPaths = ['/signup', '/login', '/admin'];
    return !excludedPaths.includes(pathname);
  };

  const renderRoutes = () => {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      {shouldRenderNavbar(window.location.pathname) && <Navbar />}
      {renderRoutes()}
    </BrowserRouter>
  );
};

export default App;
