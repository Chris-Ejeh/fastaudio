import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from 'react';

import styles from './Button.module.scss';

const cn = require('classnames');

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
    className?: string;
    buttonColor: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ title, type, className, buttonColor, onClick, onSubmit }) => {
    return (
        <button
            aria-label={title}
            className={cn(styles.button, className, styles[buttonColor])}
            type={type}
            // eslint-disable-next-line prettier/prettier
            onClick={onClick}
            onSubmit={onSubmit}
        >
            {title}
        </button>
    );
};

export default Button;
