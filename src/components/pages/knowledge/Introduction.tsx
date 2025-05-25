import HighlightedText from "../../highLihgtedText/HighLightedText";

export default function Introduction() {
    return (
        <article>
            <div className="space-y-5">
                <h1 className="text-4xl font-bold">Hack Frontend - Платформа для подготовки к фронтенд собеседованиям</h1>
                <HighlightedText text="Добро пожаловать в *Hack Frontend* — ваш надежный помощник в подготовке к собеседованиям!" />
                <p>Мы понимаем, что подготовка к собеседованию на позицию фронтенд разработчика может быть сложной задачей. Веб-технологии постоянно развиваются, конкуренция на рынке труда растет, и важно быть готовым ко всем вопросам. Поэтому мы создали эту платформу, чтобы помочь вам не только освежить знания по ключевым аспектам фронтенд-разработки, но и приобрести практический опыт в решении типичных задач, которые могут встретиться на собеседованиях.</p>
                <HighlightedText text="*Hack Frontend* — это платформа, которая объединяет теоретические знания и *практические задачи*, чтобы вы могли подготовиться к собеседованию максимально эффективно." />
            </div>
            <hr className="border-white/20 my-8" />
            <div className="space-y-4">
                <h2 className="font-bold text-lg">Что мы предлагаем?</h2>
                <h2 className="font-bold">База знаний</h2>
                <HighlightedText text="_База знаний_=>../introduction<= — это ваш гид по самым важным темам фронтенд-разработки. Здесь вы найдете ответы на популярные вопросы, которые часто задают на собеседованиях. Основные разделы:" />
                <ul className="list-disc list-outside pl-6">
                    <li><HighlightedText text="_JavaScript_=>../javascript<= (от основ до продвинутых концепций)" /></li>
                    <li><HighlightedText text="_HTML & CSS_=>../html-and-css<= (вёрстка, семантика, адаптивный дизайн)" /></li>
                    <li><HighlightedText text="_React_=>react<= (Virtual DOM, хуки, JSX и многое другое)" /></li>
                    <li><HighlightedText text="_TypeScript_=>../typescript<= (типизация, generics, utility-типы)" /></li>
                    <li><HighlightedText text="_Общие вопросы_=>../general-questions<= (HTTP, CORS, REST, оптимизация)" /></li>
                    <li><HighlightedText text="_Архитектура_=>../architecture<= (FSD, Atomic, Модульная)" /></li>
                    <li><HighlightedText text="_Принципы_=>../principles<= (SOLID, DRY, KISS)" /></li>
                    <li><HighlightedText text="_Паттерны_=>../patterns<= (Абстрактная фабрика, Декоратор, Singleton, Наблюдатель)" /></li>
                </ul>
                <h2 className="font-bold">База задач</h2>
                <HighlightedText text="_База задач_=>/tasks<= — это практические задания, которые помогут вам закрепить знания и подготовиться к реальным собеседованиям. Решайте задачи прямо на платформе и получайте мгновенную обратную связь." />
            </div>
           <hr className="border-white/20 my-8"/>
            <div className="space-y-4">
                <h2 className="font-bold text-lg">Как начать?</h2>
                <ul className="list-disc list-outside pl-6">
                    <li><HighlightedText text="*Изучите базу знаний*: Освежите теорию и узнайте новые концепции." /></li>
                    <li><HighlightedText text="*Решайте задачи*: Практикуйтесь на реальных примерах." /></li>
                    <li><HighlightedText text="*Пройдите собеседование*: Уверенно отвечайте на вопросы и решайте задачи." /></li>
                </ul>
                <HighlightedText text="_Присоединяйтесь к нам_=>/auth/login<= уже сегодня и сделайте шаг к успешной карьере фронтенд-разработчика!"/>
            </div>
           <hr className="border-white/20 my-8"/>
            <div className="bg-green-900/40 py-6 px-4 border-1 border-green-400/40 rounded-xl">
                <h2 className="mb-2">Совет от профессионалов:</h2>
                <p>Начните с базы знаний, чтобы освежить теорию, а затем переходите к практике. Так вы сможете уверенно отвечать на вопросы и решать задачи на собеседовании!</p>
            </div>
        </article>

    );
}