import closeDark from "../../icons/close-dark.png"
import closeWhite from "../../icons/close-white.png"
import links from "../../links";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import type { RootState } from "../../store";
import { closeModalSearch } from "../../store/ModalSlice";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const ModalSearch = () => {
    const theme = useAppSelector((state: RootState) => state.theme.mode)
    const modal = useAppSelector((state: RootState) => state.modalSearch)
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const closeIcon = theme === "dark" ? closeWhite : closeDark

    const [filteredLinks, setFilteredLinks] = useState(links);
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search, 1000)

    useEffect(() => {
        const filtered = links.filter(links => links.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredLinks(filtered)
    }, [debouncedSearch])

    useEffect(() => {
        if (modal.isOpen) {
            document.body.classList.add("overflow-hidden")
            inputRef.current?.focus()
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [modal.isOpen])

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    dispatch(closeModalSearch())
                }
            }}
            className={`${!modal.isOpen && "hidden"} absolute inset-0 bg-black/60 flex justify-center items-center z-50`}>
            <div className="dark:bg-neutral-900 bg-white border border-black/20 dark:border-white/10 rounded-xl max-w-[600px] w-full max-h-[500px] h-full flex flex-col relative">
                <div className="border-b border-black/20 dark:border-white/10 p-4">
                    <input 
                     ref={inputRef} 
                     value={search} 
                     onChange={(e) => setSearch(e.target.value)} 
                     className="focus:outline-none w-full" type="text" 
                     placeholder="Поиск..." />
                </div>
                <ul className="pl-4 pt-4 pr-4 h-full overflow-y-auto">
                    {filteredLinks.length === 0 ?
                    <h3 className="text-center text-xl">К сожалению такой страницы нет</h3>
                    : filteredLinks.map((link, index) => (
                        <li className="p-1 pl-2 mb-2 flex rounded-lg hover:bg-black/50" key={index}>
                            <Link onClick={() => dispatch(closeModalSearch())} className="w-full" to={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => dispatch(closeModalSearch())}
                    className="p-1 m-4 cursor-pointer border-black/50 dark:border-white/20 border rounded-2xl absolute right-0 top-0"
                    aria-label="Закрыть меню">
                    <img src={closeIcon} alt="Close" className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}