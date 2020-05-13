import React from 'react';
import styled from "styled-components";

const OffersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const OfferNumber = styled.div`
  color: blue;
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
`;

const Offers = () => {
  return ( 
    <OffersContainer>
      <OfferNumber>12</OfferNumber>
      <div><strong>Offers</strong></div>
    </OffersContainer>
  );
}
 
export default Offers;