import { Link } from "react-router-dom";
import telegramDarkTheme from "../../icons/telegram-dark.png";
import telegramLightTheme from "../../icons/telegram-light.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export function Footer() {
    const theme = useSelector((state: RootState) => state.theme.mode);
    const telegramIcon = theme === "dark" ? telegramLightTheme : telegramDarkTheme
    
    return (
        <footer className="max-w-[1850px] w-full mx-auto border-t border-black/20 dark:border-white/10 px-8 py-4">
                <div className="flex flex-col items-center gap-1 md:gap-4 md:flex-row md:justify-between">
                    <div>
                        © 2025 <Link to={'/'} className="font-semibold opacity-75 hover:opacity-100">Hack Frontend</Link>
                    </div>

                    <div>
                        <a href="#" className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 duration-200">
                            <img src={telegramIcon} className="w-4 h-4" alt="Telegram" />
                            <span className="font-semibold">Hack Frontend Community</span>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 duration-200">
                            <img src={telegramIcon} className="w-4 h-4" alt="Telegram" />
                            <span className="font-semibold">Поддержка</span>
                        </a>
                    </div>
                </div>
        </footer>
    );
}