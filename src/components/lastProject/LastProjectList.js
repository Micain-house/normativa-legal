import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { lastProject } from '../../services/lastProject';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LastProjectList.css';

const LastProjectList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await lastProject();
        console.log(result); 
        setData(result.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <div className='slider-title'>
      <h2>Últimos proyectos publicados</h2>
      <p>Infórmate sobre los proyectos de ley más recientes en Chile. Nuestra plataforma te permite acceder rápidamente a las propuestas legislativas en curso, con herramientas de IA que facilitan su análisis y comprensión.</p>
      </div>
      {error && <p>Error: {error}</p>}
      <Slider {...settings}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="last-project" key={index}>
              <h4 className="title-nroProject">Nro boletín: {item.NroBoletin}</h4>
              <p className="title-lastProject">
                {item.TituloProyecto.length > 100 ? 
                  `${item.TituloProyecto.substring(0, 100)}...` : 
                  item.TituloProyecto}
              </p>
              <div className='footer-lastProject'>
              <span>Origen: {item.Origen}</span>
              <span>Despacho: {formatDate(item.FechaDespacho)}</span>
              {/* <p className="title-dateProject">Despacho: {formatDate(item.FechaDespacho)}</p> */}
              </div>
              
            </div>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </Slider>
    </div>
  );
};

export default LastProjectList;
