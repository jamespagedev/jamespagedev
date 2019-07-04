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
const BackEnd = props => {
  return (
    <DivWrapper>
      <H3Title draggable="false">Back&nbsp;End:</H3Title>
      {props.used ? (
        // skills used
        <DivSubSkills>
          <PSkill>NodeJS</PSkill>
          <PSkill>Express</PSkill>
          <PSkill>BcryptJS</PSkill>
          <PSkill>Knex</PSkill>
          <PSkill>Dotenv</PSkill>
          <PSkill>Postgress</PSkill>
          <PSkill>Sqlite3</PSkill>
          <PSkill>Stripe</PSkill>
          <PSkill>Jsonwebtoken</PSkill>
          <PSkill>CORS</PSkill>
          <PSkill>Morgan</PSkill>
          <PSkill>Faker</PSkill>
          <PSkill>Jimp</PSkill>
          <PSkill>Helmet</PSkill>
          <PSkill>Sessions</PSkill>
          <PSkill>Cookies</PSkill>
          <PSkill>UUID</PSkill>
          <PSkill>Supertest</PSkill>
          <PSkill>Heroku</PSkill>
          <PSkill>Relational&nbsp;Databases</PSkill>
          <PSkill>RESTful&nbsp;Architecture</PSkill>
          <PSkill>SQL</PSkill>
        </DivSubSkills>
      ) : (
        // skills to learn
        <DivSubSkills>
          <PSkill>AWS</PSkill>
          <PSkill>Django</PSkill>
        </DivSubSkills>
      )}
    </DivWrapper>
  );
};

export default BackEnd;