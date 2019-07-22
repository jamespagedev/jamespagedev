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

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const DivProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media (max-width: 650px) {
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
  position: relative;
  top: 18%;
  width: 100%;
  align-items: center;
  padding: 0 45px 0 15px;

  @media (max-width: 650px) {
    top: 0!important;
    padding: 0 30px 0 30px;
  }

  @media (min-height: 1000px) {
    top: 25%;
  }

  @media (min-height: 1300px) {
    top: 40%;
  }
`;

const DivProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 125px;
  background: gray;
  margin-bottom: 25px;

  @media (max-width: 650px) {
    height: 100px;
  }
`;

const DivResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media (max-width: 650px) {
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
`;

const DivResumeImg = styled.div`
  display: flex;
  margin: 20px;
  position: relative;
  border: 2px solid black;

  &::before {
    content: '${props => props.projectName}';
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
      visibility: hidden;
    }
  }

  @media (max-width: 650px) {
    margin: 10px;
  }
`;

const AWordDownload = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  cursor: pointer;
  padding: 15px;
  background: #FFFFFF;

  @media (max-width: 800px) {
    width: 108px;
    padding: 5px;
  }
`;

const ImgPdf = styled.img`
  margin-top: 20px;
`;

const PResumeTitle = styled.p`
  margin: 0;
  font-weight: bold;
  user-select: none;
  font-size: 9px;
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
          <DivResumeImg projectName="Front-End Developer" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Front-End&nbsp;Developer</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Full Stack Developer" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Full&nbsp;Stack&nbsp;Developer</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Back-End Developer" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Back-End&nbsp;Developer</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="Software Developer" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>Software&nbsp;Developer</PResumeTitle>
              <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
            </AWordDownload>
          </DivResumeImg>
            <DivResumeImg projectName="IT/Network/Sys Admin" pNamefontSize="9px">
            <AWordDownload>
              <PResumeTitle>IT/Network/Sys&nbsp;Admin</PResumeTitle>
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