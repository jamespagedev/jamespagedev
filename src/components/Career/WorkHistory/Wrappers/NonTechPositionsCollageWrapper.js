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
        <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'pechangaResortAndCasino')} src={require('../../../../assets/img/PechangaLogo.svg')} draggable="false" alt='' />
        <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'unitedStudiosOfSelfDefense')} src={require('../../../../assets/img/USSDLogo.svg')} draggable="false" alt='' />
        <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'jackWeaverSchool')} src={require('../../../../assets/img/Target.svg')} draggable="false" alt='' />
        <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'target')} src={require('../../../../assets/img/OakGroveLogo.svg')} draggable="false" alt='' />
        <ThumbnailImg onClick={ev => props.selectWorkHistoryNavItem(ev, 'calveryChapelBibleCollege')} src={require('../../../../assets/img/CalveryLogo.svg')} draggable="false" alt='' />
    </DivWrapper>
  );
};

export default TechPositionsCollageWraper;