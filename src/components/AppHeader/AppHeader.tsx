import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import burgerIcon from "../../icons/burger.png";
import closeIcon from "../../icons/close.png"

const NavBar: React.FC<{ isKnowlengeActive: boolean, tailWind: string }> = ({ isKnowlengeActive, tailWind }) => {
    return (
        <nav className={`md:flex items-center md:gap-2 lg:gap-4 space-y-2 md:space-y-0
                       transition-all ease-in duration-500 ${tailWind}`}>
                    <Link to={"/"} className="flex items-center ml-1 gap-2 font-bold text-lg">
                        <span>🧑‍💻</span>
                        <span>Hack Frontend</span>
                    </Link>
                    <ul className="md:flex md:gap-2 lg:gap-4 space-y-3 md:space-y-0 text-sm text-zinc-300">
                        <li>
                            <NavLink to={"/knowledge/introduction"} end
                                className={() =>
                                    `hover:text-white hover:bg-white/10 px-2 py-1 rounded-lg transition ${isKnowlengeActive ? 'font-bold text-white' : ''}`}
                            >База знаний</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} end className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-lg transition">База задач</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} end className="hover:text-white hover:bg-white/10 px-2 py-1 rounded-lg transition">Услуги</NavLink>
                        </li>
                    </ul>
                </nav>
    )
}

export function AppHeader() {
    const location = useLocation();
    const isKnowlengeActive = location.pathname.startsWith("/knowledge")
    const isAuthPage = location.pathname.startsWith("/auth")

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)

    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    })

    if (isAuthPage) return null

    return (
        <header>
            <div className="max-w-[1850px] mx-auto border-b border-white/10 text-white px-4 py-2 flex items-center justify-between">
                {/* Левая часть навигации (md+) */}
                <NavBar isKnowlengeActive={isKnowlengeActive} tailWind="md:visible hidden"/>

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
                        <input type="text" placeholder="Поиск..." className="bg-white/10 text-sm text-white rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-700" />
                        <span className="absolute left-2 top-1.5 text-zinc-400">🔍</span>
                    </div>

                    <button className="md:hidden hover:bg-white/10 border border-white/10 rounded-lg p-1 transition">
                        <span className="">🔍</span>
                    </button>

                    <button className=" hover:bg-white/10 border border-white/10 rounded-lg p-1 transition">
                        ➕
                    </button>
                    <button className=" hover:bg-white/10 border border-white/10 rounded-lg p-1 transition">
                        🌓
                    </button>

                    <Link to={"/auth/login"} className="border border-white/10 rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-white/10 transition">
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
                    <NavBar isKnowlengeActive={isKnowlengeActive} tailWind=""/>

                </div>
            </div>
        </header>
    );
}
