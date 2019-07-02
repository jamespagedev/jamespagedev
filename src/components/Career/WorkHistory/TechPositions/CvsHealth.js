import React from 'react';
import styled from 'styled-components';

// Components
import WorkDetailsWrapper from '../Wrappers/WorkDetailsWrapper.js';

/********************************************* Variables ******************************************/
const workDetails = {
  positions: ["Powershell Engineer"],
  payrates: ["$42/hr"],
  duriation: "November 2015 - April 2016",
  locations: ["Scottsdale, AZ"],
  managers: ["Mark ", "Angelo C."],
  phonenumber: "(480) 391-4600",
  websites: ["https://cvshealth.com/"],
  reasonforleaving: "Had personal issues to take care of requiring minimum of 2 years time off employment.",
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

const CvsImg = styled.img`
  width: 60%;
`;

/********************************************* Component ******************************************/
const CvsHealth = props => {
  return (
    <DivWrapper>
      <CvsImg src={require('../../../../assets/img/CvsWhite.svg')} alt='' />
      <WorkDetailsWrapper workDetails={workDetails} />
    </DivWrapper>
  );
};

export default CvsHealth;