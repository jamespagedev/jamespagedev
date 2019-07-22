import React from 'react';
import styled from 'styled-components';

// images
import myFaceImgImg from '../../assets/img/myFace.png';

/********************************************** Styles ********************************************/
// Note: phone view 650 width.

const DivTop = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #013A6B;
  background: linear-gradient(95deg, #004E95 49.75%, #7FFF00 50%, #7FFF00 calc(50% + 3px), #013A6B calc(50% + 4px));

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const DivTopIntro = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10%;
  left: 4%;
  height: 50%;
  width: 41%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 650px) {
    top: 0;
    left: 0;
    height: calc(100vh - 60px);
    width: 100%;
    border-bottom: 2px solid #7FFF00;
    background: #004E95;
    justify-content: flex-start;
  }
`;

const H3Center = styled.h3`
  text-align: center;
  margin: 30px 0 0 0;
  color: white;
  padding: 0 15px;

  @media (max-width: 650px) {
    position: relative;
    top: 24%;
  }
`;

const ImgFace = styled.img`
  width: 120px;
  height: 150px;
  border-radius: 15px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;

  @media (max-width: 650px) {
    position: relative;
    top: 20%;
  }
`;

const DivTopSkills = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 15%;
  left: 14%;
  height: 85%;
  width: 41%;
  align-items: center;

  @media (max-width: 650px) {
    top: 0!important;
    left: 0;
    height: calc(100vh - 60px);
    width: 100%;
    border-top: 2px solid #7FFF00;
    border-bottom: 2px solid #7FFF00;
    background: #013A6B;
    justify-content: center;
  }

  @media (max-height: 840px) {
    top: 5%;
  }

  @media (min-height: 1000px) {
    top: 30%;
  }
`;

const H1White = styled.h1`
  color: white;
  margin: 0;
  user-select: none;
`;

const DivTopSkillsCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 29%;
  background: rgba(224, 224, 224, 0.5);
  border-radius: 15px;
  padding: 10px;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;

const DivRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const ImgSkill = styled.img`
max-height: 80px;
max-width: 80px;

  @media (max-width: 650px) {
  max-height: 65px;
  max-width: 70px;
  }
`;

/********************************************* Component ******************************************/
const PortfolioTopSection = props => {
  return (
    <DivTop>
      <DivTopIntro>
        <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
        <H3Center>Greetings, I'm a fullstack developer. I also kill scorpions around my office, watch for rattle snakes when I leave the house, and dodge killer bee's while I'm being chased by coyotes getting to my car.</H3Center>
      </DivTopIntro>
      <DivTopSkills>
        <H1White>Skills</H1White>
        <DivTopSkillsCategory>
          <DivRow>
            <ImgSkill src={require('../../assets/img/javascript.svg')} draggable="false" alt='javascript' />
            <ImgSkill src={require('../../assets/img/python.svg')} draggable="false" alt='python' />
            <ImgSkill src={require('../../assets/img/java.svg')} draggable="false" alt='java' />
          </DivRow>
          <DivRow>
            <ImgSkill src={require('../../assets/img/c.svg')} draggable="false" alt='c' />
            <ImgSkill src={require('../../assets/img/cpp.svg')} draggable="false" alt='cpp' />
            <ImgSkill src={require('../../assets/img/powershell.svg')} draggable="false" alt='powershell' />
          </DivRow>
        </DivTopSkillsCategory>
        <DivTopSkillsCategory>
          <DivRow>
            <ImgSkill src={require('../../assets/img/html5.svg')} draggable="false" alt='html5' />
            <ImgSkill src={require('../../assets/img/css.svg')} draggable="false" alt='css' />
            <ImgSkill src={require('../../assets/img/less.svg')} draggable="false" alt='less' />
          </DivRow>
          <DivRow>
            <ImgSkill src={require('../../assets/img/react.svg')} draggable="false" alt='react' />
            <ImgSkill src={require('../../assets/img/redux.svg')} draggable="false" alt='redux' />
            <ImgSkill src={require('../../assets/img/axios.svg')} draggable="false" alt='axios' />
          </DivRow>
        </DivTopSkillsCategory>
        <DivTopSkillsCategory>
          <DivRow>
            <ImgSkill src={require('../../assets/img/nodejs.svg')} draggable="false" alt='nodejs' />
            <ImgSkill src={require('../../assets/img/express.svg')} draggable="false" alt='express' />
            <ImgSkill src={require('../../assets/img/knex.svg')} draggable="false" alt='knex' />
          </DivRow>
          <DivRow>
            <ImgSkill src={require('../../assets/img/postgresql.svg')} draggable="false" alt='postgresql' />
            <ImgSkill src={require('../../assets/img/stripe.svg')} draggable="false" alt='stripe' />
            <ImgSkill src={require('../../assets/img/restfulapi.svg')} draggable="false" alt='restfulapi' />
          </DivRow>
        </DivTopSkillsCategory>
      </DivTopSkills>
    </DivTop>
  );
};

export default PortfolioTopSection;