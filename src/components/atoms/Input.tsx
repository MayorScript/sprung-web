import React from 'react';
import {InputProps} from "../../types/atom.type";


const Input = ({ inputType }: InputProps) => {
    return (
        <input className="border-2 border-black p-2" type={inputType} />
    );
};

export default Input;