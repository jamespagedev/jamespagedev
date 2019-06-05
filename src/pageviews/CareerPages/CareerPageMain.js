import React from 'react';
import styled from 'styled-components';

// Globals
import { Colors } from '../../globals/CssMixins.js';
import { resumePositions } from '../../globals/Variables.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

const H1Title = styled.h1`
  display: flex;
  align-self: center;
  margin: 0 0 25px 0;
  text-decoration: underline;
`;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
`;

const DivResume = styled.div`
  display: flex;
  width: 100%;
  border-radius: 25px;
  background-color: ${Colors.darkerCodGray};
  align-items: center;
  flex-direction: column;
`;

const H3DownloadResume = styled.h3`
  margin: 25px 0;
`;

const SelectPosition = styled.select`
  border-radius: 8px;
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-align-last: center;
  outline: none;
`;

const OptionPosition = styled.option`
  font-size: 20px;
`;

const DivResumeButtons = styled.div`
  display: flex;
  margin: 25px 0;
  width: 100%;
  justify-content: space-around;
`;

const A_WordDownload = styled.a`
  width: 303px;
  padding: 10px;

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const A_PdfDownload = styled.a`
  width: 303px;
  padding: 10px;

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const ImgWord = styled.img`
  border-radius: 5px;
  opacity: 0.5;
`;

const ImgPdf = styled.img`
  border-radius: 21px;
  opacity: 0.5;
`;

const DivLinkButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const A_LinkedIn = styled.a`
  width: 303px;
  padding: 10px;
  margin-left: -35px;

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const A_Github = styled.a`
  width: 150px;
  padding: 10px;
  margin-right: 40px;

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const ImgLinkedIn = styled.img`
  border-radius: 5px;
  opacity: 0.5;
`;

const ImgGithub = styled.img`
  border-radius: 10px;
  opacity: 0.5;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const CareerPageMain = props => {
  return (
    <DivWrapper>
      <H1Title>Main</H1Title>
      <DivMain>
        <DivResume>
          <H3DownloadResume>Download&nbsp;Resume</H3DownloadResume>
          <SelectPosition>
            {resumePositions.map((position, i) => (
              <OptionPosition key={i} value={position}>
                {position}
              </OptionPosition>
            ))}
          </SelectPosition>
          <DivResumeButtons>
            <A_WordDownload href='https://www.linkedin.com/in/james-page-94a1923b' target='_blank'>
              <ImgWord src={require('../../assets/img/WordButton.png')} alt='' />
            </A_WordDownload>
            <A_PdfDownload href='https://www.linkedin.com/in/james-page-94a1923b' target='_blank'>
              <ImgPdf src={require('../../assets/img/PdfButton.png')} alt='' />
            </A_PdfDownload>
          </DivResumeButtons>
        </DivResume>
        <DivLinkButtons>
          <A_LinkedIn href='https://www.linkedin.com/in/james-page-94a1923b' target='_blank'>
            <ImgLinkedIn src={require('../../assets/img/linkedinbutton.png')} alt='' />
          </A_LinkedIn>
          <A_Github href='https://github.com/jamespagedev' target='_blank'>
            <ImgGithub src={require('../../assets/img/GithubButton.png')} alt='' />
          </A_Github>
        </DivLinkButtons>
      </DivMain>
    </DivWrapper>
  );
};

export default CareerPageMain;
