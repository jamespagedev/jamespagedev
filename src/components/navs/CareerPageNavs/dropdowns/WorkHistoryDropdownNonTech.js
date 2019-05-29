import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 25px;
  left: 300px;
  position: absolute;
  background: linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%);
  width: 380px;
  z-index: 10;
  opacity: ${props => (props.wh_dropdown_non_tech === 'true' ? '1' : '0')};
  pointer-events: ${props => (props.wh_dropdown_non_tech === 'true' ? 'initial' : 'none')};
`;

const DivNavItem = styled.div`
  &:hover {
    border-left: 2px solid gold;
  }
`;

const LinkNavItem = styled(Link)`
  display: flex;
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  font-size: 24px;
  color: ${Colors.Gallary};
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const WorkHistoryDropdownNonTech = props => {
  return (
    <DivWrapper wh_dropdown_non_tech={props.wh_dropdown_non_tech.toString()}>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          Pechanga&nbsp;Resort&nbsp;and&nbsp;Casino
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          United&nbsp;Studios&nbsp;of&nbsp;Self&nbsp;Defense
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          Jack&nbsp;Weaver&nbsp;School
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          Target
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          KFC
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          Calvary&nbsp;Chapel&nbsp;Bible&nbsp;College
        </LinkNavItem>
      </DivNavItem>
    </DivWrapper>
  );
};

export default WorkHistoryDropdownNonTech;
