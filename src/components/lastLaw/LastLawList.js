import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { lastLaw } from '../../services/lastLaw';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LastLawList.css';

const LastLawList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await lastLaw();
        console.log(result.data[2].tipos_numeros.tipo_numero.compuesto); 
        setData(result.data || []);
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
      <h2>Últimas leyes publicadas</h2>
      {error && <p>Error: {error}</p>}
      <Slider {...settings}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="last-law" key={index}>
              <h4>{item.tipos_numeros.tipo_numero.compuesto}</h4>
              <p className="law-last-title">
                {item.titulo.length > 100 ? 
                  `${item.titulo.substring(0, 100)}...` : 
                  item.titulo}
              </p>
              <p>{formatDate(item.fecha_publicacion)}</p> 
            </div>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </Slider>
    </div> 
  );
};

export default LastLawList;
