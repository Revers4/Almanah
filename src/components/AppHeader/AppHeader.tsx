import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import burgerWhite from "../../icons/burger-white.png";
import burgerDark from "../../icons/burger-dark.png";
import closeDark from "../../icons/close-dark.png"
import closeWhite from "../../icons/close-white.png"

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { toggleTheme } from "../../store/ThemSlice";

const NavBar: React.FC<{ tailWind: string }> = ({ tailWind }) => {
    const isKnowlengeActive = location.pathname.startsWith("/knowledge")

    const navLinkClasses = "hover:text-black hover:bg-black/10 dark:hover:text-white dark:hover:bg-white/10 px-2 py-1 rounded-lg transition opacity-85"

    return (
        <nav className={`md:flex items-center md:gap-2 lg:gap-4 space-y-2 md:space-y-0 ${tailWind}`}>
                    <Link to={"/"} className="flex items-center ml-1 gap-2 font-bold text-lg">
                        <span>🧑‍💻</span>
                        <span>Hack Frontend</span>
                    </Link>
                    <ul className="md:flex md:gap-2 lg:gap-4  space-y-3 md:space-y-0 text-sm">
                        <li>
                            <NavLink to={"/knowledge/introduction"} end
                                className={() =>
                                    `${navLinkClasses} ${isKnowlengeActive ? "font-bold opacity-100" : ""}`}
                            >База знаний</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} end className={`${navLinkClasses}`}>База задач</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} end className={`${navLinkClasses}`}>Услуги</NavLink>
                        </li>
                    </ul>
                </nav>
    )
}

export function AppHeader() {
    const location = useLocation();
    const isAuthPage = location.pathname.startsWith("/auth")
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)
    
    const theme = useSelector((state: RootState) => state.theme.mode);
    const dispatch = useDispatch()
    
    const icon = theme === "dark" ? "🌙" : "🌞";
    const burgerIcon = theme === "dark" ? burgerWhite : burgerDark
    const closeIcon = theme === "dark" ? closeWhite : closeDark

    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isOpen])

    useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    if (isAuthPage) return null

    return (
        <header>
            <div className="max-w-[1850px] mx-auto border-b border-black/20 dark:border-white/10 px-4 py-2 flex items-center justify-between">
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
                        <input type="text" placeholder="Поиск..." className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-700/50" />
                        <span className="absolute left-2 top-1.5">🔍</span>
                    </div>

                    <button className="md:hidden bg-black/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition">
                        <span className="">🔍</span>
                    </button>

                    <button className="hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition cursor-pointer">
                        ➕
                    </button>
                    <button onClick={() => dispatch(toggleTheme())} className=" hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition cursor-pointer">
                        {icon}
                    </button>

                    <Link to={"/auth/login"} className="hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm font-medium transition">
                        Войти
                    </Link>
                </div>

                {/* Мобильное бургер меню */}
                <div onClick={toggleMenu} className={`z-5 bg-black/50 absolute inset-0 ${!isOpen && "hidden"}`}></div>
                <div
                    className={`
                 fixed top-0
                 overflow-y-auto
                 ${isOpen ? "left-0 border-r border-black/25 dark:border-white/15" : "-left-full"}
                 w-3/4 h-full p-3
                 bg-white
                 dark:bg-black
                 transition-all duration-400 ease-in
                 z-50
                 flex flex-col`}>
                    <button
                        onClick={toggleMenu}
                        className="self-end p-1 m-2 border-black/50 dark:border-white/20 border rounded-2xl absolute"
                        aria-label="Закрыть меню">
                        <img src={closeIcon} alt="Close" className="w-4 h-4" />
                    </button>
                    <NavBar tailWind="space-y-5"/>

                </div>
            </div>
        </header>
    );
}
