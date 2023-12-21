import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=" mt-10">
            <footer className="footer p-10 bg-black text-neutral-content">
                <div>
                    <h2 className=' text-2xl font-bold'>Socail</h2>
                    <aside className=' flex gap-4 items-center'>
                        <h3 className=" bg-accent p-2 rounded-full text-black">
                            <a target="blank" href="https://www.facebook.com/roknujjamansajib">
                                <FaFacebook className=" font-bold text-xl"></FaFacebook>
                            </a>
                        </h3>
                        <h3 className=" bg-accent p-2 rounded-full text-black">
                            <a target="blank" href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/">
                                <FaLinkedin className=" font-bold text-xl"></FaLinkedin>
                            </a>
                        </h3>
                        <h3 className=" bg-accent p-2 rounded-full text-black">
                            <a target="blank" href="https://www.instagram.com/roknujjamansajib/">
                                <FaInstagram className=" font-bold text-xl"></FaInstagram>
                            </a>
                        </h3>
                    </aside>
                </div>
                <aside className=' flex flex-col items-center'>
                    <img className='w-14 h-14 rounded' src={logo} alt="" />
                    <p>Build your task site</p>
                    <p>Providing reliable tech since 2023</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;