import React from 'react';
import styled from "styled-components";

const Type = styled.span`
  border: 1px solid cornflowerblue;
  background-color: #f5f5f9;
  color: cornflowerblue;
  border-radius: 20px;
  padding: 5px 10px;
`;

const LibraryDetails = (props) => {
  const { data } = props;

  function AddZero(n) {
  return n < 10 ? "0" + n : n;
  }

  return (
    <div className="w-70">
      <h2 style={{ marginTop: "0" }}>{data.title}</h2>
      <Type>{data.type}</Type>
      <div className="mt-20">
        <strong>Location: </strong>
        {data.location}
      </div>
      <div className="mt-20">
        <strong>Price: </strong>
        <span style={{ color: "cornflowerblue" }}>{data.price}</span>
      </div>
      <div className="mt-20 w-70 description">
        <strong>Description: </strong>
        {data.description}
      </div>
      <div className="mt-20">
        <strong>Attachments:</strong> {AddZero(data.attachments.length)}
      </div>
    </div>
  );
}
 
export default LibraryDetails;