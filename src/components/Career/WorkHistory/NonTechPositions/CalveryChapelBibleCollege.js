import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalveryChapelBibleCollegeImg = styled.img`
  width: 70%;
`;

/********************************************* Component ******************************************/
const CalveryChapelBibleCollege = props => {
  return (
    <DivWrapper>
      <CalveryChapelBibleCollegeImg src={require('../../../../assets/img/CalveryLogo.svg')} alt='' />
    </DivWrapper>
  );
};

export default CalveryChapelBibleCollege;