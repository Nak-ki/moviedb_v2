import {Outlet} from "@mui/icons-material";

import {Header} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
