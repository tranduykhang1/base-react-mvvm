import { useAnalytics } from "@/hooks/firebase/useAnalytics";
import { useAuthContext } from "@/providers/AuthProvider";
import { useEffect } from "react";

export default function Header() {
    const { user } = useAuthContext();

    const { event } = useAnalytics();

    useEffect(() => {
        event("page_view");
    }, []);

    return <div>Hi,{user?.email}</div>;
}
