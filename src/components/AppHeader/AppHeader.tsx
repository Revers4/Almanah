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
            return theme === 'dark'
            ? 'text-white font-bold'
            : 'text-black font-bold';
        }
        return theme === 'dark'
            ? 'text-gray-400 hover:text-white hover:bg-white/10'
            : 'text-gray-600 hover:text-black hover:bg-black/10';
        };

    return ( 
        <header className={`${theme==='dark' ? 'bg-black border-b border-white/10' : 'bg-white border-b border-gray-200'}  transition-colors duration-300`}>
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
                    <nav className={`flex gap-4 text-sm text-zinc-300`}>
                        <NavLink to={"/knowledge/introduction"} end
                        className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                        >База знаний</NavLink>
                        <NavLink to={"/"} end 
                        className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                        >База задач</NavLink>
                        <NavLink to={"/"} end 
                        className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                        >Услуги</NavLink>
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