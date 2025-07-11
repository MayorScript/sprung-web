import React from 'react';
import {ButtonProps} from "../../types/atom.type";

const Button = ({ buttonTitle }: ButtonProps) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"> {buttonTitle} </button>
    );
};

export default Button;