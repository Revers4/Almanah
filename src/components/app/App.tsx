import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppHeader } from "../AppHeader/AppHeader";
import { Footer } from "../Footer/Footer.tsx";
import OtherLink from "../OtherLink/OtherLink.tsx";

const MainPage = lazy(() => import("../pages/MainPage.tsx"));
const Knowledge = lazy(() => import("../pages/Knowledge.tsx"));
const Auth = lazy(() => import("../pages/auth/Auth.tsx"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage.tsx"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage.tsx"));



const App = () => {

  return (
    <Router>
      <div className="app min-h-screen flex flex-col  bg-black/95">
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
                <Route path="introduction" />
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

