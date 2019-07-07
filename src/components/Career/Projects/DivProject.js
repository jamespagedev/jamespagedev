import React from 'react';
import styled from 'styled-components';

// Components
import DivProjectDetails from './DivProjectDetails.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  border-bottom: 2px solid black;
  margin-bottom: 40px;
`;

const DivProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const DivProjectImage = styled.div`
  display: flex;
  width: 34%;
  background: lightgray;
  position: relative;

  &::before {
    content: '${props => props.projectName}';
    font-size: ${props => props.pNamefontSize};
    font-family: ${props => props.pNameFontFamily};
    text-align: center;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, #B79E70 0%, rgba(183, 158, 112, 0) 100%);
    opacity: 0;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
    transition: all .3s;
  }
`;

const ImgProject = styled.img`
  cursor: pointer;
  user-select: none;
`;

/********************************************* Component ******************************************/
const DivProject = props => {
  return (
    <DivWrapper>
      { props.imgRight ? (
          <DivProjectWrapper>
            <DivProjectDetails project={props.project} zIndex={props.zIndex} totalTechStacks={props.totalTechStacks} techStackToggleFullDisplay={props.techStackToggleFullDisplay} summaryToggleFullDisplay={props.summaryToggleFullDisplay} projectNumber={props.projectNumber} />
            <DivProjectImage onClick={() => props.setCareerProjectImgModal(true, props.project.projectPreviewImg)} projectName={props.project.projectName.join(' ')} pNamefontSize={props.project.pNamefontSize} pNameFontFamily={props.project.pNameFontFamily}>
              <ImgProject src={require(`../../../assets/img/${props.project.projectPreviewImg}.png`)} draggable="false" alt="" />
            </DivProjectImage>
          </DivProjectWrapper>
        ) : (
          <DivProjectWrapper>
            <DivProjectImage projectName={props.project.projectName.join(' ')} pNamefontSize={props.project.pNamefontSize} pNameFontFamily={props.project.pNameFontFamily}>
              <ImgProject onClick={() => props.setCareerProjectImgModal(true, props.project.projectPreviewImg)} src={require(`../../../assets/img/${props.project.projectPreviewImg}.png`)} draggable="false" alt="" />
            </DivProjectImage>
            <DivProjectDetails project={props.project} zIndex={props.zIndex} totalTechStacks={props.totalTechStacks} techStackToggleFullDisplay={props.techStackToggleFullDisplay} summaryToggleFullDisplay={props.summaryToggleFullDisplay} projectNumber={props.projectNumber} />
          </DivProjectWrapper>
        )
      }
    </DivWrapper>
  );
};

export default DivProject;