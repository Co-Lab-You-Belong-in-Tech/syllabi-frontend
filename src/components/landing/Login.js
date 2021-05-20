import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-outer">
                <div className="login-inner">
                    <div className="text-container">
                        <span>Login</span>
                    </div>
                    <div className="form-container">
                        <input
                            placeholder="email"
                        />
                        <input 
                            placeholder="password"
                        />
                    </div>
                    <div>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;