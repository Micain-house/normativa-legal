import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './pages/Home/Home';
import RegisterForm from './components/Auth/Register/registerForm';
import LoginForm from './components/Auth/Login/loginForm';
import NormContentPage from './pages/NormContent/normContentPage';
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
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/Chile/:idNorma" element={<NormContentPage />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} /> */}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
