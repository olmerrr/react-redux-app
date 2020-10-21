import React from 'react';
import { connect } from 'react-redux';
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
export default connect(mapStateToProps)(Counter);