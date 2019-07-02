import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import NonTechPositionsCollageWraper from '../Wrappers/NonTechPositionsCollageWrapper.js';

// Actions
import { selectWorkHistoryNavItem } from '../../../../reduxstore/actions/index.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NonTechPositionsImg = styled.img`
  width: 70%;
`;

/********************************************* Component ******************************************/
const NonTechPositions = props => {
  return (
    <DivWrapper>
      <NonTechPositionsImg src={require('../../../../assets/img/NonTech.svg')} alt='' />
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
)(NonTechPositions);