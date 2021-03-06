// Globals
const { resumeWordLinks, resumePdfLinks, origCareerSelNavItems, origWorkHistoryNavItems, origEducationNavItems } = require('../../globals/Variables.js');

/***************************************************************************************************
 ********************************************* Actions *******************************************
 **************************************************************************************************/
// Reset State To Initials
export const RESET_INITIAL_STATE = 'RESET_INITIAL_STATE';

// Main

// Career Nav Item
export const SELECT_CAREER_NAV_ITEM_SUCCESS = 'SELECT_CAREER_NAV_ITEM_SUCCESS';
export const SELECT_CAREER_NAV_ITEM_FAILURE = 'SELECT_CAREER_NAV_ITEM_FAILURE';

// Resume
export const SELECT_RESUME_WORD_SUCCESS = 'SELECT_RESUME_WORD_SUCCESS';
export const SELECT_RESUME_WORD_FAILURE = 'SELECT_RESUME_WORD_FAILURE';
export const SELECT_RESUME_PDF_SUCCESS = 'SELECT_RESUME_PDF_SUCCESS';
export const SELECT_RESUME_PDF_FAILURE = 'SELECT_RESUME_PDF_FAILURE';

// Work History Sub
export const SELECT_WORK_HISTORY_SUCCESS = 'SELECT_WORK_HISTORY_SUCCESS';
export const SELECT_WORK_HISTORY_FAILURE = 'SELECT_WORK_HISTORY_FAILURE';

// Education
export const SELECT_EDUCATION_SUCCESS = 'SELECT_EDUCATION_SUCCESS';
export const SELECT_EDUCATION_FAILURE = 'SELECT_EDUCATION_FAILURE';


/***************************************************************************************************
 ****************************************** Action Creators ****************************************
 **************************************************************************************************/
export const resetState = () => dispatch => {
  dispatch({ type: RESET_INITIAL_STATE});
}

export const selectCareerNavItem = (ev, item) => dispatch => {
  ev.preventDefault();
  ev.stopPropagation();
  let careerSelNavItems = Object.assign({}, origCareerSelNavItems);
  careerSelNavItems['main'] = 'false';
  careerSelNavItems[item] = 'true';

  return Promise.resolve(careerSelNavItems)
    .then(response => {
      dispatch({ type: SELECT_CAREER_NAV_ITEM_SUCCESS, payload: response });
    })
    .catch(err => dispatch({ type: SELECT_CAREER_NAV_ITEM_FAILURE, payload: err }));
};

export const selectResumeWordPosition = (ev, position) => dispatch => {
  ev.preventDefault();

  Promise.resolve(resumeWordLinks)
    .then(wordLinks => {
      dispatch({ type: SELECT_RESUME_WORD_SUCCESS, payload: wordLinks[position] });
    })
    .catch(err => dispatch({ type: SELECT_RESUME_WORD_FAILURE, payload: err }));
};

export const selectResumePdfPosition = (ev, position) => dispatch => {
  ev.preventDefault();

  Promise.resolve(resumePdfLinks)
    .then(pdfLinks => {
      dispatch({ type: SELECT_RESUME_PDF_SUCCESS, payload: pdfLinks[position] });
    })
    .catch(err => dispatch({ type: SELECT_RESUME_PDF_FAILURE, payload: err }));
};

export const selectWorkHistoryNavItem = (ev, item) => dispatch => {
  ev.preventDefault();
  ev.stopPropagation();
  let workHistoryNavItems = Object.assign({}, origWorkHistoryNavItems);
  workHistoryNavItems[item] = 'true';

  return Promise.resolve(workHistoryNavItems)
    .then(response => {
      dispatch({ type: SELECT_WORK_HISTORY_SUCCESS, payload: response });
    })
    .catch(err => dispatch({ type: SELECT_WORK_HISTORY_FAILURE, payload: err }));
};

export const selectEducationNavItem = (ev, item) => dispatch => {
  ev.preventDefault();
  ev.stopPropagation();
  let educationNavItems = Object.assign({}, origEducationNavItems);
  educationNavItems[item] = 'true';

  return Promise.resolve(educationNavItems)
    .then(response => {
      dispatch({ type: SELECT_EDUCATION_SUCCESS, payload: response });
    })
    .catch(err => dispatch({ type: SELECT_EDUCATION_FAILURE, payload: err }));
};