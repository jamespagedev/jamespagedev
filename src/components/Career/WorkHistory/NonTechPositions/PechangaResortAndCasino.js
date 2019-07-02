import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PechangaImg = styled.img`
  width: 40%;
`;

/********************************************* Component ******************************************/
const PechangaResortAndCasino = props => {
  return (
    <DivWrapper>
      <PechangaImg src={require('../../../../assets/img/PechangaLogo.svg')} alt='' />
    </DivWrapper>
  );
};

export default PechangaResortAndCasino;