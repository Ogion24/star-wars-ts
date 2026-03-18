import {useContext, useEffect} from "react";
import {SWContext} from "../../utils/context.ts";
import {characters, defaultHero} from "../../utils/constants.ts";
import {useParams} from "react-router";

export const useValidHero = () => {
    const {changeHero} = useContext(SWContext)
    const {heroId = defaultHero} = useParams();


    useEffect(() => {
        // if (!(heroId in characters)) { ...Если такого героя нет — ничего не делать
        //     return;
        // }
        changeHero(heroId);
    }, [heroId, changeHero]);//будет выполнятся useEffect при изменении хотя бы одного элемента массива
    return {
        heroId,
        isHeroValid: heroId in characters //есть ли такой ключ в объекте characters
    }

}

