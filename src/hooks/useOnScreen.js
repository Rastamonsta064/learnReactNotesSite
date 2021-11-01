import { useState, useEffect,  } from "react";


export default function useOnScreen(options) {
    const [ref,setRef] = useState(null);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setVisible(entry.isIntersecting);
            }, options);
        if (ref) {
            observer.observe(ref);
        }
        return () => {
            if(ref){
                observer.unobserve(ref);
            }
        };
    }, [ref,options]);
    return [setRef,visible];
}