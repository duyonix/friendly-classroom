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
import AssignHomework from "../containers/ClassroomTemplate/AssignHomework.jsx";
import SubmitHomework from "../containers/ClassroomTemplate/SubmitHomework.jsx";
import UploadDocument from "../containers/ClassroomTemplate/UploadDocument.jsx";
import HomeworkDetail from "../containers/ClassroomTemplate/HomeworkDetail.jsx";
import Homework from "../containers/ClassroomTemplate/Homework.jsx";


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
    {
        exact: false,
        path: "/classroom/homework",
        component: Homework
    },


]

const routeClassroom = [
    {
        exact: false,
        path: "/classroom/:classroomId/classwork",
        component: Classwork
    },
    {
        exact: false,
        path: "/classroom/:classroomId/stream",
        component: Stream
    },
    {
        exact: false,
        path: "/classroom/:classroomId/member",
        component: Member
    },
    {
        exact: false,
        path: "/classroom/:classroomId/grade",
        component: Grade
    },
    {
        exact: false,
        path: "/classroom/:classroomId/assign-homework",
        component: AssignHomework
    },
    {
        exact: false,
        path: "/classroom/:classroomId/upload-document",
        component: UploadDocument
    },
    {
        exact: false,
        path: "/classroom/:classroomId/homework/:homeworkId/",
        component: SubmitHomework
    },
    {
        exact: false,
        path: "/classroom/:classroomId/homework-detail/:homeworkId/",
        component: HomeworkDetail
    },

];

export { routeHome, routeClassroom };