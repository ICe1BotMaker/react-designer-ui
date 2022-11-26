import './list.css';
import React from 'react';

export default function List({children, style = {}}) {
    return React.createElement(
        `ul`,
        {
            className: "rd-ui-list-ul",
            style: style
        },
        children
    )
}