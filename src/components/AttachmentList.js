import React from 'react';
import AttachmentImages from "./AttachmentImages";
import styled from "styled-components";

const AttachmentContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AttachmentList = (props) => {
  const { images } = props;


  return (
    <div>
      <AttachmentContainer>
        {images.map((image) => {
          return <AttachmentImages image={image.url} key={image.id} />;
        })}
      </AttachmentContainer>
    </div>
  );
}
 
export default AttachmentList;