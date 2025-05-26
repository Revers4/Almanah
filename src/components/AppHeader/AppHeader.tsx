import { Link, NavLink, useLocation } from "react-router-dom";
import telegramIcon from "../../icons/telegram.png";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleTheme } from "../../store/themeSlice";
import { useEffect } from "react";

export function AppHeader() {
    const location = useLocation();
    const isKnowlengeActive = location.pathname.startsWith("/knowledge")

    const dispatch = useAppDispatch()
    const theme = useAppSelector((state) => state.theme.mode )

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        }, [theme]);
    console.log(theme)

    return (
        <header className={`${theme==='dark' ? 'bg-black' : 'bg-white '} transition-colors duration-200`}>
            <div className="bg-indigo-600">
                <nav className="p-1">
                    <a href="/" className="flex text-white font-light items-center gap-2 mx-auto w-max hover:text-fuchsia-300 transition-colors duration-300 ease-in">
                        <img src={telegramIcon} alt="Telegram logo" className="w-4" />
                        <span className="font-bold">Hack Frontend Community</span>
                    </a>
                </nav>
            </div>
            <div className="max-w-[1850px] mx-auto border-b border-white/10 text-white px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to={"/"} className="flex items-center gap-2 font-bold text-lg">
                        <span>🧑‍💻</span>
                        <span className={`${theme === 'dark' ? 'text-white':'text-black'}`}>Hack Frontend</span>
                    </Link>
                    <nav className="flex gap-4 text-sm text-zinc-300">
                        <NavLink to={"/knowledge/introduction"} end
                            className={() =>
                                `text-gray-400 hover:text-gray-200 hover:bg-white/10 px-2 py-1 rounded-lg transition ${isKnowlengeActive ? 'font-bold text-white' : ''}`}
                        >База знаний</NavLink>
                        <NavLink to={"/"} end className=" text-gray-400 hover:text-gray-200 hover:bg-white/10 px-2 py-1 rounded-lg transition">База задач</NavLink>
                        <NavLink to={"/"} end className=" text-gray-400 hover:text-gray-200 hover:bg-white/10 px-2 py-1 rounded-lg transition">Услуги</NavLink>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input type="text" placeholder="Поиск..." className={`bg-white/10 text-sm text-white rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 ${theme === 'dark' ? 'border border-white/10':'border border-gray-200 placeholder-gray-400 '} `} />
                        <span className="absolute left-2 top-1.5 text-zinc-400">🔍</span>
                    </div>

                    <button className={`hover:bg-white/10  rounded-lg p-1 transition ${theme === 'dark' ? 'border-2 border-white/10':'border border-gray-200'}`}>
                        ➕
                    </button>
                    <button onClick={()=>dispatch(toggleTheme())} className={`hover:bg-white/10 rounded-lg p-1 transition ${theme === 'dark' ? 'border-2 border-white/10':'border border-gray-200'} `}>
                        { theme === 'dark' ? '🌙' : '🌞'}
                    </button>

                    <button className={`rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-white/10 transition dark:bg-white dark:text-black ${theme === 'dark' ? 'border-2 border-white/10':'border border-gray-200 text-black'} `} >
                        Войти
                    </button>
                </div>
            </div>
        </header>
    );
}