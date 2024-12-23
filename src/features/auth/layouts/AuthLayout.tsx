import {Outlet} from "react-router";

const AuthLayout = () => {
    return <div className='container mx-auto flex justify-center items-center h-screen'>
        <div className='w-[400px]'>
            <Outlet />
        </div>
    </div>
}

export default AuthLayout