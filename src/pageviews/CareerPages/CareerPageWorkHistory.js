import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import WorkHistoryMain from '../../components/Career/WorkHistory/WorkHistoryMain.js';
import TechPositions from '../../components/Career/WorkHistory/TechPositions/TechPositions.js';
import LambdaSchool from '../../components/Career/WorkHistory/TechPositions/LambdaSchool.js';
import CvsHealth from '../../components/Career/WorkHistory/TechPositions/CvsHealth.js';
import Qualcomm from '../../components/Career/WorkHistory/TechPositions/Qualcomm.js';
import MillenniumLaboratories from '../../components/Career/WorkHistory/TechPositions/MillenniumLaboratories.js';
import SanBernadinoLibrary from '../../components/Career/WorkHistory/TechPositions/SanBernadinoLibrary.js';
import IttTech from '../../components/Career/WorkHistory/TechPositions/IttTech.js';
import NonTechPositions from '../../components/Career/WorkHistory/NonTechPositions/NonTechPositions.js';
import PechangaResortAndCasino from '../../components/Career/WorkHistory/NonTechPositions/PechangaResortAndCasino.js';
import UnitedStudiosOfSelfDefense from '../../components/Career/WorkHistory/NonTechPositions/UnitedStudiosOfSelfDefense.js';
import JackWeaverSchool from '../../components/Career/WorkHistory/NonTechPositions/JackWeaverSchool.js';
import Target from '../../components/Career/WorkHistory/NonTechPositions/Target.js';
import CalveryChapelBibleCollege from '../../components/Career/WorkHistory/NonTechPositions/CalveryChapelBibleCollege.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div``;

/********************************************* Component ******************************************/
const CareerPageWorkHistory = props => {
  return (
    <DivWrapper>
      {props.selWorkHistoryNavItems.main === 'true' && <WorkHistoryMain />}
      {props.selWorkHistoryNavItems.techPositions === 'true' && <TechPositions />}
      {props.selWorkHistoryNavItems.lambdaSchool === 'true' && <LambdaSchool />}
      {props.selWorkHistoryNavItems.cvsHealth === 'true' && <CvsHealth />}
      {props.selWorkHistoryNavItems.qualcomm === 'true' && <Qualcomm />}
      {props.selWorkHistoryNavItems.millenniumLaboratories === 'true' && <MillenniumLaboratories />}
      {props.selWorkHistoryNavItems.sanBernadinoLibrary === 'true' && <SanBernadinoLibrary />}
      {props.selWorkHistoryNavItems.ittTech === 'true' && <IttTech />}
      {props.selWorkHistoryNavItems.nonTechPositions === 'true' && <NonTechPositions />}
      {props.selWorkHistoryNavItems.pechangaResortAndCasino === 'true' && <PechangaResortAndCasino />}
      {props.selWorkHistoryNavItems.unitedStudiosOfSelfDefense === 'true' && <UnitedStudiosOfSelfDefense />}
      {props.selWorkHistoryNavItems.jackWeaverSchool === 'true' && <JackWeaverSchool />}
      {props.selWorkHistoryNavItems.target === 'true' && <Target />}
      {props.selWorkHistoryNavItems.calveryChapelBibleCollege === 'true' && <CalveryChapelBibleCollege />}
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    selWorkHistoryNavItems: state.career.selectedWorkHistoryNavItems
  };
};

export default connect(
  mapStateToProps,
  {}
)(CareerPageWorkHistory);