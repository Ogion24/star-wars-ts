type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}
const Button = ({children, onClick}: ButtonProps) => {
    return (
        <div
            onClick={onClick}
            className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white text-center col-start-3`}
            >
            {children}
        </div>
    )
}
export default Button