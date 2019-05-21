import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 20px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const TestHeightSideNav10Links = props => {
  return (
    <DivWrapper>
      <Link to=''>Item 1</Link>
      <Link to=''>Item 2</Link>
      <Link to=''>Item 3</Link>
      <Link to=''>Item 4</Link>
      <Link to=''>Item 5</Link>
      <Link to=''>Item 6</Link>
      <Link to=''>Item 7</Link>
      <Link to=''>Item 8</Link>
      <Link to=''>Item 9</Link>
      <Link to=''>Item 10</Link>
    </DivWrapper>
  );
};

// TestHeightSideNav10Links.propTypes = {
//   propertyName: PropTypes.string
// }

export default TestHeightSideNav10Links;
