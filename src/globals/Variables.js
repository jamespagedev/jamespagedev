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

const careerNavItemNames = {
  main: 'main',
  resume: 'resume',
  work_history: 'work_history',
  education: 'education',
  skills: 'skills',
  projects: 'projects',
}

const origCareerSelNavItems = {
  main: 'true',
  resume: 'false',
  work_history: 'false',
  education: 'false',
  skills: 'false',
  projects: 'false'
};

const origWorkHistoryNavItems = {
  main: 'false',
  techPositions: 'false',
  lambdaSchool: 'false',
  cvsHealth: 'false',
  qualcomm: 'false',
  millenniumLaboratories: 'false',
  sanBernadinoLibrary: 'false',
  ittTech: 'false',
  nonTechPositions: 'false',
  pechangaResortAndCasino: 'false',
  unitedStudiosOfSelfDefense: 'false',
  jackWeaverSchool: 'false',
  target: 'false',
  calveryChapelBibleCollege: 'false',
}

const defaultPosition = 'Front-End(Web) Developer';
const resumePositions = [
  defaultPosition,
  'Full-Stack(Web) Developer',
  'Back-End(Web) Developer',
  'Software Developer',
  'IT/Network/System Admin',
  'Test Engineer'
];
const resumeWordLinks = {};
resumeWordLinks[resumePositions[0]] = 'https://drive.google.com/file/d/1bpwH4Ydd6qvOo8lFO3nxY6am2HCBcC7r/view?usp=sharing';
resumeWordLinks[resumePositions[1]] = 'https://drive.google.com/file/d/15W9bpREOi4HUyo8GERkzmxDoYVOueIx2/view?usp=sharing';
resumeWordLinks[resumePositions[2]] = 'https://drive.google.com/file/d/1CsheL0jwXRchU7wSL-JiRaXvt388_IB0/view?usp=sharing';
resumeWordLinks[resumePositions[3]] = 'https://drive.google.com/file/d/1uQBkLotPD11B5Ybarvjf4XXgvBESpjr0/view?usp=sharing';
resumeWordLinks[resumePositions[4]] = 'https://drive.google.com/file/d/19Rz9aRcwemjlqTyloFP572I9JP2Ys-ie/view?usp=sharing';
resumeWordLinks[resumePositions[5]] = 'https://drive.google.com/file/d/1OGuwkGFCz4SRt2NV613Z8NOq_m5Ba1ZE/view?usp=sharing';

const resumePdfLinks = {};
resumePdfLinks[resumePositions[0]] = 'https://drive.google.com/file/d/1dSPD8WwO2nEYHY_yMpCvCokBcDwqDVSr/view?usp=sharing';
resumePdfLinks[resumePositions[1]] = 'https://drive.google.com/file/d/18WVpEbOGspnGwwNXCkvC94iekShFIDhz/view?usp=sharing';
resumePdfLinks[resumePositions[2]] = 'https://drive.google.com/file/d/1spnELVYF5o9kxpHw6YZ6rfIbXUktvi0D/view?usp=sharing';
resumePdfLinks[resumePositions[3]] = 'https://drive.google.com/file/d/1o7txcoGtnWAOeOCQBuLh1MvmWW5yyBlt/view?usp=sharing';
resumePdfLinks[resumePositions[4]] = 'https://drive.google.com/file/d/1Qk5eoTx-lqZ330oMHiFpUnIqpN00OKGD/view?usp=sharing';
resumePdfLinks[resumePositions[5]] = 'https://drive.google.com/file/d/1W1s_5ig_oaombliBUqZKvYe6F4xTElZ-/view?usp=sharing';

const CareerPageHeaderBreakLine = '409px';

module.exports = {
  ClientUrlLinks,
  MainPageTitles,
  careerNavItemNames,
  origCareerSelNavItems,
  origWorkHistoryNavItems,
  defaultPosition,
  resumePositions,
  resumeWordLinks,
  resumePdfLinks,
  CareerPageHeaderBreakLine
};