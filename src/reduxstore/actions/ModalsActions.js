/***************************************************************************************************
 ********************************************* Actions *******************************************
 **************************************************************************************************/
// Modals
export const ACTIVATE_CAREER_PROJECT_IMG_MODAL = 'ACTIVATE_CAREER_PROJECT_IMG_MODAL';
export const DEACTIVATE_CAREER_PROJECT_IMG_MODAL = 'DEACTIVATE_CAREER_PROJECT_IMG_MODAL';


/***************************************************************************************************
 ****************************************** Action Creators ****************************************
 **************************************************************************************************/
export const setCareerProjectImgModal = (setActive, projectImgName) => {
  if (setActive){
    return { type: ACTIVATE_CAREER_PROJECT_IMG_MODAL, payload: projectImgName };
  } else {
    return { type: DEACTIVATE_CAREER_PROJECT_IMG_MODAL };
  }
};