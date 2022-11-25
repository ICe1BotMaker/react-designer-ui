import './modal.css';
import '../button/button.css';
import React from 'react';

export default function Modal({ visible = Boolean, children, style = {} }) {
    const bgClasses = visible ? `rd-ui-modal-background` : ` outro`;
    const classes = visible ? `rd-ui-modal` : ``;

    // const buttons = () => {
    //     let result = [];

    //     for (let i = 0; i < button.length; i++) {
    //         const handleOnclick = button[i].onClick;
    //         result.push(
    //             React.createElement(
    //                 `button`,
    //                 {
    //                     style: button[i].buttonStyle,
    //                     key: button[i].id,
    //                     onClick: handleOnclick
    //                 }, 
    //                 button[i].key
    //             )
    //         );

    //         // <Button style={button[i].buttonStyle} 
    //         // key={button[i].id} 
    //         // disabled={button[i].disabled} 
    //         // onClick={handleOnclick}>{button[i].key}</Button>
    //     }

    //     return result;
    // }

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
            // React.createElement(
            //     `div`, 
            //     { className: `rd-ui-modal-buttons` },
            //     React.createElement(
            //         `div`,
            //         { className: `rd-ul-modal-buttonsDIV` },
            //         buttons()
            //     )
            // )
        )
    )

    // return (
    //     <div className={bgClasses}>
    //         <div style={style} className={classes}>
    //             <div className="rd-ui-modal-main">
    //                 {visible ? children : ``}
    //             </div>
    //             <div className="rd-ui-modal-buttons">
    //                 <div className="rd-ul-modal-buttonsDIV">
    //                     { buttons() }
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}