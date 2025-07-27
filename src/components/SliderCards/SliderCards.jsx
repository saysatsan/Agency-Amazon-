import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { settings } from '../../constants/constant';
import CardFeedback from '../CardFeedback/CardFeedback';
import { SliderWrapper } from './styled';

const SliderCards = () => {
  const [echoData, setEchoData] = useState();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setEchoData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!Array.isArray(echoData) || echoData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {echoData.map((card) => (
          <CardFeedback
            key={card.key}
            companyName={card.company.name}
            companyLogo={card.company.logo}
            author={card.author}
            echo={card.echo}
          />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default SliderCards;
