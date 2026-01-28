import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on every route change
        // Using requestAnimationFrame to ensure it happens after the page has rendered
        const scrollTask = requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
        return () => cancelAnimationFrame(scrollTask);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
