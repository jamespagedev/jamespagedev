import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  width: 66%;
  background-color: gray;
`;

const DivSummary = styled.div`
  display: flex;
  position: absolute;
  z-index: ${props => props.zIndex};
  flex-direction: column;
  overflow: ${props => props.summaryDisplayFull === 'true' ? 'visible' : 'hidden'};
  width: 100%;
  height: ${props => props.hasExpand === 'true' ? 'auto' : '120px'};
  margin: 0;
  cursor: ${props => props.hasExpand === 'true' ? 'pointer' : 'auto'};
  border-bottom: 2px solid black;
  background-color: gray;

  &:hover {
    p {
      span {
        color: ${Colors.Turquoise};
      }
      i {
        color: ${Colors.Turquoise};
      }
    }
    button {
      color: ${Colors.Turquoise};
    }
  }

  p {
    user-select: none;
    height: ${props => props.summaryDisplayFull === 'true' ? 'auto' : '75px'};
    span {
      user-select: none;
    }
    i {
      user-select: none;
      color: white;
    }
  }
`;

const H4Summary = styled.h4`
  align-self: center;
  margin: 5px 0 0 0;
  user-select: none;
`;

const PSummary = styled.p`
  font-size: 14px;
  top: 30px;
  width: 100%;
  padding: 5px 20px 10px;
  user-select: none;
  background-color: gray;
  margin: 0;
`;

const DivTechStack = styled.div`
  display: flex;
  position: absolute;
  z-index: ${props => props.zIndex};
  justify-content: ${props => props.hasExpand === 'true' ? 'space-between' : 'flex-start'};
  top: 120px;
  overflow: ${props => props.techStackDisplayFull === 'true' ? 'visible' : 'hidden'};
  flex-direction: column;
  width: 100%;
  height: ${props => props.techStackDisplayFull === 'true' ? 'auto' : '40%'};
  margin: 0;
  border-bottom: 2px solid black;
  background-color: inherit;
  padding-bottom: 5px;
  cursor: ${props => props.hasExpand === 'true' ? 'pointer' : 'auto'};

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding-right: 5px;
    user-select: none;

    li {
      width: 40%;
      user-select: none;
    }
  }

  &:hover {
    button {
      color: ${Colors.Turquoise};
    }
  }
`;

const H4TechStack = styled.h4`
  align-self: center;
  margin: 5px;
  user-select: none;
`;

const ButtonToggleFullDisplay = styled.button`
  background-color: transparent;
  text-align: center;
  border: none;
  width: 100%;
  padding: 0 0 5px 0;
  outline: none;
  color: white;
  cursor: pointer;
  user-select: none;
`;

const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
`;

const DivWebsite = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.oneLink ? '100%' : '50%'};
  margin: 0;
  height: 100%;
`;

const H4Website = styled.h4`
  margin: 10px 0 0 0;
  user-select: none;
`;

const AWebsite = styled.a`
  user-select: none;
  padding: 10px;

  &:hover {
    color: ${Colors.Turquoise};
  }
`;

/********************************************* Component ******************************************/
const DivProjectDetails = props => {
  return (
    <DivWrapper>
      <DivSummary onClick={() => props.summaryToggleFullDisplay(props.projectNumber, props.project.summary.length)} zIndex={props.zIndex} summaryDisplayFull={props.project.summaryDisplayFull.toString()} hasExpand={(props.project.summary.length > 1).toString()}>
        <H4Summary>Summary</H4Summary>
        {props.project.summary.length === 1 ? (<PSummary>{props.project.summary[0]}</PSummary>) : (
          <PSummary>{props.project.summary[0]}{props.project.summaryDisplayFull && props.project.summary[1]}</PSummary>
        )}
        {props.project.summary.length > 1 && <ButtonToggleFullDisplay>{props.project.summaryDisplayFull ? 'Collapse [-]' : 'Expand [+]'}</ButtonToggleFullDisplay>}
      </DivSummary>
      <DivTechStack techStackDisplayFull={props.project.techStackDisplayFull.toString()} onClick={() => props.techStackToggleFullDisplay(props.projectNumber, props.totalTechStacks)} zIndex={props.zIndex - 1} hasExpand={(props.project.techStack.length > 4).toString()}>
        <H4TechStack>Tech&nbsp;Stack</H4TechStack>
        <ul>
          {props.project.techStackDisplayFull ? (
            props.project.techStack.map((techItem, i) => <li key={i}>{techItem}</li>)
          ) : (
            props.project.techStack.map((techItem, i) => i < 4 && <li key={i}>{techItem}</li>)
          )}
        </ul>
        {props.project.techStack.length > 4 && <ButtonToggleFullDisplay>{props.project.techStackDisplayFull ? 'Collapse [-]' : 'Expand [+]'}</ButtonToggleFullDisplay>}
      </DivTechStack>
      <DivLinks>
        <H4Website>Website</H4Website>
        <DivWebsite>
          {(props.project.links.website[0] === 'None') ? (
            <DivLink oneLink>
              {props.project.links.github.map((githubLink, i) => <AWebsite href={githubLink} target='_blank' draggable="false" rel='noopener noreferrer' key={i}>github</AWebsite>)}
            </DivLink>
          ) : (
            <React.Fragment>
              <DivLink>
                {props.project.links.github.map((githubLink, i) => <AWebsite href={githubLink} target='_blank' draggable="false" rel='noopener noreferrer' key={i}>github</AWebsite>)}
              </DivLink>
              <DivLink>
                {props.project.links.website.map((websiteLink, i) => <AWebsite href={websiteLink} target='_blank' draggable="false" rel='noopener noreferrer' key={i}>Website&nbsp;Link</AWebsite>)}
              </DivLink>
            </React.Fragment>
          )}
        </DivWebsite>
      </DivLinks>
    </DivWrapper>
  );
};

export default DivProjectDetails;