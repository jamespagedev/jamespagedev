import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';

// Actions
import { selectCareerNavItem } from '../../../../reduxstore/actions/index.js';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid transparent;
  top: 39px;
  position: absolute;
  background: linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%);
  width: 300px;
  z-index: 10;
  opacity: ${props => (props.ed_dropdown === 'true' ? '1' : '0')};
  pointer-events: ${props => (props.ed_dropdown === 'true' ? 'initial' : 'none')};
  padding: 12px 0;
  cursor: pointer;
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
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const WorkHistoryDropdown = props => {
  return (
    <DivWrapper ed_dropdown={props.ed_dropdown.toString()}>
      <DivNavItem
        onClick={ev => props.selectCareerNavItem(ev, 'education')}
        onPointerEnter={ev => {
          props.set_ed_navbg(ev, true);
          props.set_ed_dropdown(ev, true);
        }}
      >
        <LinkNavItem to='#' draggable='false'>
          Lambda&nbsp;School
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem
        onClick={ev => props.selectCareerNavItem(ev, 'education')}
        onPointerEnter={ev => {
          props.set_ed_navbg(ev, true);
          props.set_ed_dropdown(ev, true);
        }}
      >
        <LinkNavItem to='#' draggable='false'>
          Books
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem
        onClick={ev => props.selectCareerNavItem(ev, 'education')}
        onPointerEnter={ev => {
          props.set_ed_navbg(ev, true);
          props.set_ed_dropdown(ev, true);
        }}
      >
        <LinkNavItem to='#' draggable='false'>
          Coursera
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem
        onClick={ev => props.selectCareerNavItem(ev, 'education')}
        onPointerEnter={ev => {
          props.set_ed_navbg(ev, true);
          props.set_ed_dropdown(ev, true);
        }}
      >
        <LinkNavItem to='#' draggable='false'>
          ITT Tech (Bachelors)
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem
        onClick={ev => props.selectCareerNavItem(ev, 'education')}
        onPointerEnter={ev => {
          props.set_ed_navbg(ev, true);
          props.set_ed_dropdown(ev, true);
        }}
      >
        <LinkNavItem to='#' draggable='false'>
          ITT Tech (Associates)
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
)(WorkHistoryDropdown);
