import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <section className="flex items-center justify-center flex-col min-h-[80vh]">
            <h1 className=" text-4xl font-bold mb-5 sm:text-7xl">Hack Frontend</h1>
            <p className="max-w-[600px] mb-8 text-center sm:text-base">
                <span className="font-bold">Hack Frontend</span> — это платформа, где вы сможете отточить навыки фронтенд-разработки и подготовиться к успешному собеседованию на должность фронтенд-разработчика.
            </p>
            <div>
                <Link className="text-white bg-black dark:bg-white dark:text-black rounded-lg px-4 py-2 mr-5" to={'/'}>Начать</Link>
                <Link className="rounded-lg border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-white/10" to={'/'}>Наши услуги</Link>
            </div>
        </section>
    );
}