import React from 'react';
import styled from 'styled-components';

// Components
import WorkDetailsWrapper from '../Wrappers/WorkDetailsWrapper.js';

/********************************************* Variables ******************************************/
const workDetails = {
  positions: ["IT Administrator"],
  payrates: ["$11/hr"],
  duriation: "July 2009 - September 2009",
  locations: ["San Diego, CA"],
  managers: ["Ruben V."],
  phonenumber: "(877) 451-3534",
  websites: ["https://www.millenniumhealth.com/"],
  reasonforleaving: "Continue finishing college education to get degree.",
  workresponsibilities: [
    "Investigate and diagnose  PC, laptop, and phone issues both on-site and remotely for over 50 employees and customers.",
    "Replaced computer parts and solved login failures.",
    "Managed the email accounts for all employees, which involved assigning quotas, creating and deleting email addresses as needed.",
    "Configured Outlook on the PC’s and laptops to pull emails from the mail server.",
    "Engineered cell phones for email synchronization with PC’s and laptops.",
    "Traced and documented the patch panel ports connected to RJ11 and RJ45 wall jacks in the building.",
    "Drew (using Visio) the engineering schematics of the building showing port number locations.",
    "Implemented and maintained the new lab datacenter."
  ],
}

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MillenniumHealthImg = styled.img`
  width: 40%;
`;

/********************************************* Component ******************************************/
const MillenniumLaboratories = props => {
  return (
    <DivWrapper>
      <MillenniumHealthImg src={require('../../../../assets/img/MilleniumHealthWhite.svg')} alt='' />
      <WorkDetailsWrapper workDetails={workDetails} />
    </DivWrapper>
  );
};

export default MillenniumLaboratories;