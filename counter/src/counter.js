const plus = "plus";
const minus = "minus";

const counter = {
  value: 0,
};

export const createPlus = () => ({ type: plus });
export const createMinus = () => ({ type: minus });

const counterReducer = (state = counter, action) => {
  switch (action.type) {
    case minus:
      return {
        ...state,
        value: state.value - 1,
      };
    case plus:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
