import { createBrowserRouter } from 'react-router-dom';
import App from "./App.jsx";

import Register from "./pages/Register.jsx";    
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import authloader from './loaders/unit/authloader.js';


const routes = [
    {
        path: '/',
        element: <App />,
        loader:authloader,
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