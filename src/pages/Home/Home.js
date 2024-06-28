import React from 'react';
import './Home.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from 'react-bootstrap/Button';
import cardHome from '../../assets/img-blog2.webp'
import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet';
import LastProjectList from '../../components/lastProject/LastProjectList';
import LastLawList from '../../components/lastLaw/LastLawList';
import iconFile from '../../assets/icon-file-home.svg'
import cardFiltro from '../../assets/cardFiltro-home.png'

const Home = () => {
  return (
    <>
    <div className='home'>
      <Helmet>
        <title>Inicio</title>
        <meta name="description" content="Página de inicio de mi aplicación." />
      </Helmet>
      <div className='home-container'>
        <div className='home-title'>
        <h1>Encuentra y comprende las Normativas Legales chilenas con IA</h1>
        <p>Bienvenido a Normativa Legal, tu fuente confiable de leyes chilenas actualizadas y herramientas avanzadas de Inteligencia Artificial para su comprensión.</p>
      </div>
      <SearchBar/>

     <section>
      <div className='title-cards'>
        <h2>Filtra artículos e interactúa con IA</h2>
        <p>Nuestra IA desglosa y filtra artículos según perfiles y requerimientos normativos. Independientemente de tu área o sector, nuestra plataforma te ayuda a encontrar lo que necesitas. Además, ofrece explicaciones en simple y respuestas a tus preguntas en tiempo real.</p>
      </div>
      <div className='cards'>
        <div className='card-left'>
          <div className='title-card'>
         <span> <img src={iconFile} alt='img-card'/> Nuestra IA identifica los actores de la normativa en los artículos</span>
         <h3>Filtra los artículos por perfil y requisito</h3>
        </div>
          <div className='img-card'>
            <img src={cardFiltro} alt='img-card'/>
          </div>
      </div>
      <div className='card-rigth'>
          <div className='title-card'>
          <span> <img src={iconFile} alt='img-card'/>La IA Normativa te explica y responde dudas de los artículos</span>
          <h3>Interactúa con artículos de tu interés</h3>
        </div>
      </div>

      </div>
     </section>
      <LastLawList/>
      <section>
        <div className='cards-especialistas'>
        <div className='card-especialista-left'>
          <div className='title-card-especialista-left'>
         <span> <img src={iconFile} alt='img-card'/>Un directorio de profesionales a tu completa disposición</span>
         <h3>Conecta con especialistas en tu necesidad</h3>
        </div>
      </div>
      <div className='card-especialista-rigth'>
          <div className='title-card-especialista-right'>
          <h3>Especialistas en ley Chile</h3>
          <span> Identificamos perfiles normativos y te conectamos con especialistas en el área. Normativa Legal facilita la conexión para cumplir con tus requerimientos normativos en todos los rubros.</span>
        </div>
        </div>
        </div>
       </section>
      <LastProjectList/>
     </div>

      <div className='banner'>
        <div className='banner-content'>
          <h2>Optimiza tu acceso y entendimiento de las normativas con nuestra plataforma</h2>
          <p>Únete a Normativa Legal hoy y simplifica tu acceso y comprensión de las leyes chilenas. Con nuestra IA y conexión con especialistas, estar al tanto de las normativas nunca ha sido tan fácil</p>
          <a href=''> <button className='btn-register-home'>Registrarse ahora</button></a>
        
        </div>
      </div>

    
    </div>

    </>
  );
}

export default Home;
