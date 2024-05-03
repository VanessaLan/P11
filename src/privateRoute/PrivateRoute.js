import React from 'react';
import { Navigate, Outlet } from 'react-router';

const privateRoutes = () => {

    const auth = localStorage.getItem("token")


return (
    auth ? <Outlet/> : <Navigate to="/signin" />
)};

export default privateRoutes;