import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 10);
        return () => clearTimeout(timer);
    }, []);


     return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <article
        className={`
          transform transition-all duration-500 ease-out relative
          ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}
          border border-black/20 dark:border-white/20 w-full md:w-[400px] p-5 rounded-lg space-y-6
          shadow-lg backdrop-blur-sm
        `}
      >
        <Outlet />
      </article>
    </section>
  );
}