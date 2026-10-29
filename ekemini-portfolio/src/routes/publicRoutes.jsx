import { PublicLayout } from '../pages/layout/PublicLayout';
import { Home } from '../pages/public/Home';
// import { Login } from '../pages/public/Login';



export const publicRoutes = [
    // {
    //     path: '/login',
    //     element: <Login />,
    // },
    {
        element: <PublicLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            
        ],
    },
];
