/*********************************** actions ***********************************/
import {
  // Summary
  SUMMARY_TOGGLE_FULL_DISPLAY,

  // Tech Stack
  TECHSTACK_TOGGLE_FULL_DISPLAY
} from '../actions/index.js';

/********************************** Variables **********************************/
const { projectsData } = require('../../globals/Data.js');

/************************************ State ************************************/
const initialState = {
  projectsData: projectsData,
  error: null
};

/*********************************** Reducers **********************************/
export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case TECHSTACK_TOGGLE_FULL_DISPLAY:
      return {
        ...state,
        projectsData: state.projectsData.map((project, i) => i === action.payload ? (project.techStackDisplayFull = !project.techStackDisplayFull, project) : (project))
      };
    case SUMMARY_TOGGLE_FULL_DISPLAY:
      return {
        ...state,
        projectsData: state.projectsData.map((project, i) => i === action.payload ? (project.summaryDisplayFull = !project.summaryDisplayFull, project) : (project))
      };
    default:
      return state;
  }
};

export default ProjectReducer;
