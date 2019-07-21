import React from 'react';
import styled from 'styled-components';
import { Colors } from '../globals/CssMixins.js';

// images
import myFaceImgImg from '../assets/img/myFace.png';

/********************************************** Styles ********************************************/
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
  margin-top: 60px;
  height: 100%;
  background-color: #013A6B;
  background: linear-gradient(95deg, #004E95 49.75%, #7FFF00 50%, #7FFF00 calc(50% + 3px), #013A6B calc(50% + 4px));
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
`;

const H3Center = styled.h3`
  text-align: center;
  margin: 0;
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
`;

const DivTopSkills = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 35%;
  left: 55%;
  height: 75%;
  width: 41%;
  justify-content: space-evenly;
  align-items: center;
`;

const H1WhiteUnderline = styled.h1`
  color: white;
  margin: 0;
  text-decoration: underline;
  user-select: none;
`;

const DivTopSkillsLanguage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 25%;
  background: rgba(224, 224, 224, 0.5);
  border-radius: 15px;
  padding: 10px;
`;

const DivTopSkillsFrontEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 25%;
  background: rgba(224, 224, 224, 0.5);
  border-radius: 15px;
  padding: 10px;
`;

const DivTopSkillsBackEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 25%;
  background: rgba(224, 224, 224, 0.5);
  border-radius: 15px;
  padding: 10px;
`;

const DivRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const ImgSkill = styled.img`
  max-height: 60px;
  max-width: 70px;
`;

/********************************************* Component ******************************************/
const PortfolioPage = props => {
  return (
    <DivWrapper>
      <DivHeaderBackground />
      <DivTop>
        <DivTopIntro>
          <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
          <H3Center>Greetings, I'm a fullstack developer. During my time off working, I kill scorpions around my office, watch for rattle snakes when I leave the house, and dodge killer bee's while I'm being chased by coyotes getting to my car.</H3Center>
        </DivTopIntro>
        <DivTopSkills>
          <H1WhiteUnderline>Skills</H1WhiteUnderline>
          <DivTopSkillsLanguage>
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
          </DivTopSkillsLanguage>
          <DivTopSkillsFrontEnd>
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
          </DivTopSkillsFrontEnd>
          <DivTopSkillsBackEnd>
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
          </DivTopSkillsBackEnd>
        </DivTopSkills>
      </DivTop>
    </DivWrapper>
  );
};

export default PortfolioPage;