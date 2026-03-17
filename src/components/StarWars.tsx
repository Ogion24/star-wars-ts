import { starWarsInfo} from "../utils/constants.ts";
import Text from "./Text.tsx";

import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "./hook/customHook.ts";

const StarWars = () => {
    const {isHeroValid} = useValidHero();

    return isHeroValid ? <Text>{starWarsInfo}</Text> : <ErrorPage/>
}

export default StarWars;