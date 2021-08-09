import React from 'react';
import { NextPage } from "next";
import * as Yup from 'yup';
import { ErrorMessage, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    errors?: any,
    label: any,
    touched?: any,
    placeholder?: string,
    name: string,
    isRequired?: boolean,
    type?: string,
    value?: string,
    rows?: number,
    disabled?: boolean,
}
const InputField: NextPage<Props> = (props) => {
    const { disabled, rows, type = "input", errors, label, name, touched, placeholder, isRequired, value } = props;
    const hasError = errors[name] && touched[name];

    return (
        <>
            <div className="input-field">
                <div className="input-field__box">
                    <div className="input-field__label">
                        {label}
                        {isRequired ? <span className="input-field__required">*</span> : ''}
                    </div>
                    <Field
                        className={`input-field__input ${hasError && "error"} ${disabled && "disabled"}`}
                        placeholder={placeholder}
                        name={name}
                        autoComplete="off"
                        as={type}
                        value={value}
                        rows={rows}
                        disabled={disabled}
                    />
                </div>
                {
                    errors[name] && touched[name] &&
                    <div className="input-field__error">
                        <FontAwesomeIcon className="input-field__error-icon" icon={["fas", "info-circle"]} />
                        <span>{errors[name]}</span>
                    </div>
                }
            </div>
        </>

    );
}

export default InputField;