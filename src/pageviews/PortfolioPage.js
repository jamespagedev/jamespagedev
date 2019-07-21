import React from 'react';
import styled from 'styled-components';
import { Colors } from '../globals/CssMixins.js';

// images
import myFaceImgImg from '../assets/img/myFace.png';

/********************************************** Styles ********************************************/
// Note: phone view 650 width.
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

const DivHeaderBackground = styled.div`
  height: 58px;
  width: 100%;
  background-color: ${Colors.Vulcan};
  position: fixed;
  z-index: 10;
  top: 2px;
`;

const DivTop = styled.div`
  display: flex;
  margin-top: 60px;
  flex: 1;
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
  top: 4%;
  left: 4%;
  height: 50%;
  width: 41%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 650px) {
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    border-bottom: 2px solid #7FFF00;
    background: #004E95;
    justify-content: flex-start;
  }
`;

const H3Center = styled.h3`
  text-align: center;
  margin: 0;

  @media (max-width: 650px) {
    position: relative;
    top: 10%;
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
    top: 6%;
  }
`;

const DivTopSkills = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10%;
  left: 14%;
  height: 85%;
  width: 41%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 650px) {
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    border-top: 2px solid #7FFF00;
    background: #013A6B;
  }
`;

const H1WhiteUnderline = styled.h1`
  color: white;
  margin: 0;
  text-decoration: underline;
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
`;

const DivRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const ImgSkill = styled.img`
  max-height: 80px;
  max-width: 80px;
`;

/********************************************* Component ******************************************/
const PortfolioPage = props => {
  return (
    <DivWrapper>
      <DivHeaderBackground />
      <DivTop>
        <DivTopIntro>
          <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
          <H3Center>Greetings, I'm a fullstack developer. I also kill scorpions around my office, watch for rattle snakes when I leave the house, and dodge killer bee's while I'm being chased by coyotes getting to my car.</H3Center>
        </DivTopIntro>
        <DivTopSkills>
          <H1WhiteUnderline>Skills</H1WhiteUnderline>
          <DivTopSkillsCategory>
            <DivRow>
              <ImgSkill src={require('../assets/img/javascript.svg')} draggable="false" alt='javascript' />
              <ImgSkill src={require('../assets/img/python.svg')} draggable="false" alt='python' />
              <ImgSkill src={require('../assets/img/java.svg')} draggable="false" alt='java' />
            </DivRow>
            <DivRow>
              <ImgSkill src={require('../assets/img/c.svg')} draggable="false" alt='c' />
              <ImgSkill src={require('../assets/img/cpp.svg')} draggable="false" alt='cpp' />
              <ImgSkill src={require('../assets/img/powershell.svg')} draggable="false" alt='powershell' />
            </DivRow>
          </DivTopSkillsCategory>
          <DivTopSkillsCategory>
            <DivRow>
              <ImgSkill src={require('../assets/img/html5.svg')} draggable="false" alt='html5' />
              <ImgSkill src={require('../assets/img/css.svg')} draggable="false" alt='css' />
              <ImgSkill src={require('../assets/img/less.svg')} draggable="false" alt='less' />
            </DivRow>
            <DivRow>
              <ImgSkill src={require('../assets/img/react.svg')} draggable="false" alt='react' />
              <ImgSkill src={require('../assets/img/redux.svg')} draggable="false" alt='redux' />
              <ImgSkill src={require('../assets/img/axios.svg')} draggable="false" alt='axios' />
            </DivRow>
          </DivTopSkillsCategory>
          <DivTopSkillsCategory>
            <DivRow>
              <ImgSkill src={require('../assets/img/nodejs.svg')} draggable="false" alt='nodejs' />
              <ImgSkill src={require('../assets/img/express.svg')} draggable="false" alt='express' />
              <ImgSkill src={require('../assets/img/knex.svg')} draggable="false" alt='knex' />
            </DivRow>
            <DivRow>
              <ImgSkill src={require('../assets/img/postgresql.svg')} draggable="false" alt='postgresql' />
              <ImgSkill src={require('../assets/img/stripe.svg')} draggable="false" alt='stripe' />
              <ImgSkill src={require('../assets/img/restfulapi.svg')} draggable="false" alt='restfulapi' />
            </DivRow>
          </DivTopSkillsCategory>
        </DivTopSkills>
      </DivTop>
    </DivWrapper>
  );
};

export default PortfolioPage;