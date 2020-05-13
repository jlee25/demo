import React from 'react';
import Button from './Button';
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  border: 2px solid #c9dcff;
  resize: none;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px 30px;
`;

const Comments = () => {
  return ( 
    <div className="mt-20 comments">
      <div><strong>Comments:</strong></div>
      <TextArea className="mt-20"></TextArea>
      <div style= {{ textAlign: "right"}}>
        <Button />
      </div>
    </div>
  );
}
 
export default Comments;