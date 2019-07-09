import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import DivProjectImgModal from './DivProjectImgModal.js';

// Actions
import { setCareerProjectImgModal } from '../../reduxstore/actions/index.js'

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9001;
`;

const DivVoid = styled.div`
  display: none;
`;

/********************************************* Component ******************************************/
const Modals = props => {
  if (props.modalsIsActive){
    return (
      <DivWrapper onClick={() => props.setCareerProjectImgModal(false, '')}>
        {props.modalsIsActive && <DivProjectImgModal projectImgName={props.projectImgName}/>}
      </DivWrapper>
    );
  } else {
    return (
      <DivVoid />
    );
  }
};

const mapStateToProps = state => {
  return {
    modalsIsActive: state.modals.modalsIsActive,
    projectImgName: state.modals.projectImgName
  };
};

export default connect(
  mapStateToProps,
  { setCareerProjectImgModal }
)(Modals);