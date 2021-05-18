import { combineReducers }  from 'redux';

// const combineReducers = combineReducers({})


const rootReducer = (state, action) => {
    if(action.type === 'UNFETCH_USER_SUCCESS'){
        state = undefined
    };

    // return combineReducers(state, action)
};

export default rootReducer;