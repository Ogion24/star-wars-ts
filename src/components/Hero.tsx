import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";
import {useContext} from "react";

const Hero = () => {
    const {hero} = useContext(SWContext);
    return (

        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero hover:scale-110" src={characters[hero].img} alt={characters[hero].name}/>
        </section>
    )
}

export default Hero;