import './input.css';
import React from 'react';

export default function Input({ disabled, onKeyDown, onKeyUp, helperText, placeholder, style = {} }) {
    return React.createElement(
        `div`, 
        {
            style: style,
            className: `rd-input-input-group`
        }, 
        React.createElement(
            `label`, 
            { className: `rd-input-input-underlined` }, 
            React.createElement(
                `span`, 
                { className: `rd-input-input-label` }, 
                placeholder
            ), 
            React.createElement(
                `span`, 
                { className: `rd-input-input-helper` }, 
                helperText
            ), 
            React.createElement(
                `input`, 
                {
                    onKeyDown: onKeyDown,
                    onKeyUp: onKeyUp,
                    required: true,
                    disabled: disabled
                }
            )    
        )
    )
}