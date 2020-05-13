import React from 'react';
import library from '../assets/images/library.jpeg'; 
import styled from "styled-components";
import User from './User';
import Offers from './Offers';

const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
  opacity: 0.8;
`;

const LeftSection = () => {
  const detail = "Tasker: ";
  const username = "Frank..."


  return ( 
    <div className="w-20 left-container">
      <Image src={library} alt="Library" />
      <User detail={detail} username={username} />
      <Offers />
    </div>
  );
}
 
export default LeftSection;