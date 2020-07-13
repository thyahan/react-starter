const initialState = {
  isAuthen: false
};

const actionTypes = {
  AUTHEN_PASS: "AUTHEN_PASS",
};

export default (state = initialState, { type, paylaod }) => {
  switch (type) {
    case actionTypes.AUTHEN_PASS:
      return { ...state, isAuthen: true};
    default:
      return state;
  }
};

export { actionTypes };
