/*********************************** actions ***********************************/
import {
  // Reset State To Initial
  RESET_INITIAL_STATE,

  // Main

  // Career Nav Item
  SELECT_CAREER_NAV_ITEM_SUCCESS,
  SELECT_CAREER_NAV_ITEM_FAILURE,

  // Resume
  SELECT_RESUME_WORD_SUCCESS,
  SELECT_RESUME_WORD_FAILURE,
  SELECT_RESUME_PDF_SUCCESS,
  SELECT_RESUME_PDF_FAILURE,

  // Work History
  SELECT_WORK_HISTORY_SUCCESS,
  SELECT_WORK_HISTORY_FAILURE,

  // Education
  SELECT_EDUCATION_SUCCESS,
  SELECT_EDUCATION_FAILURE
} from '../actions/index.js';

/********************************** Variables **********************************/
const { MainPageTitles, origCareerSelNavItems, origWorkHistoryNavItems, origEducationNavItems, defaultPosition, resumeWordLinks, resumePdfLinks } = require('../../globals/Variables');

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
  selectedPdfResume: resumePdfLinks[defaultPosition],
  selectedWorkHistoryNavItems: origWorkHistoryNavItems,
  selectedEducationNavItems: origEducationNavItems,
  error: null
};

/*********************************** Reducers **********************************/
export const CareerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INITIAL_STATE:
      return {
        ...initialState
      };
    case SELECT_CAREER_NAV_ITEM_SUCCESS:
      return {
        ...state,
        selectedCareerNavItems: action.payload
      };
    case SELECT_CAREER_NAV_ITEM_FAILURE:
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
      case SELECT_RESUME_PDF_SUCCESS:
        return {
          ...state,
          selectedPdfResume: action.payload
        };
      case SELECT_RESUME_PDF_FAILURE:
        return {
          ...state,
          selectedPdfResume: resumePdfLinks[defaultPosition],
          error: action.payload
        };
    case SELECT_WORK_HISTORY_SUCCESS:
      return {
        ...state,
        selectedWorkHistoryNavItems: action.payload
      };
    case SELECT_WORK_HISTORY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
      case SELECT_EDUCATION_SUCCESS:
        return {
          ...state,
          selectedEducationNavItems: action.payload
        };
      case SELECT_EDUCATION_FAILURE:
        return {
          ...state,
          error: action.payload
        };
    default:
      return state;
  }
};

export default CareerReducer;
