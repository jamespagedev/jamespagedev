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
  top: 0px;
  left: 300px;
  position: absolute;
  background: linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%);
  width: 300px;
  z-index: 10;
  opacity: ${props => (props.wh_dropdown_tech === 'true' ? '1' : '0')};
  pointer-events: ${props => (props.wh_dropdown_tech === 'true' ? 'initial' : 'none')};
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
const WorkHistoryDropdownTech = props => {
  return (
    <DivWrapper wh_dropdown_tech={props.wh_dropdown_tech.toString()}>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          CVS&nbsp;Health
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          Qualcomm
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          Millennium&nbsp;Laboratories
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          San&nbsp;Bernardino&nbsp;Library
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem>
        <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
          ITT&nbsp;Tech
        </LinkNavItem>
      </DivNavItem>
    </DivWrapper>
  );
};

export default WorkHistoryDropdownTech;
