import './style.css'

const Button = ({children, onClick, className, disabled}) => {
    return (
        <button onClick={onClick} className={`button ${className}`} disabled={disabled}>{children}</button>
    )
}

export default Button