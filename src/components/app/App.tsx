import { lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppHeader } from "../AppHeader/AppHeader";
import { Footer } from "../Footer/Footer.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { setTheme } from "../../store/themeSlice.ts";


const MainPage = lazy(() => import("../pages/MainPage"));
const Knowledge = lazy(() => import("../pages/Knowledge.tsx"));

const App = () => {
  // const theme = useAppSelector((state)=>state.theme)
  const theme = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch()

  console.log('app theme', theme)
  useEffect (()=> {
    dispatch(setTheme(theme))
  },[dispatch,theme])

  return (
    <Router>
      <div className="app min-h-screen flex flex-col  bg-black">
        <AppHeader />
        <main className={`flex-grow max-w-[1850px] w-full mx-auto transition-colors duration-200 ${theme==='dark' ? 'bg-black' : 'bg-white '}`}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/knowledge" element={<Knowledge />}>
              <Route path="introduction"/>
              <Route path="preparation-guide"/>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

