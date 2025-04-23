import {Outlet} from "react-router";
import MegaMenuTop from "../../../common/components/layout/MegaMenuTop";
import NavigationBar from "../../../common/components/layout/NavigationBar";

const AuthLayout = () => {
    return <div className='container mx-auto h-screen'>
        <NavigationBar/>
        <div className='flex flex-col justify-center items-center'>
            <Outlet />
        </div>
    </div>
}

export default AuthLayout