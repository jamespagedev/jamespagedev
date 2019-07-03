import React from 'react';
import styled from 'styled-components';

// Components
import WorkDetailsWrapper from '../Wrappers/WorkDetailsWrapper.js';

/********************************************* Variables ******************************************/
const workDetails = {
  positions: ["IT Student Intern"],
  payrates: ["$9/hr"],
  duriation: "April 2008 - May 2008",
  locations: ["San Bernardino, CA"],
  managers: ["Leonard"],
  phonenumber: "(909) 574-4500",
  websites: ["http://www.sbclib.org/LibraryLocations/FontanaLewisLibraryTechnologyCenter.aspx"],
  reasonforleaving: "Changing schedule collided with college classes schedule.",
  workresponsibilities: [
    "Assist in anything IT related.",
    "Maintain computers and equipment.",
    "Troubleshoot computers and equipment.",
    "Customer Assistance (computer related)."
  ],
}

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SBDLibraryImg = styled.img`
  width: 40%;
`;

/********************************************* Component ******************************************/
const SanBernadinoLibrary = props => {
  return (
    <DivWrapper>
      <SBDLibraryImg src={require('../../../../assets/img/SBDLibrary.svg')} alt='' />
      <WorkDetailsWrapper workDetails={workDetails} />
    </DivWrapper>
  );
};

export default SanBernadinoLibrary;