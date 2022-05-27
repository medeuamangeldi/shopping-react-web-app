import './button.styles.scss';

const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({children, buttonType, ...addProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...addProps}>{children}</button>
    )
};

export default Button;