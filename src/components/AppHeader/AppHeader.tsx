import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import burgerWhite from "../../icons/burger-white.png";
import burgerDark from "../../icons/burger-dark.png";
import closeDark from "../../icons/close-dark.png"
import closeWhite from "../../icons/close-white.png"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import type { RootState } from "../../store";
import { openModalSearch } from "../../store/ModalSlice";
import { toggleTheme } from "../../store/ThemSlice";
import DefaultIcon from "../defaultIcon/DefaultIcon";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";

export function AppHeader() {
    const location = useLocation();
    const isAuthPage = location.pathname.startsWith("/auth")
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)
    
    const theme = useAppSelector((state: RootState) => state.theme.mode)
    const dispatch = useAppDispatch()
    
    const icon = theme === "dark" ? "🌙" : "🌞";
    const burgerIcon = theme === "dark" ? burgerWhite : burgerDark
    const closeIcon = theme === "dark" ? closeWhite : closeDark

    const userName = useAppSelector(state => state.user.name)

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
                <HeaderNavBar tailWind="md:visible hidden"/>

                {/* Бургер-кнопка для мобилки */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2"
                    aria-label="Открыть меню">
                    <img className="w-6 h-6" src={burgerIcon} alt="Menu" />
                </button>

                {/* Правая часть (поиск, кнопки) */}
                <div className="flex items-center gap-3">
                    <div
                     onClick={() => dispatch(openModalSearch())}
                     className="relative md:block hidden">
                        <input type="text" placeholder="Поиск..." className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-700/50" />
                        <span className="absolute left-2 top-1.5">🔍</span>
                    </div>

                    <button
                     onClick={() => dispatch(openModalSearch())}
                     className="md:hidden bg-black/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition">
                        <span className="">🔍</span>
                    </button>

                    <button className="hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition cursor-pointer">
                        ➕
                    </button>
                    <button onClick={() => dispatch(toggleTheme())} className=" hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition cursor-pointer">
                        {icon}
                    </button>

                    {userName 
                        ? (<DefaultIcon/>)
                        : (<Link to={"/auth/login"} 
                                className="hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm font-medium transition">
                                    Войти
                            </Link>)}
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
                 flex flex-col
                 max-w-sm`}>
                    <button
                        onClick={toggleMenu}
                        className="self-end p-1 m-2 border-black/50 dark:border-white/20 border rounded-2xl absolute"
                        aria-label="Закрыть меню">
                        <img src={closeIcon} alt="Close" className="w-4 h-4" />
                    </button>
                    <HeaderNavBar tailWind="space-y-5"/>
                </div>
            </div>
        </header>
    );
}