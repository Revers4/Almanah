import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export function Footer() {

    const theme = useAppSelector((state) => state.theme.mode);
    
    return (
        <footer className={`text-white max-w-[1850px] w-full mx-auto px-8 py-4 border-t border-gray-200  ${theme==="dark" && "border-white/10"}`}>
                <div className={`flex flex-col items-center gap-1 md:gap-4 md:flex-row md:justify-between ${theme === "dark" ? "text-white":"text-black"}`}>
                    <div className="text-zinc-400">
                        © 2025 <Link to={"/"} className="font-semibold opacity-75 hover:opacity-100 transition">Hack Frontend</Link>
                    </div>

                    <div>
                        <a href="#" className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors duration-300">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                                </path>
                            </svg>
                            <span className="font-semibold">Hack Frontend Community</span>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors duration-300">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                                </path>
                            </svg>
                            <span className="font-semibold">Поддержка</span>
                        </a>
                    </div>
                </div>
        </footer>
    );
}