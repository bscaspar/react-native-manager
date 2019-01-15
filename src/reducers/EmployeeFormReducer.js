import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane'}
      // the [xxx] syntax is not an array, it is key interpolation.
      // At runtime it becomes the value passed in to the object.
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
