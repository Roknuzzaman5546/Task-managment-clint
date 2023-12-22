import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "./Authprovider";
import loginimg from '../../assets/login.svg'

const Login = () => {
    const { userLogin, usergoogleLogin } = useContext(Authcontext)
    const location = useLocation();
    const navigate = useNavigate();

    const form = location.state?.from?.pathname || '/';
    console.log(form)

    const handleLogin = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(form)
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handlegooglelogin = () => {
        usergoogleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire("User succesfully creat and update profile!");
                navigate(form)
            })
    }

    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100 p-2">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Login</button>
                        </div>
                    </form>
                    <button onClick={handlegooglelogin} className='btn font-bold w-10/12 mx-auto text-2xl'>
                        <span className=" text-[#4285F4]">G</span><span className=" text-[#DB4437]">o</span><span className=" text-[#F4B400]">o</span><span className=" text-[#4285F4]">g</span><span className=" text-[#0F9D58]">l</span><span className=" text-[#DB4437]">e</span>
                    </button>
                    <h2 className=" my-2 ml-7">If  you new in our resturent go to <Link to='/register'><span className=' text-blue-500 font-bold text-xl'>Register</span></Link></h2>
                </div>
            </div>
        </div>
    );
};
export default Login;