import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import homeBackgroundImg from '../assets/img/cloudsMain.png';
import myFaceImgImg from '../assets/img/myFace.png';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  min-width: 100%;
`;

const DivImgBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${homeBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-width: 100%;
  min-height: 100%;

  h2 {
    width: 100%;
    text-shadow: 2px 1px 20px cornflowerblue;
    color: #500cd2;
    font-size: 22px;
    text-align: center;
  user-select: none;
  }
`;

const DivOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 70%;
  padding: 25px;
  background: rgba(255,255,255,0.6);
  border-radius: 15px;
`;

const ImgFace = styled.img`
  width: 120px;
  height: 150px;
  margin-top: 230px;
  border-radius: 15px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
`;

const LinkContact = styled(Link)`
  color: #2b257b;
`;

/********************************************* Component ******************************************/
const HomePage = props => {
  return (
    <DivWrapper>
      <DivImgBackground>
        <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
        <DivOverlay>
          <h2>Greetings, thank you for taking the time to visit my website. I'm a software developer who enjoys working on front-end, back-end, full stack, automation, and systems. My experience ranges in many different tech stacks over the years of being in industry. I enjoy learning new technologies and coming up with better coding architectures. Feel free to browse around if you want to find out more about me. If you like what you see... feel free to <LinkContact to={`${props.contactLink}`} draggable="false">contact</LinkContact> me.</h2>
        </DivOverlay>
      </DivImgBackground>
    </DivWrapper>
  );
};

export default HomePage;