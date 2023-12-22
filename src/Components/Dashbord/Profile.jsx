import { useContext } from "react";
import { Authcontext } from "../Authentication/Authprovider";

const Profile = () => {
    const { user } = useContext(Authcontext)
    return (
        <div>
            <div className="mb-10 mt-5">
                <h1 className="text-4xl border-2 border-b-slate-400 border-t-slate-400 py-5 w-1/2 mx-auto text-center font-Chinzel uppercase font-bold font-rancho">Profile</h1>
                <h1 className=" text-center mb-2 text-yellow-500 text-xl">---Your profile---</h1>
            </div>
            <div className=" lg:w-1/2 lg:mx-auto w-full">
                <div className="card w-96 bg-base-100 shadow-xl p-5 flex flex-col items-center">
                    <figure><img className="h-60 w-60 rounded-md" src={user?.photoURL} alt="" /></figure>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold font-rubik">Name: {user?.displayName}</h2>
                        <p className=" text-xl font-bold">Status: To do</p>
                        <p className=" font-bold">Email: {user?.email}</p>
                        <p className=" font-bold">Phone: 01755463590</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;