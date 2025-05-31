import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import burgerIcon from "../../icons/burger.png";
import closeIcon from "../../icons/close.png";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleTheme } from "../../store/themeSlice";

const NavBar: React.FC<{tailWind: string }> = ({ tailWind }) => {
    const theme = useAppSelector((state) => state.theme.mode )

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
        <nav className={`md:flex items-center md:gap-2 lg:gap-4 space-y-2 md:space-y-0 transition-all ease-in duration-500 text-zinc-300 ${tailWind}`}>
                    <Link to={"/"} className="flex items-center ml-1 gap-2 font-bold text-lg">
                        <span>🧑‍💻</span>
                        <span className={`${theme === 'dark' ? 'text-white':'text-black'}`}>Hack Frontend</span>
                    </Link>
                    <ul className="md:flex md:gap-2 lg:gap-4 space-y-3 md:space-y-0 text-sm text-zinc-300">
                        <li>
                            <NavLink to={"/knowledge/introduction"} end
                                className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}
                            >База знаний</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/tasks"} end className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}>База задач</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/service"} end className={({ isActive }) =>`px-2 py-1 rounded-lg transition ${getLinkClass(isActive)}`}>Услуги</NavLink>
                        </li>
                    </ul>
                </nav>
    )
};


export function AppHeader() {
    const location = useLocation();
    const isAuthPage = location.pathname.startsWith("/auth")

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)

    const dispatch = useAppDispatch()
    const theme = useAppSelector((state) => state.theme.mode )

    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        }, [theme]);

    if (isAuthPage) return null


    return ( 
        <header className={`${theme==="dark" ? "border-white/10" : " border-gray-200"} border-b`}>
            <div className="max-w-[1850px] mx-auto border-b border-white/10 text-white px-4 py-2 flex items-center justify-between">
                {/* Левая часть навигации (md+) */}
                <NavBar tailWind="md:visible hidden"/>
                {/* Бургер-кнопка для мобилки */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2"
                    aria-label="Открыть меню">
                    <img className="w-6 h-6" src={burgerIcon} alt="Menu" />
                </button>

                {/* Правая часть (поиск, кнопки) */}
                <div className="flex items-center gap-3">
                    <div className="relative md:block hidden">
                        <input type="text" placeholder="Поиск..." className={`text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 transition-colors duration-300 border 
                            ${theme === "dark" ? "bg-white/10 text-white border-white/10 placeholder-white/60" : "bg-gray-100 text-black border-gray-100 placeholder-gray-400"}`} />
                        <span className="absolute left-2 top-1.5 text-zinc-400">🔍</span>
                    </div>

                    <button className={`md:hidden rounded-lg p-2 transition-colors duration-300 border ${theme === "dark" ? "border-white/10 hover:bg-white/10 text-white" : "border-gray-200 hover:bg-black/10 text-black"}`}>
                        🔍
                    </button>

                    <button className={`rounded-lg p-2 text-sm transition-colors duration-300 border ${theme === "dark" ? "border-white/10 hover:bg-white/10 text-white":"border-gray-200 hover:bg-black/10 text-black"}`}>
                        ➕
                    </button>    

                    <button onClick={()=>dispatch(toggleTheme())} className={`rounded-lg p-2 text-sm transition-colors duration-300 border ${theme === "dark"? "border-white/10 hover:bg-white/10 text-white": "border-gray-200 hover:bg-black/10 text-black"}`}>
                        { theme === "dark" ? "🌙" : "🌞"}
                    </button>
                    <Link to={"/auth/login"} className={`rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-white/10 transition dark:bg-white dark:text-black ${theme === 'dark' ? 'border-2 border-white/10':'border border-gray-200 text-black'} `} >
                        Войти
                    </Link>
                </div>  

                {/* Мобильное бургер меню */}
                <div
                    className={`
                fixed top-0
                overflow-y-auto
                ${isOpen ? 'left-0' : '-left-full'}
                w-3/4 h-full p-3
                bg-black
                transition-all duration-700 ease-in
                z-50
                flex flex-col`}>

                    <button
                        onClick={toggleMenu}
                        className="self-end p-1 m-2 border-white/20 border rounded-2xl absolute"
                        aria-label="Закрыть меню">
                        <img src={closeIcon} alt="Close" className="w-4 h-4" />
                    </button>
                    <NavBar tailWind=""/>

                </div>
            </div>
        </header>
    );
}
