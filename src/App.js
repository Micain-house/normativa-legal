import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import RegisterForm from './components/Auth/Register/registerForm';
import LoginForm from './components/Auth/Login/loginForm';
import SearchBar from './components/SearchBar/SearchBar';

import Blog from './pages/Blog/Blog';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mi Aplicación</title>
        <meta name="description" content="Bienvenido a mi aplicación." />
      </Helmet>
      <Router>
        <Header />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
