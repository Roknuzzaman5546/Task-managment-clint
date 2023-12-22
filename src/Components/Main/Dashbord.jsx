import { FaHouse, FaNotesMedical, FaTabletScreenButton } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useContext } from 'react';
import { Authcontext } from '../Authentication/Authprovider';

const Dashbord = () => {
    const { user } = useContext(Authcontext)

    return (
        <div className=" flex lg:flex-row flex-col">
            <div className="lg:w-64 w-full lg:h-screen h-full bg-gray-800 font-bold text-white p-2 rounded-md">
                <div className=' flex flex-col items-center'>
                    <img className=' w-28 h-28 rounded-full' src={user?.photoURL} alt="" />
                    <h2 className=' text-2xl font-bold font-alfa text-orange-400'>{user?.displayName}</h2>
                </div>

                <ul className="menu">
                    <>
                        <li><NavLink to="/dashbord/profile">
                            <CgProfile></CgProfile>
                            Profile
                        </NavLink>
                        </li>
                        <li><NavLink to="/dashbord/tasklist">
                            <FaNotesMedical></FaNotesMedical>
                            Tasklist
                        </NavLink>
                        </li>
                        <li><NavLink to="/dashbord/previoustask">
                            <FaTabletScreenButton></FaTabletScreenButton>
                            Previous Task
                        </NavLink>
                        </li>
                        <div className="divider"></div>
                        <li><NavLink to="/">
                            <FaHouse></FaHouse>
                            Home</NavLink>
                        </li>
                        <li><NavLink to="/about">
                            About</NavLink>
                        </li>
                        <li><NavLink to="/details">
                            Details</NavLink>
                        </li>
                    </>
                </ul>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;