import React from 'react';
import styled from 'styled-components';

// Components
import OperatingSystems from './OperatingSystems.js'
import Languages from './Languages.js'

// Globals
import { Colors } from '../../../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${Colors.darkerCodGray};
  border-radius: 25px;
  margin-bottom: 25px;
`;

const H2Title = styled.h2`
  text-decoration: underline;
`;

/********************************************* Component ******************************************/
const TechSkillsToLearn = props => {
  return (
    <DivWrapper>
      <H2Title>Skills&nbsp;To&nbsp;Learn</H2Title>
      <OperatingSystems learn />
      <Languages learn />
    </DivWrapper>
  );
};

export default TechSkillsToLearn;