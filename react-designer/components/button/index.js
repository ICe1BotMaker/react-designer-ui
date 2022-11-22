import './button.css';
import React from 'react';

export default function Button({ key, onClick, disabled = Boolean, children, style = {} }) {
    const classes = `rd-ui-button ${disabled ? `rd-ul-button-disabled`: `rd-ui-button-if`}`;
    const handleOnClick = disabled ? () => {} : onClick;
    
    return React.createElement(
        `button`, 
        {
            key: key,
            style: style,
            className: classes,
            onClick: handleOnClick
        }, 
        children
    )

    // return (
    //     <button key={key} style={style} className={classes} onClick={handleOnClick}>{children}</button>
    // )
}