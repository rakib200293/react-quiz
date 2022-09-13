import React from "react";
import TextInput from "./TextInput";

const Form = ({ children, className, ...rest }) => {
    return (
        <form className={`${className} form`} action="#" {...rest}>
            {children}
        </form>
    );
};

export default Form;
