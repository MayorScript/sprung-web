import React from 'react';
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";

const Login = () => {
    return (
        <div className="bg-blue-200 h-screen flex align-middle justify-center rounded">
            <h1 className="text-3xl font-bold underline text-red-600">
                Welcome to Sprung
            </h1>
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <Input inputType="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Input inputType="password" />
                    </div>
                    <Button buttonTitle={"Login"} />
                </form>
            </div>

        </div>
    );
};

export default Login;