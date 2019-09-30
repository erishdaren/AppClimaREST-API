import React from 'react';

const Error = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 offset-m4 error">
                        {props.mensaje}
                </div>               
            </div>           
        </div>
    );
};

export default Error;