import telegramIcon from "../../icons/telegram-light.png";


export default function OtherLink() {
    return (
        <div className="bg-indigo-600 p-1">
            <a href="" target="_blank" className="flex text-white font-light items-center gap-2 mx-auto w-max hover:text-fuchsia-300 transition-colors duration-300 ease-in">
                <img src={telegramIcon} alt="Telegram logo" className="w-4" />
                <span className="font-bold">Hack Frontend Community</span>
            </a>
        </div>
    );
}