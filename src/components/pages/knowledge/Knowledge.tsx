import { NavLink, Outlet } from "react-router-dom";

export default function Knowledge() {
    return (
        <section className="flex gap-8 min-h-[80vh] p-8">
            <aside className="min-w-[230px] sticky top-16 h-fit overflow-y-auto space-y-4">
                <NavLink
                    className={({ isActive }) =>
                        ` block transition ${isActive ? 'font-bold' : ''}`} to={"/knowledge/introduction"}>Hack Frontend</NavLink>
                <NavLink className={({ isActive }) =>
                    ` block transition ${isActive ? 'font-bold' : ''}`} to={"/knowledge/preparation-guide"}>Гайд по подготовке</NavLink>
                <hr className="border-black/20 dark:border-white/20" />
                <h1 className="font-bold">Разделы</h1>

            </aside>
            <Outlet />
        </section>
    );
}