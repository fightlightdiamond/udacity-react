import {Outlet} from "react-router";
import NavigationBar from "./NavigationBar";

const BaseLayout = () => {
    return <div>
        <NavigationBar/>
        <Outlet />
    </div>
}

export default BaseLayout