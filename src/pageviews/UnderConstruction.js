import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  margin: 0 auto;
`;

const H1Message = styled.h1`
  margin-top: 100px;
  color: white;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const UnderConstruction = props => {
  return (
    <DivWrapper>
      <H1Message>This is the Under Construction</H1Message>
    </DivWrapper>
  );
};

// UnderConstruction.propTypes = {
//   propertyName: PropTypes.string
// }

export default UnderConstruction;
