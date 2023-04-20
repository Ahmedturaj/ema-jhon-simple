import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
       logOut()
            .then(() => {
            
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">order</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">SignUp</Link>

            </div>
            {user ? <div className='flex items-center gap-7'><p className='text-white'><small>welcome -_/^\_- {user.email}</small></p>
            <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button></div>: <button className='btn btn-primary text-center'><Link to='/login'>LogIn </Link></button>}
        </nav>
    );
};

export default Header;