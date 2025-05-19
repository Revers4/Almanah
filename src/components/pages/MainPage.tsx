import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <section className="flex items-center justify-center flex-col min-h-[80vh] text-white">
            <h1 className="text-white text-4xl font-bold mb-4 sm:text-7xl">Hack Frontend</h1>
            <p className="max-w-[600px] mb-8 text-center sm:text-base">
                <span className="font-bold">Hack Frontend</span> — это платформа, где вы сможете отточить навыки фронтенд-разработки и подготовиться к успешному собеседованию на должность фронтенд-разработчика.
            </p>
            <div>
                <Link className="bg-white text-black rounded" to={'/'}>Начать</Link>
                <Link to={'/'}>Наши услуги</Link>
            </div>
        </section>
    );
}