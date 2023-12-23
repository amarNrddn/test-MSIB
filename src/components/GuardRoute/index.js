import { Outlet } from "react-router-dom";

export default function GuardRoute ({children}) {
    return children || <Outlet />
} 