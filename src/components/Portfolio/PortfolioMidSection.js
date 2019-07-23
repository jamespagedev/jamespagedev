import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
// Note: phone view 650 width.

const DivMid = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #004E95;
  background: linear-gradient(85deg, #013A6B 49.75%, #7FFF00 50%, #7FFF00 calc(50% + 3px), #004E95 calc(50% + 4px));

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const DivProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 51%;
  align-items: center;
  margin-right: 25px;

  @media (max-width: 660px) {
    width: 100%;
    border-top: 2px solid #7FFF00;
    border-bottom: 2px solid #7FFF00;
    height: calc(100vh - 60px);
    background-color: #004E95;
  }
`;

const DivProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  align-items: center;
  padding: 0 45px 0 5px;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

const DivProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
  background: gray;
  margin-bottom: 25px;
`;

const DivResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  align-items: center;

  @media (max-width: 660px) {
    width: 100%;
    border-top: 2px solid #7FFF00;
    border-bottom: 2px solid #7FFF00;
    height: calc(100vh - 60px);
    background-color: #013A6B;
  }
`;

const H1Resumes = styled.h1`
  margin: 0.67em 0 0 0;
  user-select: none;
  color: white;
`;

const H1Projects = styled.h1`
  user-select: none;
  color: white;
`;

const DivResumeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 695px;

  @media (max-width: 660px) {
    margin: 0;
    max-width: 520px;
  }
`;

const DivResumeImg = styled.div`
  display: flex;
  margin: 15px;
  position: relative;
  border: 2px solid black;

@media (max-width: 660px) {
  margin: 10px;
}

  &::before {
    content: '';
    font-size: ${props => props.pNamefontSize};
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to bottom, #ecd7af 0%, rgba(183, 158, 112, 0) 100%);
    opacity: 0;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
    transition: all .3s;
  }

  &:hover {
    box-shadow: 0 15px 45px 0px #888888;

    p {
      text-decoration: underline;
      z-index: 2;
    }
  }
`;

const AWordDownload = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  cursor: pointer;
  padding: 15px;
  background: #FFFFFF;

  @media (max-width: 800px) {
    width: 115px;
    padding: 5px;
  }

  @media (max-width: 660px) {
    width: 108px;
  }
`;

const ImgPdf = styled.img`
  margin-top: 20px;
`;

const PResumeTitle = styled.p`
  margin: 0;
  font-weight: bold;
  user-select: none;
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;



/********************************************* Component ******************************************/
const PortfolioMidSection = props => {
  return (
    <DivMid>
      <DivProjectSection>
        <H1Projects>Project(s)</H1Projects>
        <DivProjectsContainer>
          <DivProject></DivProject>
          <DivProject></DivProject>
          <DivProject></DivProject>
          <DivProject></DivProject>
        </DivProjectsContainer>
      </DivProjectSection>
      <DivResumeSection>
        <H1Resumes>Resume(s)</H1Resumes>
        <DivResumeContainer>
          <DivResumeImg projectName="Front-End Dev" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Front-End&nbsp;Dev</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Full Stack Dev" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Full&nbsp;Stack&nbsp;Dev</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Back-End Dev" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Back-End&nbsp;Dev</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Software Dev" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Software&nbsp;Dev</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="IT Admin" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>IT&nbsp;Admin</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Test Engineer" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Test&nbsp;Engineer</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
        </DivResumeContainer>
      </DivResumeSection>
    </DivMid>
  );
};

export default PortfolioMidSection;