const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return {
        isOpen: true,
      };
    case 'CLOSE_SIDEBAR':
      return {
        isOpen: false,
      };
    case 'TOGGLE_SIDEBAR':
      return {
        isOpen: !state.isOpen
      }
    default:
      return state;
  }
};