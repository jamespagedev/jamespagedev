import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Actions
import { selectResumeWordPosition, selectResumePdfPosition } from '../../reduxstore/actions/index.js';

// Globals
import { Colors } from '../../globals/CssMixins.js';
const { resumePositions } = require('../../globals/Variables.js');

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

const AWordDownload = styled.a`
  width: 303px;
  padding: 10px;

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const APdfDownload = styled.a`
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

const ALinkedIn = styled.a`
  width: 303px;
  padding: 10px;
  margin-left: -35px;

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const AGithub = styled.a`
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
      <H1Title>Resume</H1Title>
      <DivMain>
        <DivResume>
          <H3DownloadResume>View&nbsp;Resume</H3DownloadResume>
          <SelectPosition onChange={ev => {props.selectResumeWordPosition(ev, ev.target.value); props.selectResumePdfPosition(ev, ev.target.value)}}> {/* refactor into 1 function */}
            {resumePositions.map((position, i) => (
              <OptionPosition key={i} value={position}>
                {position}
              </OptionPosition>
            ))}
          </SelectPosition>
          <DivResumeButtons>
            <AWordDownload href={props.selectedWordResume} target='_blank'>
              <ImgWord src={require('../../assets/img/WordButton.png')} alt='' />
            </AWordDownload>
            <APdfDownload href={props.selectedPdfResume} target='_blank'>
              <ImgPdf src={require('../../assets/img/PdfButton.png')} alt='' />
            </APdfDownload>
          </DivResumeButtons>
        </DivResume>
        <DivLinkButtons>
          <ALinkedIn href='https://www.linkedin.com/in/james-page-94a1923b' target='_blank'>
            <ImgLinkedIn src={require('../../assets/img/linkedinbutton.png')} alt='' />
          </ALinkedIn>
          <AGithub href='https://github.com/jamespagedev' target='_blank'>
            <ImgGithub src={require('../../assets/img/GithubButton.png')} alt='' />
          </AGithub>
        </DivLinkButtons>
      </DivMain>
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    selectedWordResume: state.career.selectedWordResume,
    selectedPdfResume: state.career.selectedPdfResume
  };
};

export default connect(
  mapStateToProps,
  { selectResumeWordPosition, selectResumePdfPosition }
)(CareerPageMain);
