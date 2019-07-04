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
const FrontEnd = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">Front&nbsp;End:</H3Title>
      {props.used ? (
        // skills used
        <DivSubSkills>
          <PSkill>HTML</PSkill>
          <PSkill>CSS</PSkill>
          <PSkill>LESS</PSkill>
          <PSkill>DOM&nbsp;(Javascript)</PSkill>
          <PSkill>React</PSkill>
          <PSkill>Redux</PSkill>
          <PSkill>React-Router</PSkill>
          <PSkill>Jest-Dom</PSkill>
          <PSkill>Prop-Types</PSkill>
          <PSkill>Auth0</PSkill>
          <PSkill>Axios</PSkill>
          <PSkill>Moment</PSkill>
          <PSkill>Styled-Components</PSkill>
          <PSkill>Stripe</PSkill>
          <PSkill>Netlify</PSkill>
          <PSkill>Bootstrap</PSkill>
          <PSkill>Responsive&nbsp;Design</PSkill>
          <PSkill>Responsive&nbsp;Programming</PSkill>
          <PSkill>Single&nbsp;Page&nbsp;Applications</PSkill>
        </DivSubSkills>
      ) : (
        // skills to learn
        <DivSubSkills>
          <PSkill>GraphQL</PSkill>
          <PSkill>GSAP</PSkill>
        </DivSubSkills>
      )}
    </DivWrapper>
  );
};

export default FrontEnd;