import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
const Userdetails = () => {

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <div className=" my-10">
            <h2 data-aos="flip-down" className=" text-6xl font-bold text-center font-lobester text-orange-500">Users details</h2>
            <div className=" flex md:flex-row flex-col bg-blue-900 px-5 py-10 w-10/12 mx-auto rounded-md mt-4 text-white">
                <div data-aos="flip-up" className=" lg:w-1/2 text-center">
                    <h1 className=" text-2xl font-bold text-center mb-2 font-mono">This type user are use this site</h1>
                    <div className="">
                        <h1 className=" text-xl">Teacher</h1>
                        <h1 className=" text-xl">Student</h1>
                        <h1 className=" text-xl">Developers</h1>
                        <h1 className=" text-xl">Bankers</h1>
                    </div>
                </div>
                <div data-aos="flip-down" className=" lg:w-1/2 text-center">
                    <h1 className=" text-2xl font-bold text-center mb-2 font-mono">To whom this site will benefit</h1>
                    <div>
                        <h1>This site can be used for many purposes. During this time, Jacon should be given responsibility in the work environment. Something good to note. <span className=" text-red-300">Tourists, corporate professionals, shopkeepers, ministers, businessmen, administrative </span> work and many more can be useful here.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userdetails;