import React from 'react';
import styled from "styled-components";

const Images = styled.img`
  max-width: 100%;
  border-radius: 5px;
  height: 100%;
  cursor: pointer;
`;

const ImageContainer = styled.li`
  list-style-type: none;
  height: 125px;
  width: 125px;
  margin-right: 20px;
  border-radius: 5px;
  border: 2px solid #c9dcff;
  margin-top: 20px;
`;

const AttachmentImages = ({ image }) => {
  return (
    <ImageContainer>
      <Images src={require(`../assets/images/${image}`)} alt="Library" />
    </ImageContainer>
  );
}
 
export default AttachmentImages;