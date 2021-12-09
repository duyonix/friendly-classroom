import Classwork from "../containers/ClassroomTemplate/Classwork.jsx";
import Login from "../containers/HomeTemplate/Login.jsx";
import Home from "../containers/HomeTemplate/Home.jsx";
import Intro from "../containers/HomeTemplate/Intro.jsx";
import Register from "../containers/HomeTemplate/Register.jsx";
import Stream from "../containers/ClassroomTemplate/Stream.jsx";
import Member from "../containers/ClassroomTemplate/Member.jsx";
import Calendar from "../containers/HomeTemplate/Calendar.jsx";
import TodoList from "../containers/HomeTemplate/TodoList.jsx";
import UserAccount from "../containers/HomeTemplate/UserAccount.jsx";
import Grade from "../containers/ClassroomTemplate/Grade.jsx";

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
    {
        exact: false,
        path: "/calendar",
        component: Calendar
    },
    {
        exact: false,
        path: "/todo-list",
        component: TodoList
    },
    {
        exact: false,
        path: "/user-account",
        component: UserAccount
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
        path: "/member",
        component: Member
    },
    {
        exact: false,
        path: "/grade",
        component: Grade
    },
];

export { routeHome, routeClassroom };