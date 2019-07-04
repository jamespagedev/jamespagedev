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
  background-color: ${props => props.nestedColor === 'true' && `#646464`};
  width: 100%;
  margin-bottom: ${props => props.nestedColor === 'true' && `15px`};
`;

const PSkill = styled.p`
  margin: 10px;
  user-select: none;
`;

/********************************************* Component ******************************************/
const OperatingSystems = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">Operating&nbsp;Systems:</H3Title>
      {props.used ? (
        // skills used
        <div>
          <DivSubSkills nestedColor='true'>
            <PSkill>Windows&nbsp;95</PSkill>
            <PSkill>Windows&nbsp;98</PSkill>
            <PSkill>Windows&nbsp;ME</PSkill>
            <PSkill>Windows&nbsp;XP</PSkill>
            <PSkill>Windows&nbsp;Vista</PSkill>
            <PSkill>Windows&nbsp;7</PSkill>
            <PSkill>Windows&nbsp;10</PSkill>
            <PSkill>Windows&nbsp;Server&nbsp;2000</PSkill>
            <PSkill>Windows&nbsp;Server&nbsp;2003</PSkill>
            <PSkill>Windows&nbsp;Server&nbsp;2008</PSkill>
            <PSkill>Windows&nbsp;Embedded&nbsp;Devices&nbsp;(Tablets&nbsp;Phones)</PSkill>
          </DivSubSkills>
          <DivSubSkills nestedColor='true'>
            <PSkill>Linux&nbsp;(Redhat)</PSkill>
            <PSkill>Linux&nbsp;(Ubuntu)</PSkill>
            <PSkill>Linux&nbsp;(Kubuntu)</PSkill>
            <PSkill>Linux&nbsp;(CentOS)</PSkill>
          </DivSubSkills>
          <DivSubSkills nestedColor='true'>
            <PSkill>VMware</PSkill>
            <PSkill>Vagrant</PSkill>
          </DivSubSkills>
        </div>
      ) : (
        // skills to learn
        <DivSubSkills>
          <PSkill>MacOS</PSkill>
        </DivSubSkills>
      )}
    </DivWrapper>
  );
};

export default OperatingSystems;