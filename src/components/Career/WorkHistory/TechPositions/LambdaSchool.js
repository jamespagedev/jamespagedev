import React from 'react';
import styled from 'styled-components';

// Components
import WorkDetailsWrapper from '../Wrappers/WorkDetailsWrapper.js';

/********************************************* Variables ******************************************/
const workDetails = {
  positions: ["Class Lead"],
  payrates: ["$12.67/hr"],
  duriation: "May 2019 - Current",
  locations: ["San Fransisco, CA (Online)"],
  managers: ["Terrie K"],
  phonenumber: "None (see website contact info)",
  websites: ["https://lambdaschool.com/"],
  reasonforleaving: "Class will end in less than 2 months",
  workresponsibilities: [
    "Served as teaching assistant leading team of 30+ students in daily code challenges in JS, Python and C.",
    "Provided daily feedback and issue resolution of all curriculum through slack help channelor code review.",
    "Delivered one-on-one feedback and code review on a weekly basis.",
    "Led a team of students that emulates a real work environment using the agile methodology.",
    "Mentored students on how to learn effectively and solve programming problems.",
    "Reviewed student code and giving feedback on areas of improvement.",
    "Led daily standup meetings to build camaraderie, facilitate sharing of ideas and work progress, and provide guidance for that week’s study material.",
    "Delivered supplemental lectures on various topics related to software engineering.",
    "Fill out reports on student's attendance, progress, projects, team collaboration, and work.",
  ],
}

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LambdaImg = styled.img`
  width: 40%;
`;

/********************************************* Component ******************************************/
const LambdaSchool = props => {
  return (
    <DivWrapper>
      <LambdaImg src={require('../../../../assets/img/LambdaSchoolWhite.svg')} alt='' />
      <WorkDetailsWrapper workDetails={workDetails} />
    </DivWrapper>
  );
};

export default LambdaSchool;