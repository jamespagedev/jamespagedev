import { origCareerSelNavItems } from '../../globals/Variables.js';

/***************************************************************************************************
 ********************************************* Actions *******************************************
 **************************************************************************************************/
// Work History
export const SELECT_WORK_HISTORY_SUCCESS = 'SELECT_WORK_HISTORY_SUCCESS';
export const SELECT_WORK_HISTORY_FAILURE = 'SELECT_WORK_HISTORY_FAILURE';

export const SELECT_WH_TECH_SUCCESS = 'SELECT_WH_TECH_SUCCESS';
export const SELECT_WH_TECH_FAILURE = 'SELECT_WH_TECH_FAILURE';

export const SELECT_WH_LAMBDA_SCHOOL_SUCCESS = 'SELECT_WH_LAMBDA_SCHOOL_SUCCESS';
export const SELECT_WH_LAMBDA_SCHOOL_FAILURE = 'SELECT_WH_LAMBDA_SCHOOL_FAILURE';

export const SELECT_WH_CVS_HEALTH_SUCCESS = 'SELECT_WH_CVS_HEALTH_SUCCESS';
export const SELECT_WH_CVS_HEALTH_FAILURE = 'SELECT_WH_CVS_HEALTH_FAILURE';

export const SELECT_WH_QUALCOMM_SUCCESS = 'SELECT_WH_QUALCOMM_SUCCESS';
export const SELECT_WH_QUALCOMM_FAILURE = 'SELECT_WH_QUALCOMM_FAILURE';

export const SELECT_WH_MILLENNIUM_LABORATORIES_SUCCESS = 'SELECT_WH_MILLENNIUM_LABORATORIES_SUCCESS';
export const SELECT_WH_MILLENNIUM_LABORATORIES_FAILURE = 'SELECT_WH_MILLENNIUM_LABORATORIES_FAILURE';

export const SELECT_WH_SB_LIBRARY_SUCCESS = 'SELECT_WH_SB_LIBRARY_SUCCESS';
export const SELECT_WH_SB_LIBRARY_FAILURE = 'SELECT_WH_SB_LIBRARY_FAILURE';

export const SELECT_WH_ITT_TECH_SUCCESS = 'SELECT_WH_ITT_TECH_SUCCESS';
export const SELECT_WH_ITT_TECH_FAILURE = 'SELECT_WH_ITT_TECH_FAILURE';

export const SELECT_WH_NON_TECH_SUCCESS = 'SELECT_WH_NON_TECH_SUCCESS';
export const SELECT_WH_NON_TECH_FAILURE = 'SELECT_WH_NON_TECH_FAILURE';

export const SELECT_WH_PECHANGA_SUCCESS = 'SELECT_WH_PECHANGA_SUCCESS';
export const SELECT_WH_PECHANGA_FAILURE = 'SELECT_WH_PECHANGA_FAILURE';

export const SELECT_WH_USSD_SUCCESS = 'SELECT_WH_USSD_SUCCESS';
export const SELECT_WH_USSD_FAILURE = 'SELECT_WH_USSD_FAILURE';

export const SELECT_WH_JACK_WEAVER_SCHOOL_SUCCESS = 'SELECT_WH_JACK_WEAVER_SCHOOL_SUCCESS';
export const SELECT_WH_JACK_WEAVER_SCHOOL_FAILURE = 'SELECT_WH_JACK_WEAVER_SCHOOL_FAILURE';

export const SELECT_WH_TARGET_SUCCESS = 'SELECT_WH_TARGET_SUCCESS';
export const SELECT_WH_TARGET_FAILURE = 'SELECT_WH_TARGET_FAILURE';

export const SELECT_WH_KFC_SUCCESS = 'SELECT_WH_KFC_SUCCESS';
export const SELECT_WH_KFC_FAILURE = 'SELECT_WH_KFC_FAILURE';

export const SELECT_WH_CCBC_SUCCESS = 'SELECT_WH_CCBC_SUCCESS';
export const SELECT_WH_CCBC_FAILURE = 'SELECT_WH_CCBC_FAILURE';

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
