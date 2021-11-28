import DashBoard from "../containers/AdminTemplate/DashBoard";
import Login from "../containers/HomeTemplate/Login";
import Home from "../containers/HomeTemplate/Home";
import Intro from "../containers/HomeTemplate/Intro.jsx";
import Register from "../containers/HomeTemplate/Register";

const routeHome = [
    {
        exact: true,   // disable the partial comparison
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
        path: "/login",
        component: Login
    },
    {
        exact: false,
        path: "/register",
        component: Register
    },

]

const routeAdmin = [
    {
        exact: false,
        path: "/dashboard",
        component: DashBoard
    },
];

export { routeHome, routeAdmin };