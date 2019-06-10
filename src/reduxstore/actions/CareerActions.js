// Globals
const { resumeWordLinks, origCareerSelNavItems } = require('../../globals/Variables.js');

/***************************************************************************************************
 ********************************************* Actions *******************************************
 **************************************************************************************************/
// Main
export const SELECT_RESUME_WORD_SUCCESS = 'SELECT_RESUME_WORD_SUCCESS';
export const SELECT_RESUME_WORD_FAILURE = 'SELECT_RESUME_WORD_FAILURE';

// Work History
export const SELECT_WORK_HISTORY_SUCCESS = 'SELECT_WORK_HISTORY_SUCCESS';
export const SELECT_WORK_HISTORY_FAILURE = 'SELECT_WORK_HISTORY_FAILURE';

/***************************************************************************************************
 ****************************************** Action Creators ****************************************
 **************************************************************************************************/
export const selectCareerNavItem = (ev, item) => dispatch => {
  ev.preventDefault();
  let careerSelNavItems = Object.assign({}, origCareerSelNavItems);
  careerSelNavItems[item] = 'true';

  return Promise.resolve(careerSelNavItems)
    .then(response => {
      dispatch({ type: SELECT_WORK_HISTORY_SUCCESS, payload: response });
    })
    .catch(err => dispatch({ type: SELECT_WORK_HISTORY_FAILURE, payload: err }));
};

export const selectResumeWordPosition = (ev, position) => dispatch => {
  ev.preventDefault();

  Promise.resolve(resumeWordLinks)
    .then(wordLinks => {
      dispatch({ type: SELECT_RESUME_WORD_SUCCESS, payload: wordLinks[position] });
    })
    .catch(err => dispatch({ type: SELECT_RESUME_WORD_FAILURE, payload: err }));
};
