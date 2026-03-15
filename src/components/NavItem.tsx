
import Button from "./Button.tsx";
import {NavLink} from "react-router";



const NavItem = ({itemTitle}:{itemTitle: string}) => {

    return (

        <NavLink  to={`/${itemTitle.toLowerCase()}`}>
            <Button >{itemTitle} </Button>
        </NavLink>
    )
}
            // <a href={`/${itemTitle}`}>
            // <Button >{itemTitle} </Button>
            // </a>
export default NavItem;