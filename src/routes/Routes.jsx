import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../layouts/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: 'book/:id',
                element: <BookService></BookService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <Bookings></Bookings>
            }
        ]
    }
]);

export default router;