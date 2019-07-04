import React from 'react';
import styled from 'styled-components';

// Components
import OperatingSystems from './OperatingSystems.js'
import Languages from './Languages.js'
import FrontEnd from './FrontEnd.js';
import BackEnd from './BackEnd.js';
import IDEs from './IDEs.js';
import Others from './Others.js';

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
  user-select: none;
`;

/********************************************* Component ******************************************/
const TechSkillsUsed = props => {
  return (
    <DivWrapper>
      <H2Title>Skills&nbsp;Used</H2Title>
      <OperatingSystems used />
      <Languages used />
      <FrontEnd used/>
      <BackEnd used />
      <IDEs used />
      <Others used />
    </DivWrapper>
  );
};

export default TechSkillsUsed;