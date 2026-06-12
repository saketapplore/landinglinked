import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Find element matching hash (removing the # symbol)
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Delay slightly to ensure elements are fully rendered in the DOM
                const timer = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                return () => clearTimeout(timer);
            }
        } else {
            // Fallback: scroll to top if there's no hash
            const scrollTask = requestAnimationFrame(() => {
                window.scrollTo(0, 0);
            });
            return () => cancelAnimationFrame(scrollTask);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
