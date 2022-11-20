import Button from '../button';
import './modal.css';

export default function Modal({ button = [{disabled: Boolean, id: String, key: String, onClick: Function}], visible = Boolean, children, style = {} }) {
    const bgClasses = visible ? `rd-ui-modal-background` : `rd-ui-modal-visible-false`;
    const classes = visible ? `rd-ui-modal` : ``;

    const buttons = () => {
        let result = [];

        for (let i = 0; i < button.length; i++) {
            const handleOnclick = button[i].onClick;
            result.push(<Button key={button[i].id} disabled={button[i].disabled} onClick={handleOnclick}>{button[i].key}</Button>);
        }

        return result;
    }

    return (
        <div className={bgClasses}>
            <div style={style} className={classes}>
                <div className="rd-ui-modal-main">
                    {visible ? children : ``}
                </div>
                <div className="rd-ui-modal-buttons">
                    {
                        buttons()
                    }
                </div>
            </div>
        </div>
    )
}