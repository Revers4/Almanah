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

    const getLinkClass = (isActive: boolean) => {
        if (isActive) {
            return theme === "dark"
            ? "text-white font-bold"
            : "text-black font-bold";
        }
        return theme === "dark"
            ? "text-gray-400 hover:text-white hover:bg-white/10"
            : "text-gray-600 hover:text-black hover:bg-black/10";
        };

    return ( 
        <header className={`${theme==="dark" ? "border-white/10" : " border-gray-200"} border-b transition-colors duration-300`}>
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
                        <span className={`${theme === "dark" ? "text-white":"text-black"}`}>Hack Frontend</span>
                    </Link>
                    <nav className={"flex gap-4 text-sm text-zinc-300"}>
                        <NavLink to={"/knowledge/introduction"} end
                        className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                        >База знаний</NavLink>
                        <NavLink to={"/tasks"} end 
                        className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                        >База задач</NavLink>
                        <NavLink to={"/services"} end 
                        className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                        >Услуги</NavLink>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input type="text" placeholder="Поиск..." className={`bg-gray-100 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 border transition-colors duration-300 ${theme === "dark" ? "bg-white/10 text-white border-white/10 placeholder-white/60":"text-black border-gray-100 placeholder-gray-400 "} `} />
                        <span className="absolute left-2 top-1.5 text-zinc-400">🔍</span>
                    </div>

                    <button className={`rounded-lg p-2 text-sm transition-colors duration-300 border ${theme === "dark" ? "border-white/10 hover:bg-white/10 text-white":"border-gray-200 hover:bg-black/10 text-black"}`}>
                        ➕
                    </button>
                    <button onClick={()=>dispatch(toggleTheme())} className={`rounded-lg p-2 text-sm transition-colors duration-300 border ${theme === "dark"? "border-white/10 hover:bg-white/10 text-white": "border-gray-200 hover:bg-black/10 text-black"}`}>
                        { theme === "dark" ? "🌙" : "🌞"}
                    </button>

                    <button className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 border ${theme === "dark"? "border-white/10 hover:bg-white/10 text-white": "border-gray-200 hover:bg-black/10 text-black"}`} >
                        Войти
                    </button>
                </div>
            </div>
        </header>
    );
}