import React from 'react';
import LeftSection from './components/LeftSection';
import styled from "styled-components";
import MainPage from './components/MainPage';

const Apps = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-between;
`;
function App() {
  return (
    <Apps>
      <LeftSection />
      <div className="w-80 main-container">
        <MainPage />
      </div>
    </Apps>
  );
}

export default App;
