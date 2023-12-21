import { FaHouse, FaNotesMedical } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Dashbord = () => {
    return (
        <div className=" flex">
            <div className=" w-64 h-screen bg-blue-400">
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