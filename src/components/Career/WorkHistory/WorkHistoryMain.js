import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import TechPositionsCollageWraper from './Wrappers/TechPositionsCollageWrapper.js';
import NonTechPositionsCollageWraper from './Wrappers/NonTechPositionsCollageWrapper.js';

// Actions
import { selectWorkHistoryNavItem } from '../../../reduxstore/actions/index.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const TechPositionsImg = styled.img`
  width: 70%;
`;

const NonTechPositionsImg = styled.img`
  width: 70%;
`;

/********************************************* Component ******************************************/
const WorkHistoryMain = props => {
  return (
    <DivWrapper>
      <TechPositionsImg src={require('../../../assets/img/TechPositions.svg')} draggable="false" alt='' />
      <TechPositionsCollageWraper selectWorkHistoryNavItem={props.selectWorkHistoryNavItem}/>
      <NonTechPositionsImg src={require('../../../assets/img/NonTech.svg')} draggable="false" alt='' />
      <NonTechPositionsCollageWraper selectWorkHistoryNavItem={props.selectWorkHistoryNavItem}/>
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
  { selectWorkHistoryNavItem }
)(WorkHistoryMain);