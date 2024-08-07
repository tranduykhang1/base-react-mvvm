import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { useCallback } from "react";

export const useAnalytics = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCHhL5VQRREKwX8tndrHX_yAn9GZBKqObQ",
        authDomain: "fir-b6d44.firebaseapp.com",
        projectId: "fir-b6d44",
        storageBucket: "fir-b6d44.appspot.com",
        messagingSenderId: "973007961599",
        appId: "1:973007961599:web:811eea3c9416cb55a83bca",
        measurementId: "G-4KYTF4RZW2",
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const event = useCallback((name: string) => {
        logEvent(analytics, name);
    }, []);

    return {
        event,
    };
};
