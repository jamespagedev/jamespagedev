import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';
import { careerNavItemNames } from '../../../../globals/Variables.js';
import WorkHistoryDropdownTech from './WorkHistoryDropdownTech.js';
import WorkHistoryDropdownNonTech from './WorkHistoryDropdownNonTech.js';

// Actions
import { selectCareerNavItem, selectWorkHistoryNavItem } from '../../../../reduxstore/actions/index.js';

/******************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid transparent;
  top: 39px;
  position: absolute;
  background: linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%);
  width: 300px;
  z-index: 10;
  opacity: ${props => (props.wh_dropdown === 'true' ? '1' : '0')};
  pointer-events: ${props => (props.wh_dropdown === 'true' ? 'initial' : 'none')};
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
  user-select: none;
  cursor: pointer;
`;

/******************************************* Component ******************************************/
const WorkHistoryDropdown = props => {
  return (
    <DivWrapper wh_dropdown={props.wh_dropdown.toString()}>
      <DivNavItem
        onClick={ev => { props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'techPositions');}}
        onPointerEnter={ev => {
          props.set_wh_dropdown(ev, true);
          props.set_wh_navbg(ev, true);
          props.set_wh_dropdown_tech(ev, true);
        }}
        onPointerLeave={ev => props.set_wh_dropdown_tech(ev, false)}
      >
        <LinkNavItem to='#' draggable='false'>
          Tech&nbsp;Positions
          <i style={{ fontSize: '16px', alignSelf: 'center', marginLeft: 'auto' }} className='fas fa-chevron-right' />
        </LinkNavItem>
        <WorkHistoryDropdownTech {...props} />
      </DivNavItem>
      <DivNavItem
        onClick={ev => { props.selectCareerNavItem(ev, careerNavItemNames['work_history']); props.selectWorkHistoryNavItem(ev,'nonTechPositions');}}
        onPointerEnter={ev => {
          props.set_wh_dropdown(ev, true);
          props.set_wh_navbg(ev, true);
          props.set_wh_dropdown_non_tech(ev, true);
        }}
        onPointerLeave={ev => props.set_wh_dropdown_non_tech(ev, false)}
      >
        <LinkNavItem to='#' draggable='false'>
          Non-Tech&nbsp;Positions
          <i style={{ fontSize: '16px', alignSelf: 'center', marginLeft: 'auto' }} className='fas fa-chevron-right' />
        </LinkNavItem>
        <WorkHistoryDropdownNonTech {...props} />
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
  { selectCareerNavItem, selectWorkHistoryNavItem }
)(WorkHistoryDropdown);
