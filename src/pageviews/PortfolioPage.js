import React from 'react';
import styled from 'styled-components';
import { Colors } from '../globals/CssMixins.js';

// Components
import PortfolioTopSection from '../components/Portfolio/PortfolioTopSection.js';
import PortfolioMidSection from '../components/Portfolio/PortfolioMidSection.js';

/********************************************** Styles ********************************************/
// Note: phone view 650 width.
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DivHeaderBackground = styled.div`
  height: 58px;
  width: 100%;
  background-color: ${Colors.Vulcan};
  position: fixed;
  z-index: 10;
  top: 2px;
`;

/********************************************* Component ******************************************/
const PortfolioPage = props => {
  return (
    <DivWrapper>
      <DivHeaderBackground />
      <PortfolioTopSection />
      <PortfolioMidSection />
    </DivWrapper>
  );
};

export default PortfolioPage;