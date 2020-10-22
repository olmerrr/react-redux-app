import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from '../actions';
const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron p-4">
            <h2>{counter}</h2>
            <button className="btn btn-primary btn-lg"
                    onClick={inc}>+
            </button>
            <button className="btn btn-primary btn-lg"
                    onClick={dec}>-
            </button>
            <button className="btn btn-primary btn-lg"
                    onClick={rnd}>Random</button>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
};
const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions,dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
           rnd(randomValue);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);