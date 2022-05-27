import './form-input.styles.scss';


const FormInput = ({ label, ...addProps }) => {

    return (
        <div className='group'>
            <input className='form-input' {...addProps}/>
            {label && (
                <label className={`${addProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    );
};

export default FormInput;