import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`;

const H1Title = styled.h1`
  text-decoration: underline;
  margin: 0 0 25px 0;
`;

const DivSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2TitleSection = styled.h1`
  margin: 25px 0 0 0;
`;

/********************************************* Component ******************************************/
const EducationMain = props => {
  return (
    <DivWrapper>
      <H1Title>Education</H1Title>
      <DivSection>
        <H2TitleSection>Summary</H2TitleSection>
        <p>My education has been and is a life-long journey. I've went through college, self-taught with books, projects for learning, study sessions with an experienced mentor, online courses, and a coding bootcamp. I am always looking to see what the next thing to learn is.</p>
        <p>I started building my first computer at age 19 when Pentium 3's were the new item. I spent a lot of time browsing forums for trouble shooting and optimizing my pc.</p>
        <p>At age 24, I knew I wanted to work with computers for a living, I just wasn't sure on what specifically yet. So I went to college and got my associates in computer networking systems, and then another 2 years for information systems and security.</p>
        <p>I got my first job out of college working at Qualcomm testing commercial devices in development. It was a great learning experience for me, and I started to see what valuable code looked like for the first time in C++. My boss gave me a couple books to go through, and upon implementing the projects from them, I really enjoyed the concepts of coding in c++ and the ideas that came to mind.</p>
        <p>My next job (same company - Qualcomm), I was on a team working with windows devices, and running a lot of test scripts with embedded devices and software. As I began adding automation code to remove tedious input commands, I knew at this point I wanted to be a programmer for a living.</p>
        <p>During most of the years working ages 28-33, I spent a lot of time going through software developer books, working on projects to learn languages, frameworks, libraries, and other tech stacks. I also went to meet-ups with co-workers to learn new things every weekend. I was/am lucky enough to found an excellent mentor with loads of experience. I also took an online course through Coursera to learn python to be more productive for the team I was on.</p>
        <p>At age 33, I had to take a couple years off of work for personal reasons. During this time I spent going through a java book, and implementing all the projects that it came with. I also worked on a giant project, to practice what I had learned, to learn swing and try out MVC (model view controller).</p>
        <p>Once I was ready to re-enter the work force, I also recognized how valuable web development was becoming in the market. So I decided to go through a coding bootcamp called Lambda School. The information was like drinking from a fire hose, and raised the amount of tech stacks I knew by about 3x as much. Not only can I do scripting, automation, and build systems, but also full stack web development and computer science methods.</p>
        <p>You will find below samples of things I have learned throughout the years. It will grow and I will fill more stuff in from projects I have done as I get more time to do so...</p>
      </DivSection>
      <DivSection>
        <H2TitleSection>Lambda&nbsp;School</H2TitleSection>
        <p>This school is a 30 week intense learning environment where you given a new project just about every day to work on and complete. I started the curriculum in October 2018, and completed it in May 2019. Hours are between 8am - 5pm, Monday through Friday. However, those are the minimum hours expected... I'm telling you right now, you will spend more than just 8 to 5. </p>
        <p>The way it works is you pay nothing until you get a job. So they have every incintive to give you a good education and help you get a job or they don't get paid. In more detail, you sign an ISA agreement with a 3rd party company. Once you graduate, if you don't find a job in 5 years making at least $50,000/yr... you're agreement becomes void and will never owe anything. If you find a job making $50,000/yr or more, you pay 17% of your income for up to 2 years or a total of $30,000 (whichever comes first). If for whatever reason you lose your job, your payments get put back on hold until you can find another one with 0% interest. And it is because of this, the curriculum is HARD. I'm not kidding when I say get ready to shut out your life to everyone you know during lambda(job, family, friends, social life, hobbies, ect...). Typically for all the work you do in 1 week in lambda is equivilant to about 1-2 months in college (also said by one of the instructors who also teaches at a university). So I wouldn't recommend this for anyone who isn't able to put forth that level of commitment.</p>
        <p>The amount of information you have access too is amazing. Their curriculum gets updated every cycle and they change constantly to accomidate both the student reviews and the job market demands. They offer an online training kit that gets updated along with the curriculum. So lets say you are in your job for 5 years, and are looking to update your current skills. You can go to their training kit and get access to the latest projects, pre-recorded lectures, and documentation for the material. In addition, you have a vast network of amazing people for life (via slack channel).</p>
        <p>Before I joined, I was very skeptical, but after seeing the <a href='https://lambdaschool.com/' target='_blank' draggable="false" rel='noopener noreferrer'>results</a> "86% of Lambda School graduates are hired within 6 months and make over $50k a year.", and the user ratings from several outside websites, I knew it was the right decision... and I'm very happy I made it.</p>
      </DivSection>
      <DivSection>
        <H2TitleSection>Books</H2TitleSection>
        <p>This section contains my favorite books I have went through during my self-teaching to be a valuable developer. My favorite style of learning tends to be finding a language book with many project examples putting into practice on what is being taught, find a supporting compiler for the langauge, and do all the projects in the book and have the lines of code explained. Once I finish the book, I like to think of a big project to do, and implement all the skills I have learned through the book to solidify what I have learned.</p>
      </DivSection>
      <DivSection>
        <H2TitleSection>Coursera</H2TitleSection>
        <p>During my time working at a large tech company, I decided to take a class to learn python so I could add value to the team beyond my job description. After taking the python course, I was able to add value by digging into the code, applying hot-fixes, and even setting up a sandbox environment for my team to avoid daily production updates that would many times have compile bugs and break executions.</p>
      </DivSection>
      <DivSection>
        <H2TitleSection>ITT&nbsp;Tech&nbsp;San&nbsp;Diego&nbsp;(Bachelors</H2TitleSection>
        <p>I decided to move to the San Diego campus from the San Bernardino campus to grow my network in San Diego. It was my dream at this time to find a good job after graduation and live in San Diego. I have family here, and everytime I visited I really enjoyed the positivity I generally got from the people in the area.</p>
        <p>This section consists of a screen shot of my diploma, awards, and my transcripts(classes, grades, ect...). I also provide the pdf files digitally signed by parchment (a company partnered with all colleges accross the nation).</p>
        <p>Most of the things I studied under this degree were IT security classes. We learned how to build magic cables (1-way data ethernet cables), setup and secure networks in the labs, implement cryptography, and a variety of hacking techniques/tools in order to learn how to secure an environment from hackers.</p>
      </DivSection>
      <DivSection>
        <H2TitleSection>ITT&nbsp;Tech&nbsp;San&nbsp;Bernardino&nbsp;(Associates</H2TitleSection>
        <p>When I was 24, I decided it was time for me to start going to college, and was ready for the years of training to get a job. I took networking as a major, because computer components had fascinated me (as I was at this time building/upgrading my own computer).</p>
        <p>This section consists of a screen shot of my diploma, awards, and my transcripts(classes, grades, ect...). I also provide the pdf files digitally signed by parchment (a company partnered with all colleges accross the nation).</p>
        <p>Most of the time, my core classes consisted of half theory, and the other half labs putting what we discussed into practice. We setup operating systems(windows with active directory, and linux client/server environments), networks, configured routers/switches/firewalls/ect... It was a really good experience to apply a lot of industry knowledge, and came in handy to troubleshoot many issues my team was having once I started working for a large tech company.</p>
      </DivSection>
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  {  }
)(EducationMain);