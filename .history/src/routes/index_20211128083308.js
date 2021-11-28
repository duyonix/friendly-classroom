import DashBoard from "../containers/AdminTemplate/DashBoard";
import Auth from "../containers/HomeTemplate/Auth";
import Home from "../containers/HomeTemplate/Home";
import Intro from "../containers/HomeTemplate/Intro";


const routeHome = [
    {
        exact: true,   // disable the partial comparison
        path: "/",
        component: Home
    },
    {
        exact: false,
        path: "/auth",
        component: Auth
    },
    {
        exact: false,
        path: "/intro",
        component: Intro
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