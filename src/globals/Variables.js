const ClientUrlLinks = {
  home: '/',
  career: 'career',
  careernavs: {
    main: 'main',
    workhistory: 'workhistory',
    education: 'education',
    skills: 'skills',
    projects: 'projects'
  },
  hobbies: 'hobbies',
  about: 'about',
  contact: 'contact',
  signin: 'signin'
};

const MainPageTitles = {
  default: 'Home',
  home: 'Home',
  career: 'Career',
  hobbies: 'Hobbies',
  about: 'About',
  contact: 'Contact'
};

const origCareerSelNavItems = {
  main: 'false',
  work_history: 'false',
  education: 'false',
  skills: 'false',
  projects: 'false'
};

const defaultPosition = 'Front End Developer';
const resumePositions = [
  defaultPosition,
  'Full-Stack Developer',
  'Web Developer',
  'Back End Developer',
  'Software Developer',
  'IT/Network/System Admin',
  'Test Engineer'
];
const resumeWordLinks = {};
resumeWordLinks[resumePositions[0]] = 'https://drive.google.com/file/d/1lPtYUoZm6zj9YsTSS6YuPUxhhCXbfgEQ/view?usp=sharing';
resumeWordLinks[resumePositions[1]] = 'https://drive.google.com/file/d/1u1dvVljx80EzKWDo3fxZc7xUi2t9wolD/view?usp=sharing';
resumeWordLinks[resumePositions[2]] = 'https://drive.google.com/file/d/1u1dvVljx80EzKWDo3fxZc7xUi2t9wolD/view?usp=sharing';
resumeWordLinks[resumePositions[3]] = 'https://drive.google.com/file/d/1u1dvVljx80EzKWDo3fxZc7xUi2t9wolD/view?usp=sharing';
resumeWordLinks[resumePositions[4]] = 'https://drive.google.com/file/d/1u1dvVljx80EzKWDo3fxZc7xUi2t9wolD/view?usp=sharing';
resumeWordLinks[resumePositions[5]] = 'https://drive.google.com/file/d/1u1dvVljx80EzKWDo3fxZc7xUi2t9wolD/view?usp=sharing';

const CareerPageHeaderBreakLine = '409px';

module.exports = {
  ClientUrlLinks,
  MainPageTitles,
  origCareerSelNavItems,
  defaultPosition,
  resumePositions,
  resumeWordLinks,
  CareerPageHeaderBreakLine
};
