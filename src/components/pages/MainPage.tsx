import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export default function MainPage() {

    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <section className={"flex items-center justify-center flex-col min-h-[80vh] text-white transition-colors duration-300"}>
            <h1 className={`text-4xl font-bold mb-5 sm:text-7xl ${theme==="dark" ? "text-white" : "text-black"}`}>Hack Frontend</h1>
            <p className={`max-w-[600px] mb-8 text-center sm:text-base ${theme==="dark" ? "text-white" : "text-black"}`}>
                <span className="font-bold" >Hack Frontend</span> — это платформа, где вы сможете отточить навыки фронтенд-разработки и подготовиться к успешному собеседованию на должность фронтенд-разработчика.
            </p>
            <div>
                <Link className={`rounded-lg px-4 py-2 mr-3 ${theme==="dark" ? "text-black bg-white" : "text-white bg-black"}`} to={"/"}>Начать</Link>
                <Link className={`rounded-lg border px-4 py-2 hover:bg-white/10 ${theme==="dark" ? "border-white/20 text-white bg-black" : "border-gray-300 text-black bg-white"}`} to={"/"}>Наши услуги</Link>
            </div>
        </section>
    );
}