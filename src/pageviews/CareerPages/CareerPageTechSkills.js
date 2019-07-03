import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100%;
width: 100%;`;

const H1Title = styled.h1`
  display: flex;
  align-self: center;
  margin: 0 0 25px 0;
  text-decoration: underline;
`;

/********************************************* Component ******************************************/
const CareerPageTechSkills = props => {
  return (
    <DivWrapper>
      <H1Title>Tech Skills</H1Title>
    </DivWrapper>
  );
};

export default CareerPageTechSkills;