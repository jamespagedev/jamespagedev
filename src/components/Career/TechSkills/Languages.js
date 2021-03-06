import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #848484;
  margin-bottom: 25px;
  padding: 20px;
`;

const H3Title = styled.div`
  user-select: none;
  font-weight: bold;
  margin-bottom: 5px;
  user-select: none;
`;

const DivSubSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
`;

const PSkill = styled.p`
  margin: 10px;
  user-select: none;
`;

/********************************************* Component ******************************************/
const Languages = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">Languages:</H3Title>
      {props.used ? (
        // skills used
        <DivSubSkills>
          <PSkill>Batch&nbsp;Scripts</PSkill>
          <PSkill>C</PSkill>
          <PSkill>C++</PSkill>
          <PSkill>Java</PSkill>
          <PSkill>Javascript</PSkill>
          <PSkill>Markdown</PSkill>
          <PSkill>Selenium&nbsp;(Firefox)</PSkill>
          <PSkill>Powershell</PSkill>
          <PSkill>Python</PSkill>
        </DivSubSkills>
      ) : (
        // skills to learn
        <DivSubSkills>
          <PSkill>C#</PSkill>
          <PSkill>Clojure</PSkill>
          <PSkill>Rust</PSkill>
        </DivSubSkills>
      )}
    </DivWrapper>
  );
};

export default Languages;