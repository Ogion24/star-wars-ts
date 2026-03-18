import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";


const Header = () => {
    const {hero} = useContext(SWContext);

    const isValid = hero in characters;
    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">
                {isValid ? characters[hero]?.name :"Hero not found"}</h1>
        </header>
    )
}

export default Header;