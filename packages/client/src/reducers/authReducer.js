const initialState = {
  token: localStorage.getItem('token'),
  tokenExpiration: localStorage.getItem('tokenExpiration'),
  authenticated: !!localStorage.getItem('token')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SIGNIN':
      return {
        ...state,
        authenticated: true,
        tokenExpiration: action.payload
      };
    case 'AUTH_SIGNOUT':
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};