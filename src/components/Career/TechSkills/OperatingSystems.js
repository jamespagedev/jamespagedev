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
`;

const DivWindows = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #646464;
  width: 100%;
  margin-bottom: 15px;
`;

const DivLinux = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #646464;
  width: 100%;
  margin-bottom: 15px;
`;

const DivMac = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #646464;
  width: 100%;
  margin-bottom: 15px;
`;

const PSkill = styled.p`
  margin: 25px;
`;

/********************************************* Component ******************************************/
const OperatingSystems = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">Operating&nbsp;Systems:</H3Title>
      {props.used ? (
        // skills used
        <div>
          <DivWindows>
            <PSkill>Windows&nbsp;95</PSkill>
            <PSkill>Windows&nbsp;98</PSkill>
            <PSkill>Windows&nbsp;ME</PSkill>
            <PSkill>Windows&nbsp;XP</PSkill>
            <PSkill>Windows&nbsp;Vista</PSkill>
            <PSkill>Windows&nbsp;7</PSkill>
            <PSkill>Windows&nbsp;10</PSkill>
          </DivWindows>
          <DivLinux>
            <PSkill>Linux&nbsp;(Redhat)</PSkill>
            <PSkill>Linux&nbsp;(Ubuntu)</PSkill>
            <PSkill>Linux&nbsp;(Kubuntu)</PSkill>
            <PSkill>Linux&nbsp;(CentOS)</PSkill>
          </DivLinux>
        </div>
      ) : (
        // skills to learn
        <DivMac>
          <PSkill>MacOS</PSkill>
        </DivMac>
      )}
    </DivWrapper>
  );
};

export default OperatingSystems;