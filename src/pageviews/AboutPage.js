import React from 'react';
import styled from 'styled-components';

import contactBackgroundImg from '../assets/img/cityNightLights.png';

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
    margin: 0 0 0 10px;
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
  justify-content: flex-start;
  height: 100%;
  width: 450px;

  h2 {
    align-self: center;
    text-decoration: underline;
    margin-top: 0;
  }

  p {
    user-select: none;
  }
`;

const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 450px;

  h2 {
    align-self: center;
    text-decoration: underline;
    margin-top: 0;
  }

  p {
    width: 100%;
    margin: 0;
    user-select: none;
  }
`;

const PPadding = styled.p`
  padding: 10px;
`;

const PPaddingTop = styled.p`
  padding: 10px 0 0 0;
`;

const DivLineBreak = styled.div`
  display: block;
  width: 100%;
  border-top: 1px solid #cacaca;
`;

/********************************************* Component ******************************************/
const AboutPage = props => {
  return (
    <DivWrapper>
      <DivImgBackground>
        <DivContainer>
          <h1>About</h1>
          <DivSides>
            <DivLeft>
              <h2 draggable="false">Myself</h2>
              <p draggable="false">My name is James, and I enjoy writting code for a living. I've always loved working with computers and technology ever since I was 18 (almost 2 decades ago). Currently, I am willing to relocate for my next position I take on.</p>
              <p>For the next position I take on, I want it to be one I will stay at for at least 10 years. I've felt I have worked enough tech positions to get a well-rounded experience in the industry. Now I'm looking to settle in with a company, continue my success, and provide value.</p>
              <p>I really enjoy learning tech stacks, and figuring ways to piece them together building an architecture. I also am always looking for better ways to improve my coding patterns/habbits. Normally, during the weekends I'll spend my time learning a new techstack, or improving upon ones I have already worked with.</p>
              <p>I'm currently available in the market to accept a new job. So if you like what you see here, feel free to contact me and I'll reply first chance I get.</p>
            </DivLeft>
            <DivRight>
              <h2 draggable="false">This&nbsp;Website</h2>
              <DivLineBreak/>
              <PPadding draggable="false">Home: Landing page, with a image of me and a brief intro of myself.</PPadding>
              <DivLineBreak/>
              <PPaddingTop>Career:</PPaddingTop>
              <ul>
                <li>Resume: Contains 6 resume's for specific positions. Also has linkedin and github.</li>
                <li>Work&nbsp;History: Positions I have worked and details about them.</li>
                <li>Education: College, courses, coding bootamp, and books I've read.</li>
                <li>Skills: Skills I have used, and skills I am planning on learning.</li>
                <li>Projects: A brief overview on some of the software projects I have worked on. These projects contain a summary, the tech stack, a github link, and some a live site view.</li>
              </ul>
              <DivLineBreak/>
              <PPadding>Hobbies: More about the things I generally like to do.</PPadding>
              <DivLineBreak/>
              <PPadding>About: Details about this website</PPadding>
              <DivLineBreak/>
              <PPadding>Contact: Way(s) to get in touch with me.</PPadding>
              <DivLineBreak/>
            </DivRight>
          </DivSides>
        </DivContainer>
      </DivImgBackground>
    </DivWrapper>
  );
};

export default AboutPage;