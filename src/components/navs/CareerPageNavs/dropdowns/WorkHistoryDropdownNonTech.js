import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';

// Actions
import { selectCareerNavItem } from '../../../../reduxstore/actions/index.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 50px;
  left: 300px;
  position: absolute;
  background: linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%);
  width: 380px;
  z-index: 10;
  opacity: ${props => (props.wh_dropdown_non_tech === 'true' ? '1' : '0')};
  pointer-events: ${props => (props.wh_dropdown_non_tech === 'true' ? 'initial' : 'none')};
  padding: 12px 0;
`;

const DivNavItem = styled.div`
  padding: 10px 0;
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
  user-select: none;
  cursor: pointer;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const WorkHistoryDropdownNonTech = props => {
  return (
    <DivWrapper wh_dropdown_non_tech={props.wh_dropdown_non_tech.toString()}>
      <DivNavItem onClick={ev => props.selectCareerNavItem(ev, 'work_history')}>
        <LinkNavItem to='#' draggable='false'>
          Pechanga&nbsp;Resort&nbsp;and&nbsp;Casino
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => props.selectCareerNavItem(ev, 'work_history')}>
        <LinkNavItem to='#' draggable='false'>
          United&nbsp;Studios&nbsp;of&nbsp;Self&nbsp;Defense
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => props.selectCareerNavItem(ev, 'work_history')}>
        <LinkNavItem to='#' draggable='false'>
          Jack&nbsp;Weaver&nbsp;School
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => props.selectCareerNavItem(ev, 'work_history')}>
        <LinkNavItem to='#' draggable='false'>
          Target
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => props.selectCareerNavItem(ev, 'work_history')}>
        <LinkNavItem to='#' draggable='false'>
          KFC
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => props.selectCareerNavItem(ev, 'work_history')}>
        <LinkNavItem to='#' draggable='false'>
          Calvary&nbsp;Chapel&nbsp;Bible&nbsp;College
        </LinkNavItem>
      </DivNavItem>
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { selectCareerNavItem }
)(WorkHistoryDropdownNonTech);
