import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppHeader } from "../AppHeader/AppHeader";
import { Footer } from "../Footer/Footer.tsx";


const MainPage = lazy(() => import("../pages/MainPage"));


const App = () => {

  return (
    <Router>
      <div className="app min-h-screen flex flex-col  bg-black">
        <AppHeader />
        <main className="flex-grow max-w-[1850px] w-full mx-auto">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

