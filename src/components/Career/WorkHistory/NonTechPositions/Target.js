import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TargetImg = styled.img`
  width: 70%;
`;

/********************************************* Component ******************************************/
const Target = props => {
  return (
    <DivWrapper>
      <TargetImg src={require('../../../../assets/img/Target.svg')} alt='' />
    </DivWrapper>
  );
};

export default Target;