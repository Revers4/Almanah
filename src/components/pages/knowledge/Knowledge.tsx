import { NavLink, Outlet } from "react-router-dom";

export default function Knowledge() {
    return (
        <section className="flex gap-8 min-h-[200vh] p-8 text-white ">
            <aside className="sticky font-normal w-64 top-8h-max p-4 rounded space-y-4">
                <NavLink
                    className={({ isActive }) =>
                        ` block transition ${isActive ? 'font-bold' : ''}`} to={"/knowledge/introduction"}>Hack Frontend</NavLink>
                <NavLink className={({ isActive }) =>
                    ` block transition ${isActive ? 'font-bold' : ''}`} to={"/knowledge/preparation-guide"}>Гайд по подготовке</NavLink>
                <hr className="border-white/20" />
                <h1 className="font-bold">Разделы</h1>

            </aside>
            <Outlet />
        </section>
    );
}