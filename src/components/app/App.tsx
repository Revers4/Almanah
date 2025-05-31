import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppHeader } from "../AppHeader/AppHeader";
import { Footer } from "../Footer/Footer.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { setTheme } from "../../store/themeSlice.ts";
import OtherLink from "../OtherLink/OtherLink.tsx";

const MainPage = lazy(() => import("../pages/MainPage.tsx"));
const Knowledge = lazy(() => import("../pages/knowledge/Knowledge.tsx"));
const Auth = lazy(() => import("../pages/auth/Auth.tsx"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage.tsx"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage.tsx"));
const Introduction = lazy (() => import("../pages/knowledge/Introduction.tsx"))

const App = () => {
  const theme = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch()

  useEffect (()=> {
    dispatch(setTheme(theme))
  },[dispatch,theme])

  return (
    <Router>
      <div className={`app min-h-screen flex flex-col  bg-black ${theme==='dark' ? 'bg-black' : 'bg-white '}`}>
        <OtherLink />
        <AppHeader />
        <main className="flex-grow max-w-[1850px] w-full mx-auto px-5">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[300px] w-full text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent" />
              </div>
            }>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/knowledge" element={<Knowledge />}>
                <Route path="introduction" element={<Introduction />}/>
                <Route path="preparation-guide" />
              </Route>
              <Route path="/auth" element={<Auth />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

