import React from 'react';
import styled from 'styled-components';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin: 25px;
flex-wrap: wrap;
border-radius: 25px;
background-color: ${Colors.darkerCodGray};
`;

const ThumbnailImg = styled.img`
  margin: 10px 15px;
  padding: 25px;
  width: 150px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

/********************************************* Component ******************************************/
const TechPositionsCollageWraper = props => {
  return (
    <DivWrapper>
      <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'lambdaSchool')} src={require('../../../../assets/img/LambdaSchoolWhite.svg')} draggable="false" alt='' />
      <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'cvsHealth')} src={require('../../../../assets/img/CvsWhite.svg')} draggable="false" alt='' />
      <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'qualcomm')} src={require('../../../../assets/img/qualcomm.svg')} draggable="false" alt='' />
      <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'millenniumLaboratories')} src={require('../../../../assets/img/MilleniumHealthWhite.svg')} draggable="false" alt='' />
      <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'sanBernadinoLibrary')} src={require('../../../../assets/img/SBDLibrary.svg')} draggable="false" alt='' />
      <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'ittTech')} src={require('../../../../assets/img/ITTTech.svg')} draggable="false" alt='' />
    </DivWrapper>
  );
};

export default TechPositionsCollageWraper;