import { Outlet } from "react-router-dom";
import Footer from "src/components/core/Footer";
import NavigationBar from "src/components/core/NavigationBar";

export default function AppLayoutNoFooter () {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    )
}