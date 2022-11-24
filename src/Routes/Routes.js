import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

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
                element: <Login />
            }
        ]
        
    }
])

export default router;