import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const H1PageTitle = styled.h1`
  text-decoration: underline;
  margin: 0 0 25px 0;
`;

const DivCareerSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
`;

const H3CareerCategory = styled.h3`
  width: 100%;
  margin: 0;
  padding: 1em 0;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  font-weight: normal;
`;

const SpanCategory = styled.span`
  font-weight: bold;
`;

/********************************************* Component ******************************************/
const CareerPageMain = props => {
  return (
    <DivWrapper>
      <H1PageTitle>Career</H1PageTitle>
      <DivCareerSummary>
        <H3CareerCategory><SpanCategory>Resume&nbsp;-&nbsp;</SpanCategory>Contains resume's for positions I am interested in working in. It also contains my linkedin and github.</H3CareerCategory>
        <H3CareerCategory><SpanCategory>Work&nbsp;History&nbsp;-&nbsp;</SpanCategory>Shows companies I have worked for both tech and non-tech. The details of my work responsibilities and what the work consisted of are shown for each company.</H3CareerCategory>
        <H3CareerCategory><SpanCategory>Education&nbsp;-&nbsp;</SpanCategory>Shows the college I went to, the degree's I got, and my transcripts. It also contains online courses I've taken, self-taught books I have read, and the things I have learned at Lambda School (Coding Bootcamp)</H3CareerCategory>
        <H3CareerCategory><SpanCategory>Tech&nbsp;Skills&nbsp;-&nbsp;</SpanCategory>Shows a wide range of skills I have worked with over the course of my career (there are a lot, and it's growing...). It also shows tech skills I have an interest in learning next.</H3CareerCategory>
        <H3CareerCategory><SpanCategory>Projects&nbsp;-&nbsp;</SpanCategory>Shows the top five projects I have worked on. I felt putting projects down that use a variety of tech stacks here. I will also add in all complete projects later (over 100 of them).</H3CareerCategory>
      </DivCareerSummary>
    </DivWrapper>
  );
};

export default CareerPageMain;