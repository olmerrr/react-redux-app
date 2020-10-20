import {createStore} from "redux";
import reducer from "./reducer";
import {
    inc,
    dec,
    rnd
} from "./actions";

const store = createStore(reducer);
const {dispatch} = store;
const bindActionCreater = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};

const incDispatch = bindActionCreater(inc, dispatch);
const decDispatch = bindActionCreater(dec, dispatch);
const rndDispatch = bindActionCreater(rnd, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', incDispatch);
document
    .getElementById('dec')
    .addEventListener('click', decDispatch);
document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10);
        rndDispatch(payload);
    })


const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
};
store.subscribe(update);