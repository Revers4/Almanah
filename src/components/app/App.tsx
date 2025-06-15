import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppHeader } from "../AppHeader/AppHeader";
import { Footer } from "../Footer/Footer.tsx";
import OtherLink from "../OtherLink/OtherLink.tsx";
import { ModalSearch } from "../ModalSearch/ModalSearch.tsx";

const MainPage = lazy(() => import("../pages/MainPage.tsx"));
const Knowledge = lazy(() => import("../pages/knowledge/Knowledge.tsx"));
const Auth = lazy(() => import("../pages/auth/Auth.tsx"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage.tsx"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage.tsx"));
const Introduction = lazy (() => import("../pages/knowledge/Introduction.tsx"))
const Service = lazy(()=> import('../pages/service/Service.tsx'))


const App = () => {

  return (
    <Router>
      <div className="app min-h-screen flex flex-col text-neutral-900 dark:text-white bg-white dark:bg-black/95">
        <ModalSearch/>
        <OtherLink />
        <AppHeader />
        <main className="flex-grow max-w-[1850px] w-full mx-auto px-5">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[300px] w-full">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-black border-t-transparent dark:border-white dark:border-t-transparent" />
              </div>
            }>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/knowledge" element={<Knowledge />}>
                <Route path="introduction" element={<Introduction />}/>
                <Route path="preparation-guide" />
              </Route>
              <Route path="/service" element={<Service/>}/>
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