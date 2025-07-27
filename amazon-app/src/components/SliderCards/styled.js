import styled from 'styled-components';

export const SliderWrapper = styled.div`
  max-width: 73rem;
  width: 85%;
  margin: 0 auto;
  
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: stretch;
    height: 100%;
  }
    
 .slick-slide {
     float: left; 
     display: flex;
     height: auto;
     min-height: 100%;
  } 

  .slick-slide > div {
    margin: 0 0.6rem;
    flex: 1;
  }

  .slick-dots {
    bottom: -45px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #ccc;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
   
  }

  .slick-arrow.slick-prev:before,
  .slick-arrow.slick-next:before {
    display: block;
    background-color: #fff;
    content: "^";
    transform: rotate(90deg);
    width: 23px;
    height: 23px;
    color: #707070;
    font-family: "Spinnaker";
    font-style: normal;
    font-size: 48px;
    font-weight: 400;
    line-height: 38px;
    padding: 22px;
    border-radius: 50%;
    border: 1px solid #D1CFCF;
    opacity: 1;
  }

  .slick-arrow.slick-next:before {
    transform: rotate(90deg);
    right: -42px;
  }
  
  .slick-arrow.slick-prev:before {
    transform: rotate(-90deg);
  }

  .slick-arrow.slick-next{
    right: -42px;
  }

  .slick-arrow.slick-prev {
    left: -84px;
  }
`;
