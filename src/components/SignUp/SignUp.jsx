import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFontAwesomeLogoFull, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const SignUp = () => {
    const [error, setError]= useState('');
const {user, createUser} = useContext(AuthContext);

    const handleSignUp=event=>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })

        if(confirm !== password){
setError('Your password did not match. Try again');
return;
        }
        else if(password.length < 6){
            setError('Fatal, Your password must be in 6 character.')
        return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError("Please add at least one uppercase.");
            return;
        } 
        else if(!/(?=.*[0-9])/.test(password)){
            setError('Please add minimum 2 number');
            return;
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError('Please add at least one lowercase.');
            return;
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please SignUp!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p><small>Already have an account?</small><span className='text-orange-300'> <Link to='/login'>LogIn</Link></span></p>
                            <hr />
                            <p className="text-center">or</p>
                        </form>
                    <div className="text-center text-red-600"><p><small>{error}</small></p></div>
                        <div className="form-control mt-6">
                                <button className="btn btn-primary">Google</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;