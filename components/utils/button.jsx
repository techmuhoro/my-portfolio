import React from 'react';
import styles from '@/components/utils/utils.module.css';

export const Button = ({ children, xPadding, clickHandler = () => {} }) => (
    <button onClick={clickHandler} className={`${styles['custom-btn']} px-16`}>
        {children}
    </button>
);
