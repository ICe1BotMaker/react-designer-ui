import './progressbar.css';
import React from 'react';

export default function ProgressBar({ percentage, style }) {
    return React.createElement(
        `div`,
        {
            style: style,
            className: "rd-ui-percentage"
        },
        React.createElement(
            `div`,
            {
                style: { width: `${percentage}%` },
                className: "rd-ui-percentage-mov"
            }
        )
    )
}