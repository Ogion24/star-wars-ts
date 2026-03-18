import Text from "./Text.tsx";
import {useNavigate} from "react-router";
import {useEffect} from "react";

const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const anyClick = ( e: MouseEvent)=>{// Любой клик на странице возвращает на пред. страницу
            navigate(-1);
        }
        document.addEventListener("click", anyClick);//обработчик на всё тело страницы
    return () => {
        document.removeEventListener("click", anyClick);
    }
    }, [navigate]);
    return (
        <Text>
            O-o-ops! Something went wrong...
        </Text>

    );
};

export default ErrorPage;