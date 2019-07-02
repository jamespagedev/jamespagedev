import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OakGroveSchoolImg = styled.img`
  width: 20%;
`;

/********************************************* Component ******************************************/
const JackWeaverSchool = props => {
  return (
    <DivWrapper>
      <OakGroveSchoolImg src={require('../../../../assets/img/OakGroveLogo.svg')} alt='' />
    </DivWrapper>
  );
};

export default JackWeaverSchool;