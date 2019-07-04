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
const IDEs = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">IDE's:</H3Title>
      {props.used ? (
        // skills used
        <DivSubSkills>
          <PSkill>Notepad++</PSkill>
          <PSkill>VS&nbsp;Code</PSkill>
          <PSkill>VS&nbsp;Community</PSkill>
          <PSkill>Intellij</PSkill>
        </DivSubSkills>
      ) : (
        // skills to learn
        <DivSubSkills>
          <PSkill>Sublime</PSkill>
          <PSkill>VIM</PSkill>
        </DivSubSkills>
      )}
    </DivWrapper>
  );
};

export default IDEs;