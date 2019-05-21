import { MainPageTitles } from '../../globals/Variables';

const initialState = {
  themes: {
    spring: 'Spring',
    summer: 'Summer',
    fall: 'Fall',
    winter: 'Winter'
  },
  selectedTheme: '',
  mainPageTitles: MainPageTitles,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
