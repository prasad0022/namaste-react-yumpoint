import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(() => navigator.onLine);

    useEffect(() => {
        const handleOffline = () => setIsOnline(false);
        const handleOnline = () => setIsOnline(true);

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return isOnline;
};