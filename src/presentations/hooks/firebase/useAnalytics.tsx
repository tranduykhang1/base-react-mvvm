import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { useCallback, useState } from "react";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "fir-ga-cc105.firebaseapp.com",
    projectId: "fir-ga-cc105",
    storageBucket: "fir-ga-cc105.appspot.com",
    messagingSenderId: "20806416269",
    appId: "1:20806416269:web:b3acea50cc94fc3157afc4",
    measurementId: "G-DZSEZG2ZN0",
};

export const useAnalytics = () => {
    const [app] = useState(initializeApp(firebaseConfig));
    const analytics = getAnalytics(app);

    const event = useCallback(
        (name: string) => {
            logEvent(analytics, name);
        },
        [analytics]
    );

    return {
        event,
    };
};
