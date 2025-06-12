import { Link } from "react-router-dom";

const Service =() => {
    return (
        <section className="flex flex-col font-normal h-max p-4 max-w-7xl mx-auto">
            <div className="mb-6 md:mb-10 ">
                <h1 className="text-2xl md:text-4xl font-semibold">Раскройте потенциал в IT: проходите собеседования без стресса и получайте высокие офферы</h1>
            </div>
            <div className="grid gap-8">
                <div className="rounded-lg text-card-foreground shadow-sm  border border-black/20 dark:border-white/10 bg-transparent">
                    <div className="p-4 md:p-6">
                        <div className="font-semibold text-xl md:text-2xl">Полное сопровождение до оффера</div>
                        <div className="mt-2 flex gap-2 sm:flex-row sm:gap-2">
                            <span className="text-zinc-500 font-semibold">25 000 ₽</span>
                            <span className="text-[#7165D8]  font-semibold">+50% от первой зарплаты</span>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 pt-0">
                        <p>Трансформируйте поиск работы в успешный старт карьеры</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm md:text-base">
                            <li>Сделаем ваше резюме профессиональным, подчеркивающим ваши сильные стороны.</li>
                            <li>Эксклюзивный инсайд о процессах работы в айти компаниях: релизные циклы, Git Flow, процессы разработки и многое другое.</li>
                            <li>Практический гайд по софт-скиллам: как проходить HR-интервью и торговаться о зарплате.</li>
                            <li>Моковые интервью с лайв-кодингом и разбором ошибок.</li>
                            <li>Индивидуальный план развития тех. навыков и подготовка к собеседованиям.</li>
                            <li>Ежедневная поддержка и консультации в любой день.</li>
                        </ul>
                    </div>
                    <div className="flex items-center p-4 pt-0 md:p-6">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-[#7165D8] hover:bg-violet-600 text-white font-semibold cursor-pointer">Начать карьерный рывок</button>
                    </div>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col h-full rounded-lg text-card-foreground shadow-sm border border-black/20 dark:border-white/10 bg-transparent">
                        <div className="p-4 flex-grow md:p-6">
                            <div className="font-semibold text-xl md:text-2xl">Моковое интервью</div>
                            <div className="mt-2 text-zinc-500">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl font-bold md:text-2xl">2000 </span>
                                    <p className="text-sm mt-1">₽</p>
                                </div>
                                <span className="text-sm mt-1 block">Почувствуйте уверенность перед реальным собеседованием</span>
                            </div>
                        </div>
                        <div className="p-4 flex-grow md:p-6">
                            <ul className="list-disc list-inside mt-2 text-sm md:text-base">
                                <li>Реалистичная симуляция собеседования с разбором ответов.</li>
                                <li>Экспертные советы по укреплению сильных сторон и устранению пробелов.</li>
                                <li>Доступ ко всем бесплатным материалам платформы.</li>
                            </ul>
                            
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-10 px-4 py-2 w-full bg-[#7165D8] hover:bg-violet-600 text-white font-semibold break-words text-center cursor-pointer">Записаться на пробное интервью</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-full rounded-lg text-card-foreground shadow-sm border border-black/20 dark:border-white/10 bg-transparent">
                        <div className="p-4 flex-grow md:p-6">
                            <div className="font-semibold text-xl break-words md:text-2xl">Профессиональное резюме </div>
                            <div className="mt-2 text-zinc-500">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl font-bold md:text-2xl">3000</span>
                                    <p className="text-sm mt-1">₽</p>
                                </div>
                                <span className="text-sm mt-1 block">Выделитесь на фоне сотен кандидатов</span>
                            </div>
                        </div>
                        <div className="p-4 flex-grow md:p-6">
                            <ul className="list-disc list-inside mt-2 space-y-1 text-sm md:text-base">
                                <li>Индивидуальный подход с учётом ваших целей и опыта.</li>
                                <li>Оптимизация под требования крупных IT-компаний.</li>
                                <li>Гайды по оформлению и убедительной подаче достижений.</li>
                            </ul>
                        </div>
                        <div className="flex items-center p-4 pt-0 md:p-6">
                            <button className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-10 px-4 py-2 w-full bg-[#7165D8] hover:bg-violet-600 text-white font-semibold break-words text-center cursor-pointer">Заказать корректировку резюме</button>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border border-black/20 dark:border-white/10 bg-transparent">
                        <div className="p-4 md:p-6">
                            <div className="font-semibold text-xl md:text-2xl">Бесплатные материалы</div>
                            <div className="mt-2 text-zinc-500">
                                <div className="flex items-baseline gap-1">
                                    <p className="text-xl font-bold md:text-2xl"> 0 </p>
                                    <span className="text-sm mt-1">₽ навсегда</span>
                                </div>
                                <span className="text-sm mt-1 block">Начните путь к успеху прямо сейчас</span>
                            </div>
                        </div>
                        <div className="p-4 md:p-6">
                            <ul className="list-disc list-inside mt-2 space-y-1 text-sm md:text-base">
                                <li>
                                    <Link className="font-semibold underline text-[#7165D8] hover:text-violet-700" to={"/knowledge/introduction"}>База знаний</Link>  — развернутые ответы на самые популярные вопросы с собеседований.
                                </li>
                                <li>
                                    <Link className="font-semibold underline text-[#7165D8] hover:text-violet-700" to={"/"}>База задач</Link> — подборка практических задач от ведущих IT-компаний с возможностью решать их прямо на платформе.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}  

export default Service;