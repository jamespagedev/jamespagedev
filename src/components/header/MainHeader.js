import React from 'react';
import styled from 'styled-components';
import MainHeaderNav from './MainHeaderNav';
import { Colors } from '../../globals/CssMixins';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  border-top: 3px solid ${Colors.Rhino};
  border-bottom: 3px solid ${Colors.Rhino};
  background: transparent;
  background-color: ${props =>
    props.headerScrolledOpacity === 'false' ? `rgba(16, 16, 31, 0.2)` : `rgb(16, 16, 31)`};
  width: 100%;
  position: fixed;
  z-index: 9999;
`;

const H1Logo = styled.h1`
  margin: 2px 0 2px 50px;
  user-select: none;
  color: #2ee0e0;
  filter: contrast(1.75);
  font-family: 'Charm', cursive;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.7);
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const MainHeader = props => {
  return (
    <DivWrapper headerScrolledOpacity={props.headerScrolledOpacity.toString()}>
      <link href='https://fonts.googleapis.com/css?family=Charm:700' rel='stylesheet' />
      <H1Logo>James&nbsp;C.&nbsp;Page</H1Logo>
      <MainHeaderNav {...props} />
    </DivWrapper>
  );
};

export default MainHeader;
