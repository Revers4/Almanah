import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export default function MainPage() {

    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <section className={`flex items-center justify-center flex-col min-h-[80vh] text-white transition-colors duration-200 ${theme==='dark' ? 'bg-black' : 'bg-white '}`}>
            <h1 className={`text-4xl font-bold mb-5 sm:text-7xl ${theme==='dark' ? 'text-white' : 'text-black'}`}>Hack Frontend</h1>
            <p className={`max-w-[600px] mb-8 text-center sm:text-base ${theme==='dark' ? 'text-white' : 'text-black'}`}>
                <span className="font-bold" >Hack Frontend</span> — это платформа, где вы сможете отточить навыки фронтенд-разработки и подготовиться к успешному собеседованию на должность фронтенд-разработчика.
            </p>
            <div>
                <Link className={`rounded-lg px-4 py-2 mr-3 ${theme==='dark' ? 'text-black bg-white' : 'text-white bg-black'}`} to={'/'}>Начать</Link>
                <Link className={`rounded-lg border-1 border-gray-200 px-4 py-2 hover:bg-white/10 ${theme==='dark' ? 'text-white bg-black' : 'text-black bg-white '}`} to={'/'}>Наши услуги</Link>
            </div>
        </section>
    );
}