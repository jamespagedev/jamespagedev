/********************************************* Modals *********************************************/
import {
  // Modals
  ACTIVATE_CAREER_PROJECT_IMG_MODAL,
  DEACTIVATE_CAREER_PROJECT_IMG_MODAL,

  // Functions
  setCareerProjectImgModal
} from './ModalsActions.js';

/********************************************* Career *********************************************/
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

  // Work History
  SELECT_WORK_HISTORY_SUCCESS,
  SELECT_WORK_HISTORY_FAILURE,

  // Functions
  resetState,
  selectCareerNavItem,
  selectResumeWordPosition,
  selectWorkHistoryNavItem
} from './CareerActions.js';

import {
  // Summary
  SUMMARY_TOGGLE_FULL_DISPLAY,

  // Tech Stack
  TECHSTACK_TOGGLE_FULL_DISPLAY,

  // Functions
  techStackToggleFullDisplay,
  summaryToggleFullDisplay
} from './ProjectActions.js'

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

export {
  // Modals
  ACTIVATE_CAREER_PROJECT_IMG_MODAL,
  DEACTIVATE_CAREER_PROJECT_IMG_MODAL,

  // Reset State To Initial
  RESET_INITIAL_STATE,

  // Main

  // Career Nav Item
  SELECT_CAREER_NAV_ITEM_SUCCESS,
  SELECT_CAREER_NAV_ITEM_FAILURE,

  // Resume
  SELECT_RESUME_WORD_SUCCESS,
  SELECT_RESUME_WORD_FAILURE,

  // Work History
  SELECT_WORK_HISTORY_SUCCESS,
  SELECT_WORK_HISTORY_FAILURE,

  // Summary
  SUMMARY_TOGGLE_FULL_DISPLAY,

  // Tech Stack
  TECHSTACK_TOGGLE_FULL_DISPLAY,

  // Functions
  setCareerProjectImgModal,
  resetState,
  selectCareerNavItem,
  selectResumeWordPosition,
  selectWorkHistoryNavItem,
  techStackToggleFullDisplay,
  summaryToggleFullDisplay
};
