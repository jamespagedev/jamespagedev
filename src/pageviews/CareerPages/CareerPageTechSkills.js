import React from 'react';
import styled from 'styled-components';

// Components
import TechSkillsUsed from '../../components/Career/TechSkills/TechSkillsUsed.js';
import TechSkillsToLearn from '../../components/Career/TechSkills/TechSkillsToLearn.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

const H1Title = styled.h1`
  display: flex;
  align-self: center;
  margin: 0 0 25px 0;
  text-decoration: underline;
  user-select: none;
`;

/********************************************* Component ******************************************/
const CareerPageTechSkills = props => {
  return (
    <DivWrapper>
      <H1Title>Tech Skills</H1Title>
      <TechSkillsUsed />
      <TechSkillsToLearn />
    </DivWrapper>
  );
};

export default CareerPageTechSkills;