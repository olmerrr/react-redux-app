
const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default: return state;
    }
};
let state = reducer(undefined, {});
    state = reducer(state, {type: 'INC'});
    state = reducer(state, {type: 'INC'});
    state = reducer(state, {type: 'DEC'});

console.log(state);