import DashBoard from "../containers/AdminTemplate/DashBoard";
import Auth from "../containers/HomeTemplate/Auth";
import Home from "../containers/HomeTemplate/Home";


const routeHome = [
    {
        exact: true,   // disable the partial comparation
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