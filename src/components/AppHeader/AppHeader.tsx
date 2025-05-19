import { Link, NavLink } from "react-router-dom";
import telegramIcon from "../../icons/telegram.png";

export function AppHeader() {
    return (
        <header>
            <div className="bg-indigo-600">
                <nav className="p-1">
                    <a href="/" className="flex text-white font-light items-center gap-2 mx-auto w-max hover:text-fuchsia-300 transition-colors duration-300 ease-in">
                        <img src={telegramIcon} alt="Telegram logo" className="w-4" />
                        <span className="">Hack Frontend Community</span>
                    </a>
                </nav>
            </div>
            <div className="bg-black max-w-[1850px] mx-auto border-b border-white/10 text-white px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to={"/"} className="flex items-center gap-2 font-bold text-lg">
                        <span>🧑‍💻</span>
                        <span>Hack Frontend</span>
                    </Link>
                    <nav className="flex gap-4 text-sm text-zinc-300">
                        <NavLink to={"/"} className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-md transition">База знаний</NavLink>
                        <NavLink to={"/"} className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-md transition">База задач</NavLink>
                        <NavLink to={"/"} className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-md transition">Услуги</NavLink>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input type="text" placeholder="Поиск..." className="bg-white/10 text-sm text-white rounded-md pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700" />
                        <span className="absolute left-2 top-1.5 text-zinc-400">🔍</span>
                    </div>

                    <button className="bg-black hover:bg-white/10 border border-white/10 rounded p-1 transition">
                        ➕
                    </button>
                    <button className="bg-black hover:bg-white/10 border border-white/10 rounded p-1 transition">
                        🌓
                    </button>

                    <button className="bg-white text-black rounded-md px-3 py-1 text-sm font-medium hover:bg-zinc-200 transition">
                        Войти
                    </button>
                </div>
            </div>
        </header>
    );
}