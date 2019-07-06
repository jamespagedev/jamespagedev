import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import DivProject from '../../components/Career/Projects/DivProject.js';

// Actions
import { setCareerProjectImgModal, techStackToggleFullDisplay, summaryToggleFullDisplay } from '../../reduxstore/actions/index.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
`;

const H1Title = styled.h1`
  display: flex;
  margin: 0 0 25px 0;
  text-decoration: underline;
  user-select: none;
`;

/********************************************* Component ******************************************/
const CareerPageTechSkills = props => {
  let zIndex = 1000;
  return (
    <DivWrapper>
      <H1Title>Top&nbsp;Five&nbsp;Projects</H1Title>
      {props.projectsData.map((project, projectNumber) => {
        zIndex -= 2;
        return (projectNumber % 2 === 0) ? (
          <DivProject imgRight project={project} key={projectNumber} zIndex={zIndex} setCareerProjectImgModal={props.setCareerProjectImgModal} totalTechStacks={project.techStack.length} techStackToggleFullDisplay={props.techStackToggleFullDisplay} summaryToggleFullDisplay={props.summaryToggleFullDisplay}  projectNumber={projectNumber} />
        ) : (
          <DivProject project={project} key={projectNumber} zIndex={zIndex} setCareerProjectImgModal={props.setCareerProjectImgModal} totalTechStacks={project.techStack.length} techStackToggleFullDisplay={props.techStackToggleFullDisplay} summaryToggleFullDisplay={props.summaryToggleFullDisplay}  projectNumber={projectNumber} />
        );
      })}
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    projectsData: state.project.projectsData
  };
};

export default connect(
  mapStateToProps,
  { setCareerProjectImgModal, techStackToggleFullDisplay, summaryToggleFullDisplay,  }
)(CareerPageTechSkills);