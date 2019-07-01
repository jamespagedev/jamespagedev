import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';
import { careerNavItemNames } from '../../../../globals/Variables.js';

// Actions
import { selectCareerNavItem } from '../../../../reduxstore/actions/index.js';

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
const WorkHistoryDropdownTech = props => {
  return (
    <DivWrapper wh_dropdown_tech={props.wh_dropdown_tech.toString()}>
      <DivNavItem onClick={ev => {props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'lambdaSchool');}}>
        <LinkNavItem to='#' draggable='false'>
          Lambda&nbsp;School
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => {props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'cvsHealth');}}>
        <LinkNavItem to='#' draggable='false'>
          CVS&nbsp;Health
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => {props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'qualcomm');}}>
        <LinkNavItem to='#' draggable='false'>
          Qualcomm
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => {props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'millenniumLaboratories');}}>
        <LinkNavItem to='#' draggable='false'>
          Millennium&nbsp;Laboratories
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => {props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'sanBernadinoLibrary');}}>
        <LinkNavItem to='#' draggable='false'>
          San&nbsp;Bernardino&nbsp;Library
        </LinkNavItem>
      </DivNavItem>
      <DivNavItem onClick={ev => {props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'ittTech');}}>
        <LinkNavItem to='#' draggable='false'>
          ITT&nbsp;Tech
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
)(WorkHistoryDropdownTech);
