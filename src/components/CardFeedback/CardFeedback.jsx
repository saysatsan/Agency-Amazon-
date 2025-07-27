import React from 'react';
import {
  StyledAuthor,
  StyledBox,
  StyledCard,
  StyledCardContent,
  StyledLogo,
  StyledP,
} from './styled';

const CardFeedback = ({ companyLogo, echo, author }) => {
  return (
    <StyledCard sx={{ maxWidth: 380 }} data-testid="cardWrapper">
      <StyledLogo>
        <img src={companyLogo} alt="" />
      </StyledLogo>
      <StyledCardContent data-testid="CardContentTitle">
        <StyledP>
          {echo}
          <br />
          <strong>”</strong>
        </StyledP>
        <StyledBox>
          <img src={author.avatar} alt="avatar" />
          <StyledAuthor>
            <strong>{author.name}</strong>
            <br />
            {author.position},<br />
            {author.company}
          </StyledAuthor>
        </StyledBox>
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardFeedback;
