/***************************************************************************************************
 ********************************************* Actions *******************************************
 **************************************************************************************************/
// Summary
export const SUMMARY_TOGGLE_FULL_DISPLAY = 'SUMMARY_TOGGLE_FULL_DISPLAY';

// Tech Stack
export const TECHSTACK_TOGGLE_FULL_DISPLAY = 'TECHSTACK_TOGGLE_FULL_DISPLAY';


/***************************************************************************************************
 ****************************************** Action Creators ****************************************
 **************************************************************************************************/
export const techStackToggleFullDisplay = (projectNumber, totalTechStacks) => dispatch => {
  if (totalTechStacks > 4){
    dispatch({ type: TECHSTACK_TOGGLE_FULL_DISPLAY, payload: projectNumber});
  }
}

export const summaryToggleFullDisplay = (projectNumber, summaryLength) => dispatch => {
  if (summaryLength > 1){
    dispatch({ type: SUMMARY_TOGGLE_FULL_DISPLAY, payload: projectNumber});
  }
}