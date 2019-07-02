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
    "Develop GUI Application to use ldap filter when querying Domains in Active Directory for user profiles.",
    "Write Powershell scripts for automating backend tasks; Active Directory, Merging Domains, Excel Reports, Mapping Data, and other on-demand IT tasks"
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