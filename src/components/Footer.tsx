import Button from "./Button.tsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-gray h-20 grid grid-cols-10 items-center">
            <Button onClick={() => console.log( 'for mail...')}>
                Send me email
            </Button>
        </footer>
    )
}

export default Footer;