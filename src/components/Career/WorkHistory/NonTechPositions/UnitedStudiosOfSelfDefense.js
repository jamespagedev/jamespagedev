import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const USSDImg = styled.img`
  width: 60%;
`;

/********************************************* Component ******************************************/
const UnitedStudiosOfSelfDefense = props => {
  return (
    <DivWrapper>
      <USSDImg src={require('../../../../assets/img/USSDLogo.svg')} alt='' />
    </DivWrapper>
  );
};

export default UnitedStudiosOfSelfDefense;