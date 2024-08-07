import "./FormInput.styles.scss";

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
        {label &&
            <input  className="form-input"{...otherProps} />
        }
            <label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
            
        </div>
    )
}

export default FormInput;