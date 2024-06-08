import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import RegisterForm from './components/Auth/Register/RegisterForm';
import LoginForm from './components/Auth/Login/LoginForm';
import Blog from './pages/Blog/Blog.js';

function App() {
  return (
    <>
    <div className="App">
      <Router>
          
              <Header />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  {/* <Route path="/about" element={<About/>} /> */}
                  {/* <Route path="/contact" element={<Contact/>} /> */}
                  {/* <Route path="/services" element={<Services/>} /> */}
                  <Route path="/pricing" element={<Pricing/>} />
                  <Route path="/blog" element={<Blog/>} />
                  <Route path="/register" element={<RegisterForm/>} />
                  <Route path="/login" element={<LoginForm/>} />
              </Routes>
      </Router>
       <Footer />
       </div>
    </>
  );
}

export default App;