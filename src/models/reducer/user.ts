interface StateProps {
  user?: any;
}
export interface actionType {
  type: string;
  payload: StateProps;
}
const initState = {
  user: 'linsh',
};
const user = (state: StateProps = initState, action: actionType) => {
  if (action.type === 'user') {
    return {...state, ...action.payload};
  }
  return state;
};
export default user;
