export default function(state={}, action){
    let newState ={};
    switch(action.type){
        case 'LOGIN_SUCCESS':
        let newState ={};
        newState = Object.assign({}, state);
        newState.loginUser = action.payload;
        return newState;

        case 'LOGIN_FAILUR':
        newState = Object.assign({}, state);
        newState.loginError = action.payload;
        return newState;

        default: 
        return state;
    }
}