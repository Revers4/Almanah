import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../../API/authApi";
import { useState } from "react";

export default function LoginPage() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerMutation, {isError, isLoading}] = useRegisterMutation()

    const registerFunc = async () => {
        if(password === confirmPassword){
            const body = {
                login,
                password
            };
            await registerMutation(body).unwrap();
        }

    }

    return (
        <>
            {isLoading &&
                <div className="bg-black/15 w-full h-full absolute top-0 bottom-0 left-0 right-0 text-white flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent" />
                </div>
            }
            <header className="text-center space-y-2">
                <Link className="block text-3xl font-bold" to={'/'}>Hack Frontend</Link>
                <h1 className="opacity-60">Создать аккаунт!</h1>
            </header>
            <form onSubmit={(e) => {
                e.preventDefault();
                registerFunc();
            }} className="space-y-6">
                <div className="flex flex-col space-y-2">
                    <label className="font-bold" htmlFor="login">Логин</label>
                    <input
                        id="login"
                        type="text"
                        placeholder="Ваш логин"
                        className={`border ${isError ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-2`}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-bold" htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Пароль"
                        className={`border ${isError ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-2`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-bold" htmlFor="password">Подтвердите пароль</label>
                    <input
                        id="password"
                        type="password"
                        className={`border ${isError ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-2`}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {isError && <div className="text-red-400 text-center">Неверный логин или пароль!</div>}
                <button
                    className={`w-full px-4 py-2 bg-white rounded-xl text-black ${isLoading && 'bg-white/80'}`}
                    disabled={isLoading}
                    type="submit"
                >Войти</button>
                <Link className="block text-center" to={"../login"}>Нет аккаунта?</Link>
            </form>
        </>
    );
}