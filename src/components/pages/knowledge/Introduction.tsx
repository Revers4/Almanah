import { NavLink } from "react-router-dom";
import HighlightedText from "../../highLihgtedText/highLightedText";

export default function Introduction() {
    return (
        <article className="">
            <h1>Hack Frontend - Платформа для подготовки к фронтенд собеседованиям</h1>
            <HighlightedText text="Добро пожаловать в *Hack Frontend* — ваш надежный помощник в _подготовке к собеседованиям_!"/>
        </article>

    );
}