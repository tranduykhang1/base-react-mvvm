import { useAuth } from "@/hooks/auth/useAuth";

export default function Header() {
    const { user } = useAuth({ redirectTo: "" });
    return <div>Hi,{user?.email}</div>;
}
