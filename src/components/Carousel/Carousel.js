import React, { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./style.css";
import Img from "../LazyLoading/Img/Img";

const Carousel = ({ animeData }) => {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (sliderRef.current && !loading) {
      sliderRef.current.slickPlay();
    }
  }, [loading]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {loading || !animeData.length ? (
        <div className="carousel-skeleton">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="carousel-item-skeleton"></div>
          ))}
        </div>
      ) : (
        <Slider ref={sliderRef} {...settings}>
          {animeData.map((anime) => (
            <div key={anime.id}>
              <Link to={`/data/${anime.id}`}>
                <Img className="image" src={anime.poster} alt={anime.name} />
              </Link>
              <p className="paragraph">
                <Link to={`/data/${anime.id}`}>{anime.name}</Link>
              </p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
