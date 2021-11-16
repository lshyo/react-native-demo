import {locationType} from '../type';
interface actionType {
  type: string;
  payload: locationType;
}
const initState = {
  showLocation: false,
};
const location = (state: locationType = initState, action: actionType) => {
  if (action.type === 'location') {
    return {...state, ...action.payload};
  }
  return state;
};
export default location;
