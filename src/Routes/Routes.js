import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllAds from "../Pages/AllAds/AllAds";
import Booking from "../Pages/Booking/Booking";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router =createBrowserRouter([

    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/booking',
                element:<Booking/>
            },
            {
                path:'/allads',
                element:<AllAds/>
            },
           
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;