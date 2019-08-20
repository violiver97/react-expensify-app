// HIGHER ORDER COMPONENT (HOC) :

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> The info is: {props.info} </p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info, please don't share!</p>
            <WrappedComponent />
        </div>
    );

};

const requireAuthentication = (Param) => {
    return (props) => (
        <div>
            {
                props.isAuthentication ? (
                    <Param {...props} />
                ) : (
                        <p>Por favor faça o login para continuar</p>
                    )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthentication={false} info="There are the details" />, document.getElementById('app'))