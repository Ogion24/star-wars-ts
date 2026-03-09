import type {ReactNode} from "react";

type TextProps = {
    children: ReactNode;
}
const Text = ({children}: TextProps) => {
    return (
        <p className="text-3xl text-justify tracking-widest leading-normal">
            {children}
        </p>
    )
}
export default Text;