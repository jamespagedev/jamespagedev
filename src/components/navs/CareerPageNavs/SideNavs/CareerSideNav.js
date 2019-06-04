import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Colors } from '../../../../globals/CssMixins';
// import { CareerPageHeaderBreakLine } from '../../../../globals/Variables';
import TestHeightSideNav10Links from './TestHeightSideNav10Links';
import TestHeightSideNav50Links from './TestHeightSideNav50Links';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const isTesting = true;
// 0 - height: calc(100vh - 100%);
// 10 - height: calc(100vh - CareerPageHeaderBreakLine);
// 50 - no height;
const testCase = 0; // 0, 10, 50
const selectedSideNavLink = '';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivSideNavWrapper = styled.div`
  width: 300px;
  min-width: 300px;
  height: 100%;
  border-right: 6px solid ${Colors.Tundora};
  background-color: ${Colors.CodGray};
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const CareerSideNav = props => {
  if (isTesting) {
    switch (testCase) {
      case 10:
        return (
          <DivSideNavWrapper>
            <TestHeightSideNav10Links />
          </DivSideNavWrapper>
        );
      case 50:
        return (
          <DivSideNavWrapper>
            <TestHeightSideNav50Links />
          </DivSideNavWrapper>
        );
      default:
        return <DivSideNavWrapper />;
    }
  }
  switch (selectedSideNavLink) {
    default:
      return <DivSideNavWrapper />;
  }
};

export default CareerSideNav;
