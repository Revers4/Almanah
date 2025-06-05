
const Service =() => {
    return (
        <section className="flex flex-col font-normal h-max p-4">
            <div className="mb-10">
                <h1 className="text-white text-4xl font-semibold">Раскройте потенциал в IT: проходите собеседования без стресса и получайте высокие офферы</h1>
            </div>
            <div className="grid gap-8">
                <div className="rounded-lg text-card-foreground shadow-sm text-white border border-white bg-transparent">
                    <div className="p-6">
                        <div>Полное сопровождение до оффера</div>
                        <div>25 000 ₽+ 50% от первой зарплаты</div>
                    </div>
                    <div className="p-6">
                        <p>Трансформируйте поиск работы в успешный старт карьеры</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Сделаем ваше резюме профессиональным, подчеркивающим ваши сильные стороны.</li>
                            <li>Эксклюзивный инсайд о процессах работы в айти компаниях: релизные циклы, Git Flow, процессы разработки и многое другое.</li>
                            <li>Практический гайд по софт-скиллам: как проходить HR-интервью и торговаться о зарплате.</li>
                            <li>Моковые интервью с лайв-кодингом и разбором ошибок.</li>
                            <li>Индивидуальный план развития тех. навыков и подготовка к собеседованиям.</li>
                            <li>Ежедневная поддержка и консультации в любой день.</li>
                        </ul>
                    </div>
                    <div className="flex items-center p-6 pt-0">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-[#7165D8] hover:bg-violet-600 text-white font-semibold">Начать карьерный рывок</button>
                    </div>
                </div>
                <div className="grid gap-6 grid-cols-3 text-white">
                    <div className="rounded-lg text-card-foreground shadow-sm border border-white bg-transparent">
                        <div className="p-6">
                            <div>Моковое интервью</div>
                            <div>2000₽ Почувствуйте уверенность перед реальным собеседованием</div>
                        </div>
                        <div className="p-6">
                            <ul className="list-disc list-inside mt-2">
                                <li>Реалистичная симуляция собеседования с разбором ответов.</li>
                                <li>Экспертные советы по укреплению сильных сторон и устранению пробелов.</li>
                                <li>Доступ ко всем бесплатным материалам платформы.</li>
                            </ul>
                            
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-10 px-4 py-2 w-full bg-[#7165D8] hover:bg-violet-600 text-white font-semibold break-words text-center">Записаться на пробное интервью</button>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border bg-transparent">
                        <div className="p-6">
                            <div>Профессиональное резюме </div>
                            <div>3000 ₽ Выделитесь на фоне сотен кандидатов</div>
                        </div>
                        <div className="p-6">
                            <ul className="list-disc list-inside mt-2">
                                <li>Индивидуальный подход с учётом ваших целей и опыта.</li>
                                <li>Оптимизация под требования крупных IT-компаний.</li>
                                <li>Гайды по оформлению и убедительной подаче достижений.</li>
                            </ul>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-10 px-4 py-2 w-full bg-[#7165D8] hover:bg-violet-600 text-white font-semibold break-words text-center">Заказать корректировку резюме</button>
                        </div>
                    </div>
                    <div className="rounded-lg text-card-foreground shadow-sm border bg-transparent">
                        <div className="p-6">
                            <div>Бесплатные материалы</div>
                            <div>0₽ навсегда Начните путь к успеху прямо сейчас</div>
                        </div>
                        <div className="p-6">
                            <ul className="list-disc list-inside mt-2">
                                <li>База знаний — развернутые ответы на самые популярные вопросы с собеседований.</li>
                                <li>База задач — подборка практических задач от ведущих IT-компаний с возможностью решать их прямо на платформе.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}  

export default Service;