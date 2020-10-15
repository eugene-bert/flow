const initialState = {
  issues: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ISSUES':
      return {
        ...state,
        issues: action.payload
      };
    default:
      return state;
  }
};