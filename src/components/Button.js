import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: 2px solid mediumseagreen;
  color: mediumseagreen;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: mediumseagreen;
    color: #fff;
  }
`;

const Button = () => {
  return ( 
    <ButtonStyle>
      Send
    </ButtonStyle>
  );
}
 
export default Button;