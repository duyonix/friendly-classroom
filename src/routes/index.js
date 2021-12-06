import Classwork from "../containers/ClassroomTemplate/Classwork.jsx";
import Login from "../containers/HomeTemplate/Login.jsx";
import Home from "../containers/HomeTemplate/Home.jsx";
import Intro from "../containers/HomeTemplate/Intro.jsx";
import Register from "../containers/HomeTemplate/Register.jsx";
import Stream from "../containers/ClassroomTemplate/Stream.jsx";
import People from "../containers/ClassroomTemplate/People.jsx";

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

const routeClassroom = [
    {
        exact: false,
        path: "/classwork",
        component: Classwork
    },
    {
        exact: false,
        path: "/stream",
        component: Stream
    },
    {
        exact: false,
        path: "/people",
        component: People
    },
];

export { routeHome, routeClassroom };