import React from 'react';
import styled from 'styled-components';

import contactBackgroundImg from '../assets/img/trainStation.png';

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
  position: relative;
  align-items: center;
  background-image: url(${contactBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-width: 100%;
  min-height: 100%;
`;

const DivContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 100px;
  z-index: 2;
  height: 75%;
  width: 75%;
  background-color: rgba(255,255,255,0.6);
  padding: 25px;

  h1 {
    font-size: 72px;
    font-family: "sans serif";
    text-align: center;
    user-select: none;
    margin: 10px;
  }
`;

const DivSides = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50%;
  width: 450px;

  p {
    user-select: none;
    font-size: 22px;
  }
`;

const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 65%;
  width: 450px;

  p {
    width: 100%;
    text-align: center;
    font-size: 22px;
    margin: 0;
    padding: 25px;

    &:not(:nth-child(2)) {
      user-select: none;
    }
  }
`;

const SpanUserSelectNone = styled.span`
  user-select: none;
`;

const DivLineBreak = styled.div`
  display: block;
  width: 100%;
  border-top: 1px solid #cacaca;
`;

/********************************************* Component ******************************************/
const ContactPage = props => {
  return (
    <DivWrapper>
      <DivImgBackground>
        <DivContainer>
          <h1>Contact</h1>
          <DivSides>
            <DivLeft>
              <p draggable="false">If you have any employment opportunities or questions, feel free to send me an email. I will respond first chance I get.</p>
            </DivLeft>
            <DivRight>
              <DivLineBreak/>
              <p draggable="false"><SpanUserSelectNone>Email:&nbsp;</SpanUserSelectNone>jamespagedev@outlook.com</p>
              <DivLineBreak/>
              <p><a href="https://www.linkedin.com/in/james-page-94a1923b" target='_blank' draggable="false" rel='noopener noreferrer'>Linkedin</a></p>
              <DivLineBreak/>
              <p><a href="https://github.com/jamespagedev" target='_blank' draggable="false" rel='noopener noreferrer'>Github</a></p>
              <DivLineBreak/>
            </DivRight>
          </DivSides>
        </DivContainer>
      </DivImgBackground>
    </DivWrapper>
  );
};

export default ContactPage;