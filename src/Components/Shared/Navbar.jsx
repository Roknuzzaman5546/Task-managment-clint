import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Authentication/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext)
    const links =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/details'>Details</Link></li>
        </>

    const handlLogout = () => {
        userLogout()
            .then(() => {
                Swal.fire("User log out!");
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase">Build task</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Name
                                    <span className="badge">{user.displayName}</span>
                                </a>
                            </li>
                            <li><Link to="/dashbord/profile">Dashbord</Link></li>
                            <li><Link onClick={handlLogout}>Logout</Link></li>
                        </ul>
                    </div> : <Link to="/login"><button className="btn">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;