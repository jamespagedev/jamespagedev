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
const Others = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">Others:</H3Title>
      {props.used ? (
        // skills used
        <DivSubSkills>
          <PSkill>Swing&nbsp;(Java GUI)</PSkill>
          <PSkill>Cassandra&nbsp;(Java Database)</PSkill>
          <PSkill>Data&nbsp;Parsing</PSkill>
          <PSkill>VNC</PSkill>
          <PSkill>QPST</PSkill>
          <PSkill>QXDM</PSkill>
          <PSkill>Git</PSkill>
          <PSkill>Github</PSkill>
          <PSkill>Windbg</PSkill>
          <PSkill>Putty</PSkill>
          <PSkill>Explorer++</PSkill>
          <PSkill>VirtualEthernet</PSkill>
          <PSkill>MS&nbsp;Office</PSkill>
          <PSkill>Trace32</PSkill>
          <PSkill>Jira</PSkill>
          <PSkill>Prism</PSkill>
          <PSkill>Agile&nbsp;Project&nbsp;Management</PSkill>
          <PSkill>Algorithms</PSkill>
          <PSkill>Automated&nbsp;Unit&nbsp;Testing</PSkill>
          <PSkill>Big-O&nbsp;Notation</PSkill>
          <PSkill>Computer&nbsp;Architecture</PSkill>
          <PSkill>Data&nbsp;Structures</PSkill>
          <PSkill>Graphs</PSkill>
          <PSkill>Integration&nbsp;Testing</PSkill>
          <PSkill>Project&nbsp;Management</PSkill>
          <PSkill>Teamwork&nbsp;{`&`}&nbsp;Collaboration</PSkill>
          <PSkill>Time&nbsp;Management&nbsp;Techniques</PSkill>
          <PSkill>Polya's&nbsp;Problem&nbsp;Solving&nbsp;Technique</PSkill>
        </DivSubSkills>
      ) : (
        // skills to learn
        <DivSubSkills>
          <PSkill>Figma</PSkill>
          <PSkill>Jenkins</PSkill>
          <PSkill>Docker</PSkill>
        </DivSubSkills>
      )}
    </DivWrapper>
  );
};

export default Others;