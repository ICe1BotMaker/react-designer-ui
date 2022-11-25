import './tag.css';
import React from 'react';

export default function Tag({ type, children, style = {}, onClick = Function }) {
    const classes = `rd-ui-tag ${type}`;
    return (
        React.createElement(
            `div`,
            { className: classes, style: style, onClick: onClick },
            children
        )
    )

    // <div className={classes} style={style} onClick={onClick}>{children}</div>
}