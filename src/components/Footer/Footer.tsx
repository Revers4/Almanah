import { Link } from "react-router-dom";
import telegramIcon from "../../icons/telegram.png";

export function Footer() {
    return (
        <footer className="text-white max-w-[1850px] w-full mx-auto border-t border-white/10 px-8 py-4">
                <div className="flex flex-col items-center gap-1 md:gap-4 md:flex-row md:justify-between">
                    <div>
                        © 2025 <Link to={'/'} className="font-semibold opacity-75 hover:opacity-100 transition">Hack Frontend</Link>
                    </div>

                    <div>
                        <a href="#" className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
                            <img src={telegramIcon} className="w-4 h-4" alt="Telegram" />
                            <span className="font-semibold">Hack Frontend Community</span>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
                            <img src={telegramIcon} className="w-4 h-4" alt="Telegram" />
                            <span className="font-semibold">Поддержка</span>
                        </a>
                    </div>
                </div>
        </footer>
    );
}