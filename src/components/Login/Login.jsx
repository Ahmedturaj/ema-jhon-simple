import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError]=useState('');
    const [show, setShow]=useState();
const {user, signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
console.log(location);


let from = location.state?.from?.pathname || "/";
const handleLogin = event =>{
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result=>{
      const  loggedUser = result.user; 
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace:true});
    })
    .catch(error=>{
        console.log(error);
        setError('Your password is incorrect.')
    })
}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                <p onClick={()=> setShow (!show)}>
                                    <small>
                                        {
                                            show ? <span>Hide</span>: <span> Show</span>
                                        }
                                    </small>
                                </p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='mb-14'><small>New to Ema-John?</small><span className='text-orange-300'> <Link to='/signup'>SignUp</Link></span></p>
                            <hr />
                            <p className="text-center">or</p>
                            <p className='text-center text-red-600'><small>{error}</small></p>
                        </form>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Google</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;