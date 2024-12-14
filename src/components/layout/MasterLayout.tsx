import MegaMenuTop from "../common/MegaMenuTop";
import {Outlet} from "react-router-dom";

const MasterLayout = () => {
    return <div>
        <MegaMenuTop/>
        <Outlet />
    </div>
}

export default MasterLayout