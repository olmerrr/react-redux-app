import {createStore} from "redux";


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;

        default:
            return state;
    }
    return 0;
};
const store = createStore(reducer);
store.subscribe( () => {
    console.log('ayyy',store.getState())
});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
