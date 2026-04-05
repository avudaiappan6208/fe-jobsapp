import React from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router'

const CandidateLayout = () => {
    const user = useLoaderData();
    console.log(user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    if (user.user.role !== 'candidate') {
        return <Navigate to="/" replace />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default CandidateLayout
