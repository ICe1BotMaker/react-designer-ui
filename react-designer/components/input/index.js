import './input.css';

export default function Input({ onKeyDown, onKeyUp, helperText, placeholder, style }) {
    return (
        <div style={style} className="rd-input-input-group">
            <label className="rd-input-input-underlined">
                <span className="rd-input-input-label">{placeholder}</span>
                <span className="rd-input-input-helper">{helperText}</span>
                <input onKeyDown={onKeyDown} onKeyUp={onKeyUp} required />
            </label>
        </div>
    )
}