import DashBoard from "../containers/AdminTemplate/DashBoard";
import Auth from "../containers/HomeTemplate/Auth";
import Home from "../containers/HomeTemplate/Home";
import Intro from "../containers/HomeTemplate/Intro";


const routeHome = [
    {
        exact: true,
        path: "/",
        component: Intro
    },
    {
        exact: false,
        path: "/home",
        component: Home
    },
    {
        exact: false,
        path: "/auth",
        component: Auth
    }
]

const routeAdmin = [
    {
        exact: false,
        path: "/dashboard",
        component: DashBoard
    },
];

export { routeHome, routeAdmin };