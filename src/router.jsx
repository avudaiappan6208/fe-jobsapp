import { createBrowserRouter } from 'react-router-dom';
import App from "./App.jsx";
import Register from "./pages/Register.jsx";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import authloader from './loaders/unit/authloader.js';
import Logout from './components/Logout.jsx';
import CandidateDashboard from './pages/Users/CandidateDashboard.jsx';
import jobsLoader from './loaders/unit/jobsLoader';
import jobLoader from './loaders/unit/jobLoader.js';
import AdminLayout from './layouts/AdminLayout.jsx';
import CandidateLayout from './layouts/CandidateLayout.jsx';




const routes = [
    {
        path: '/',
        element: <App />,
        loader: authloader,
        children: [
            {
                path: "",
                element: <Home />,

            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
            {
                path: "candidate",
                element: <CandidateLayout />,
                loader: authloader,
                children: [
                    { path: "dashboard", element: <CandidateDashboard />, loader: jobsLoader },
                    { path: "jobs/:id", element: <CandidateDashboard />, loader: jobLoader },
                ]
            },
            {
                path: "Admin",
                element: <AdminLayout />,
                loader: authloader,
                children: [
                    {
                        path: "dashboard",
                        element: <div>AdminDashboard</div>,
                    }
                ]

            }


        ],
        hydrateFallbackElement: <div>Loading......</div>,
    }
];
const router = createBrowserRouter(routes, {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});





export default router;