import React from 'react';
import styled from 'styled-components';

// Components
import WorkDetailsWrapper from '../Wrappers/WorkDetailsWrapper.js';

/********************************************* Variables ******************************************/
const workDetails = {
  positions: ["IT Student Work Study"],
  payrates: ["$8/hr"],
  duriation: "November 2007 - May 2008",
  locations: ["San Bernardino, CA"],
  managers: ["Kasey N."],
  phonenumber: "No longer available",
  websites: ["No longer available"],
  reasonforleaving: "Graduating and continuing education over in San Diego",
  workresponsibilities: [
    "Direct college students on how to use the computers (hardware and software).",
    "Help Faculty with anything IT related.",
    "Assist boss with record collection, making student awards, and organizing the library.",
    "Upgraded computers hardware and software as needed.",
    "Build computers for the labs."
  ],
}

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ITTTechImg = styled.img`
  width: 40%;
`;

/********************************************* Component ******************************************/
const IttTech = props => {
  return (
    <DivWrapper>
      <ITTTechImg src={require('../../../../assets/img/ITTTech.svg')} alt='' />
      <WorkDetailsWrapper workDetails={workDetails} />
    </DivWrapper>
  );
};

export default IttTech;