import styled from 'styled-components';
import {
  Card, CardActions,
  CardContent,
} from '@mui/material';

export const StyledCard = styled(Card)`
  && {
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #B6B1B1;
    padding: 0 1.56rem;
    display: flex;
    flex-direction: column;
     min-height: 100%;
    margin-bottom: 1.2rem;
    justify-content: space-around;
  
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transform: scale(1.02) rotate(1deg);
    }
    
    @media
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLogo = styled.div`
  align-content: center;
  height: 91px;
`
export const StyledP = styled.p`
  color: #9B9A99;
  font-family: "Space Grotesk";
  font-size: 1.25rem;
  font-style: normal;
  line-height: 2.1875rem;
  position: relative;
  max-width: 19.875rem;
  margin-bottom: 50px;

  strong {  
    color: #C6C5C6;
    font-family: "Staatliches";
    font-size: 6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1875rem; 
    position: absolute;
    right: 8px;
  }
`
export const StyledBox = styled.div`
  && {
    font-family: 'Playfair Display, serif';
    height: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const StyledCardActions = styled(CardActions)`
  && {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
`;

export const StyledAuthor = styled.div`
  color: #000;
  font-family: "Space Grotesk";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;

  strong {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
  }  
`;