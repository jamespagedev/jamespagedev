import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import TechPositionsCollageWraper from '../Wrappers/TechPositionsCollageWrapper.js';

// Actions
import { selectWorkHistoryNavItem } from '../../../../reduxstore/actions/index.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechPositionsImg = styled.img`
  width: 70%;
`;

/********************************************* Component ******************************************/
const TechPositions = props => {
  return (
    <DivWrapper>
      <TechPositionsImg src={require('../../../../assets/img/TechPositions.svg')} alt='' />
      <TechPositionsCollageWraper selectWorkHistoryNavItem={props.selectWorkHistoryNavItem}/>
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
)(TechPositions);