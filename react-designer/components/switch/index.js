import './switch.css';
import React from 'react';

export default function Switch({ inputId, disabled, children, style = {} }) {
    const classes = `rd-ui-switch-box ${disabled ? `rd-ui-switch-box-disabled` : ``}`;
    
    return React.createElement(
        `div`, 
        null,
        React.createElement(
            `input`,
            {
                disabled: disabled ? true : false,
                className: "rd-ui-switch-input",
                type: "checkbox",
                id: inputId,
                hidden: true
            }
        ), 
        React.createElement(
            `label`, 
            {
                style: style,
                htmlFor: inputId,
                className: classes
            },
            React.createElement(
                `span`,
                {
                    className: "rd-ui-switch-mov"
                },
                children
            )
        )
    )

    
    // <input disabled={disabled} className="rd-ui-switch-input" type="checkbox" id={inputId} hidden /> 

    // <label style={style} htmlFor={inputId} className={classes}>
    //     <span className="rd-ui-switch-mov">{children}</span>
    // </label>
}