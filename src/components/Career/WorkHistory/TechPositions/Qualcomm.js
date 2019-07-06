import React from 'react';
import styled from 'styled-components';

// Components
import WorkDetailsWrapper from '../Wrappers/WorkDetailsWrapper.js';

/********************************************* Variables ******************************************/
const workDetails = {
  positions: ["Test Technician", "System Engineer 1", "Test Technician Intermediate"],
  payrates: ["$17/hr", "$24/hr", "$23/hr"],
  duriation: "March 2011 - May 2015",
  locations: ["San Diego, CA"],
  managers: ["Kris H.", "Basawaraj M.", "Richard O.", "Anuradha K.", "Hari K.", "Debdeep B."],
  phonenumber: "(858) 587-1121",
  websites: ["https://www.qualcomm.com/"],
  reasonforleaving: "moving on to developer position",
  workresponsibilities: [
    "Lead meetings and cross-team training sessions (recorded) with engineers, leads, and managers for setup, execution, and triaging issues with a arcane automated system.",
    "Execute and debug tests on multi-media builds with embedded mobile windows devices, and free-style phones.",
    "Setup and Maintain a server/device environment setup accross hundreds of pc's.",
    "Submit reports to managers consisting of test results.",
    "Create/edit xml files, batch scripts, python files, and Powershell scripts for creating/updating/maintaining stability of test/setup/execution/build procedures.",
    "Train and assist fellow engineers with setting up their workstation using VNC, Office, cmd, QPST, QXDM, GitBash, Windbg, Powershell, Web Server Framework, Telnet, Putty, Explorer++, Notepad++, Visual Studio 2011, Windows 7, Python, MS Virtual PC, VirtualEthernet, Trace32, JIRA, PRISM, Windows Server 2008, Active Directory, Development Tools, and Selenium IDE.",
    "Capital budgetting for automation rack orders and configurations.",
    "Setup and administer an SQL database for automated server-wide environment.",
    "Create and maintain Wiki pages for documentation of setups, executions, and debugging.",
    "Partner with other teams to support and assist with bringing up their automation systems.",
    "Debug other engineers python code and implement hotfixes to keep system up and running.",
    "Collaborate with Brew MP developers in testing commercial devices and submitting validation reports.",
    "Manage and organize the testing process to assure more accurate results.",
    "Develop test execution procedure, then document and validate results.",
    "Troubleshoot devices connection and execution problems, laptops, network, permission issues, device flashing, and provisioning on live networks."
  ],
}

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const QImg = styled.img`
  width: 50%;
`;

/********************************************* Component ******************************************/
const Qualcomm = props => {
  return (
    <DivWrapper>
      <QImg src={require('../../../../assets/img/qualcomm.svg')} draggable="false" alt='' />
      <WorkDetailsWrapper workDetails={workDetails} />
    </DivWrapper>
  );
};

export default Qualcomm;