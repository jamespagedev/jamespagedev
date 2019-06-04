/********************************** Variables **********************************/
import { MainPageTitles, origCareerSelNavItems } from '../../globals/Variables';

/*********************************** actions ***********************************/
import {
  // Work History
  SELECT_WORK_HISTORY_SUCCESS,
  SELECT_WORK_HISTORY_FAILURE,

  // WH_Tech
  SELECT_WH_TECH_SUCCESS,
  SELECT_WH_TECH_FAILURE,
  SELECT_WH_LAMBDA_SCHOOL_SUCCESS,
  SELECT_WH_LAMBDA_SCHOOL_FAILURE,
  SELECT_WH_CVS_HEALTH_SUCCESS,
  SELECT_WH_CVS_HEALTH_FAILURE,
  SELECT_WH_QUALCOMM_SUCCESS,
  SELECT_WH_QUALCOMM_FAILURE,
  SELECT_WH_MILLENNIUM_LABORATORIES_SUCCESS,
  SELECT_WH_MILLENNIUM_LABORATORIES_FAILURE,
  SELECT_WH_SB_LIBRARY_SUCCESS,
  SELECT_WH_SB_LIBRARY_FAILURE,
  SELECT_WH_ITT_TECH_SUCCESS,
  SELECT_WH_ITT_TECH_FAILURE,

  // WH_NON_Tech
  SELECT_WH_NON_TECH_SUCCESS,
  SELECT_WH_NON_TECH_FAILURE,
  SELECT_WH_PECHANGA_SUCCESS,
  SELECT_WH_PECHANGA_FAILURE,
  SELECT_WH_USSD_SUCCESS,
  SELECT_WH_USSD_FAILURE,
  SELECT_WH_JACK_WEAVER_SCHOOL_SUCCESS,
  SELECT_WH_JACK_WEAVER_SCHOOL_FAILURE,
  SELECT_WH_TARGET_SUCCESS,
  SELECT_WH_TARGET_FAILURE,
  SELECT_WH_KFC_SUCCESS,
  SELECT_WH_KFC_FAILURE,
  SELECT_WH_CCBC_SUCCESS,
  SELECT_WH_CCBC_FAILURE
} from '../actions/index.js';

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
    default:
      return state;
  }
};

export default CareerReducer;
