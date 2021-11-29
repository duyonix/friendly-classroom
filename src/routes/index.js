import Dashboard from "../containers/AdminTemplate/Dashboard.jsx";
import Login from "../containers/HomeTemplate/Login.jsx";
import Home from "../containers/HomeTemplate/Home.jsx";
import Intro from "../containers/HomeTemplate/Intro.jsx";
import Register from "../containers/HomeTemplate/Register.jsx";

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
        component: Dashboard
    },
];

export { routeHome, routeAdmin };