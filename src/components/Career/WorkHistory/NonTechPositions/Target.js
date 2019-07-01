import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div``;

/********************************************* Component ******************************************/
const Target = props => {
  return (
    <DivWrapper>
      <h1>This is the Target component</h1>
    </DivWrapper>
  );
};

export default Target;