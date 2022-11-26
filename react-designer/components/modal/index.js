import './modal.css';
import '../button/button.css';
import React from 'react';

export default function Modal({ visible = Boolean, children, style = {} }) {
    const bgClasses = visible ? `rd-ui-modal-background` : ` outro`;
    const classes = visible ? `rd-ui-modal` : ``;

    return React.createElement(
        `div`, 
        { className: bgClasses }, 
        React.createElement(
            `div`,
            {
                style: style,
                className: classes
            },
            React.createElement(
                `div`,
                { className: `rd-ui-modal-main` },
                visible ? children : ``
            ),
        )
    )
}