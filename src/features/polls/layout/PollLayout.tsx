import React from "react";
import {Outlet} from "react-router";

const PollLayout = () => {
    return <div className='container mx-auto'>
        <Outlet />
    </div>
}

export default PollLayout