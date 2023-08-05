import React, { MouseEventHandler, ChangeEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare function Button(props: ButtonProps): React.JSX.Element;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare function Input(props: InputProps): React.JSX.Element;

export { Button, Input };
