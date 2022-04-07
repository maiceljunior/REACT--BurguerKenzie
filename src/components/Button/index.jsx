import "./button.css"

export const Button = ({ children, className, onClick, id }) => {
    return <button id={id} className={className} onClick={onClick}>{children}</button>
}