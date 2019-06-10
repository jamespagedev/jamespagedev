/*********************************** actions ***********************************/
import {
  // Main
  SELECT_RESUME_WORD_SUCCESS,
  SELECT_RESUME_WORD_FAILURE,

  // Work History
  SELECT_WORK_HISTORY_SUCCESS,
  SELECT_WORK_HISTORY_FAILURE
} from '../actions/index.js';

/********************************** Variables **********************************/
const { MainPageTitles, origCareerSelNavItems, defaultPosition, resumeWordLinks } = require('../../globals/Variables');

/************************************ State ************************************/
const initialState = {
  themes: {
    spring: 'Spring',
    summer: 'Summer',
    fall: 'Fall',
    winter: 'Winter'
  },
  selectedTheme: '',
  mainPageTitles: MainPageTitles,
  selectedCareerNavItems: origCareerSelNavItems,
  selectedWordResume: resumeWordLinks[defaultPosition],
  error: null
};

/*********************************** Reducers **********************************/
export const CareerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WORK_HISTORY_SUCCESS:
      return {
        ...state,
        selectedCareerNavItems: action.payload
      };
    case SELECT_WORK_HISTORY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SELECT_RESUME_WORD_SUCCESS:
      return {
        ...state,
        selectedWordResume: action.payload
      };
    case SELECT_RESUME_WORD_FAILURE:
      return {
        ...state,
        selectedWordResume: resumeWordLinks[defaultPosition],
        error: action.payload
      };
    default:
      return state;
  }
};

export default CareerReducer;
