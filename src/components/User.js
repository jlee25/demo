import React from 'react';
import ProfileImage from '../assets/images/user.png'; 
import styled from "styled-components";

const UserImage = styled.img`
  max-width: 100%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: grey;
  margin-right: 10px;
`;

const ImageDiv = styled.div`
  margin-top: 20px;
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const User = (props) => {
  const { detail, username } = props;
  
  return ( 
    <ImageDiv>
      <UserImage src={ProfileImage} alt="Profile Image" />
      <div>
          <strong>{detail}</strong> {username}
      </div>
    </ImageDiv>
   );
}
 
export default User;