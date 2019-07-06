/*********************************** actions ***********************************/
import {
  // Modals
  ACTIVATE_CAREER_PROJECT_IMG_MODAL,
  DEACTIVATE_CAREER_PROJECT_IMG_MODAL
} from '../actions/index.js';

/************************************ State ************************************/
const initialState = {
  modalsIsActive: false,
  projectImgName: '',
  error: null
};

/*********************************** Reducers **********************************/
export const ModalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_CAREER_PROJECT_IMG_MODAL:
      return {
        ...state,
        modalsIsActive: true,
        projectImgName: action.payload
      };
    case DEACTIVATE_CAREER_PROJECT_IMG_MODAL:
      return {
        ...state,
        modalsIsActive: false,
        projectImgName: ''
      };
    default:
      return state;
  }
};

export default ModalsReducer;
