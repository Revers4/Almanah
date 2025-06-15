import { Link, NavLink} from "react-router-dom";

const HeaderNavBar: React.FC<{ tailWind: string }> = ({ tailWind }) => {
    const isKnowlengeActive = location.pathname.startsWith("/knowledge")
    const isServiceActive = location.pathname.startsWith("/service")
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
                            <NavLink to={"/service"} end className={() =>
                            `${navLinkClasses} ${isServiceActive ? "font-bold opacity-100" : ""}`
                        }>Услуги</NavLink>
                        </li>
                    </ul>
                </nav>
    )
}

export default HeaderNavBar