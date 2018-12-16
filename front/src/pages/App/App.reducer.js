// The initial state of the App
const initialState = {
  loading: false,
  error: false,
};

function appReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
            // code
    }
}

export default appReducer;
