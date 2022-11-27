import './loading.css';
import React from 'react';

export default function Loading({ visible = Boolean, style = {} }) {
    const classes = `rd-ui-loading-circle ${visible ? `rd-ui-loading-visible` : ``}`;

    return React.createElement(
        `div`,
        {
            className: classes,
            style: style
        },
        React.createElement(
            `div`,
            { className: "rd-ui-loading-circle-mov" }
        )
    )
}