import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <h3 className='text-2xl text-center mt-14'>loading....</h3>
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
        </div>
    );
};

export default PrivateRouter;