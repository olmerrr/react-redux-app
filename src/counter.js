import React from 'react';

const counter = ({counter, inc, dec, rnd}) => {
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
export default counter;