import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import EducationMain from '../../components/Career/Education/EducationMain.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/********************************************* Component ******************************************/
const CareerEducation = props => {
  return (
    <DivWrapper>
      {props.selectedEducationNavItems.main === 'true' && <EducationMain />}
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    selectedEducationNavItems: state.career.selectedEducationNavItems
  };
};

export default connect(
  mapStateToProps,
  {}
)(CareerEducation);